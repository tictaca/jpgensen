import calc from './'

test('basic', () => {
	const res = calc({
		amount: 736000,
		kou: true,
		fuyou: 9,
	})
	console.log('res:',res)
	expect(res).toBe(27200)
})

test('otsuOver740000', () => {
	const props = {
		amount: 780000,
		kou: false,
		fuyou: 1,
	}
	const res = calc(props)
	console.log('res:',res)
	expect(res).toBe(259800+Math.floor((props.amount-740000)*40.84*1/100))
})

test('otsuOver1700000', () => {
	const props = {
		amount: 1800000,
		kou: false,
		fuyou: 1,
	}
	const res = calc(props)
	console.log('res:',res)
	expect(res).toBe(651900+Math.floor((props.amount-1700000)*45.945*1/100))
})

test('kouOver350000', () => {
	const props = {
		amount: 3800000,
		kou: true,
		fuyou: 1,
	}
	const res = calc(props)
	console.log('res:',res)
	expect(res).toBe(1119150+Math.floor((props.amount-3500000)*45.945*1/100))
})
