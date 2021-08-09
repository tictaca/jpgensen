# gensen

Function to calculate the amount of Japanese withholding tax

給与所得の源泉徴収税額を計算する関数です。
（現状は月額分のみ、月額表の甲欄を適用する給与等に対する税額の電算機計算の特例には未対応です）



## install

```
npm install --save jpgensen
```



## Usage

金額、甲かどうか、扶養親族の人数を渡すと、源泉徴収税額を返します

```
import jpgensen from "jpgensen"

const settings = {
	amount: 88000,
	kou: true,
	fuyou: 0
}
jpgensen(settings)
//130
```

#### settings

| option | type    | 内容                                          |
| ------ | ------- | --------------------------------------------- |
| amount | number  | その月の社会保険料等控除後の給与等の金額      |
| kou    | boolean | 甲欄に該当するかどうか（true: 甲, false: 乙） |
| fuyou  | number  | 扶養親族等の数                                |



## License

Licensed under the MIT license