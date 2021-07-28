import info from './src/info.json'

type Props = {
	kou: boolean;
	amount: number;
	fuyou: number;
}

export default (props: Props) => {
	const { kou, amount, fuyou } = props
	if(amount < info.bottomAmount){
		return kou ? 0 : Math.floor(amount*info.bottomRate*1/100)
	} else {
		let matchedNum = info.condition.findIndex(val => amount < val.boundary)
		if(matchedNum == -1){
			matchedNum = info.condition.length-1
		}
		const matched = info.condition[matchedNum]

		let amountBase = 0
		let rate = null
		let prevBoundary = 0
		if(kou){
			const fuyouHandling = fuyou >= 7 ? 7 : fuyou
			amountBase = matched.fuyou.amount[fuyouHandling]
			rate = matched.fuyou.rate
			prevBoundary = info.condition[matchedNum-1].boundary
		} else {
			amountBase = matched.otsu.amount
			rate = matched.otsu.rate
			let num = matchedNum
			while(info.condition[num].otsu.amount == matched.otsu.amount) num--
			prevBoundary = info.condition[num].boundary
		}
		if(!rate){
			return amountBase
		} else {
			return amountBase + _calcWithRate(amount, prevBoundary, rate)
		}
	}
}

function _calcWithRate(amount, amountPrev, rate){
   return Math.floor((amount - amountPrev)*rate*1/100)
}

