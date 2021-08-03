import xlrd
from xlutils.styles import Styles
import re
import pprint
import json
import textwrap
import glob

src = glob.glob('./src/*.xls')
for file_src in src:
    file_def = re.search('^\.\/src\/(.*?)\.xls', file_src)[1]

    wb = xlrd.open_workbook(file_src)
    ws = wb.sheet_by_index(0)

    #表の開始セルを判定
    start_col = None
    start_row = None
    end_col = None
    for i in range(ws.row_len(0)):
        if(start_row == None):
            matched = next(( x for x in ws.col_values(i) if re.search('給与所得の源泉徴収税額表', str(x)) != None), None)
            if(matched != None):
                start_col = i
                start_row = ws.col_values(i).index(matched)
        else:
            if(all([x == '' for x in ws.col_values(i)])):
                end_col = i

    #ws.row_values(10, start_col, end_col)
    amount_start = None
    amount_end = None
    condition_start = None
    condition_end = None
    summary = {}
    amount_info = []
    condiiton_info = []
    for i in range(start_row, len(ws.col_values(0))):
        row_values = ws.row_values(i, start_col, end_col)
        #すべてのセルが円だけしか入っていない行を単位行とみなして次の行を内容の開始行とする
        if(all([re.search('^\s*円\s*$', str(x)) != None for x in row_values])):
            amount_start = i+1
        if(amount_start != None):
            if(condition_start == None):
                #1列目に値が入っていて2列目に入っていない行を条件での算定情報の開始とみなす
                if(row_values[0] != '' and row_values[1] == ''):
                    amount_end = i-1 
                    condition_start = i
            if(condition_end == None):
                if(re.search('^\s*る金額\s*$', str(row_values[0])) != None):
                    condition_end = i
            if(all(x == '' for x in row_values)):
                continue
            else:
                if(amount_start != None and amount_start <= i and amount_end == None):
                    if(re.search('^\s*円未満\s*$', str(row_values[1])) != None):
                        bottom_rate_match = re.search('その月の社会保険料等控除後の給与等の金額の([\d.]+)％に相当する金額', row_values[-1])
                        if(bottom_rate_match != None):
                            summary['bottomAmount'] = int(row_values[0])
                            summary['bottomRate'] = float(bottom_rate_match[1])
                        else:
                            print('bottomRateが取得できませんでした')
                    else:
                        amount_info.append({
                            "from": int(row_values[0]),
                            "boundary": int(row_values[1]),
                            "kou": {
                                "rate": None,
                                "amount": [int(x) for x in row_values[2:10]]
                            },
                            "otsu": {
                                "rate": None,
                                "amount": int(row_values[-1])
                            }
                        })
                #条件での算定の情報取得
                if(condition_start != None and condition_end == None):
                    #1列目:金額、2列目: 結合されている、3列目〜最後の前の列：少数の行を情報の開始業とみなす
                    if(re.search('^\s*[\d,]+円\s*$', row_values[0]) != None and row_values[1] == '' and all(type(x) in [float] for x in row_values[2:len(row_values)-1])):
                        sum = {
                            "boundary": None,
                            "from": int(re.sub('円|,', '', row_values[0])),
                            "kou": {
                                'amount': [int(x) for x in row_values[2:10]]
                            },
                            "otsu": {
                                'amount': int(row_values[-1]) if row_values[-1] != '' else ''
                            }
                        }
                        j = 1
                        break_next = False
                        while True:
                            if(re.search('^\s*[\d,]+円\s*$', ws.row_values(i+j, start_col, end_col)[0]) != None and ws.row_values(i+j, start_col, end_col)[1] == '' and all(type(x) in [float] for x in ws.row_values(i+j, start_col, end_col)[2:len(ws.row_values(i+j, start_col, end_col))-1])):
                                break
                            if(break_next): break
                            if(re.search('^\s*る金額\s*$', str(ws.row_values(i+j, start_col, end_col)[0])) != None):
                                break_next = True

                            cur_info = ws.row_values(i+j, start_col, end_col)

                            otsu_rate_matched = re.search('[\d,]+円に、その月の社会保険料等控除後の給与等の金額のうち[\d,]+円を超える金額の([\d.]+)％に相当する金額を加算した金額', re.sub('\n', '', cur_info[-1]))
                            if(otsu_rate_matched != None): sum['otsu']['rate'] = float(otsu_rate_matched[1])

                            kou_rate_matched = re.search('[\d,]+円を超える金額の([\d.]+)％に相当する金額を加算した金額', cur_info[2])
                            if(kou_rate_matched != None): sum['kou']['rate'] = float(kou_rate_matched[1])

                            j = j + 1
                        condiiton_info.append(sum)


    for i in range(len(condiiton_info)):
        cur_info = condiiton_info[i]
        cur_info['boundary'] = condiiton_info[i+1]['from'] if i < len(condiiton_info)-1 else None
        if(not 'amount' in cur_info['otsu'] or cur_info['otsu']['amount'] == ''):
            j = 1
            while(i-j > 0 and (not 'amount' in condiiton_info[i-j]['otsu'] or condiiton_info[i-j]['otsu']['amount'] == '' )):
                j = j+1
            #amountの取れている条件ではrateも取れているのでまとめて反映
            cur_info['otsu']['amount'] = condiiton_info[i-j]['otsu']['amount']
            cur_info['otsu']['rate'] = condiiton_info[i-j]['otsu']['rate']
    summary['condition'] = [* amount_info, * condiiton_info]

    with open(f'./dist/summary_{ file_def }.json', 'w') as f:
        json.dump(summary, f, indent=4)

    #テストの作成
    test_text = ''
    for index, condition in enumerate(summary['condition']):
        amounts = [* condition['kou']['amount'], condition['otsu']['amount']]
        for i in range(len(amounts)):
            is_kou = i != len(amounts)-1
            rate = condition['kou' if is_kou else 'otsu']['rate']
            amount = condition['from']
            amountBase = condition['from']
            if(not is_kou and rate != None):
                j = 0
                while(summary['condition'][index-j]['otsu']['amount'] == condition['otsu']['amount']): j = j+1
                amountBase = summary['condition'][index-j]['boundary']
            
            while True:
                var = {
                        'name': f"amount:{amount}, kou:{ 'true' if is_kou else 'false' }, fuyou:{ i if is_kou else 0 }",
                    'amount': amount,
                    'answer': amounts[i] if rate == None else f"{ amounts[i] }+Math.floor((options.amount - { amountBase })*{ rate }*1/100)",
                    'kou': 'true' if is_kou else 'false',
                    'fuyou': i if is_kou else 0
                }
                new_text = textwrap.dedent("""
                    test("{name}", () => {{
                        const options = {{
                            kou: {kou},
                            fuyou: {fuyou},
                            amount: {amount}
                        }}
                        expect(calc(options)).toBe({answer})
                    }})
                """).format(name=var['name'], amount=var['amount'], answer=var['answer'], kou=var['kou'], fuyou=var['fuyou'])

                test_text += new_text
                amount = amount+1000

                if(condition['boundary'] == None):
                    break
                elif(amount+1000 >= condition['boundary']):
                    break


    with open('./src/format.txt', 'r') as f:
        head_text = f.read()

    with open(f'../test/{ file_def }.test.ts', 'w') as f:
        f.write(f'{head_text}\n{test_text}')

