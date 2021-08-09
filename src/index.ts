import info from './data/info.json'

type Props = {
	kou: boolean;
	amount: number;
	fuyou: number;
}

export default (props: Props): number => {
	const { kou, amount, fuyou } = props
	if(amount < info.bottomAmount){
		return kou ? 0 : Math.floor(amount*info.bottomRate*1/100)
	} else {
		let matchedNum = info.condition.findIndex(val => val.boundary && amount < val.boundary)
		if(matchedNum == -1){
			matchedNum = info.condition[0].boundary && info.condition[0].boundary >= amount ? 0 : info.condition.length-1
		}
		const matched = info.condition[matchedNum]

		let amountBase = 0
		let rate = null
		let prevBoundary = null
		let fuyouOver7TotalAmount = 0
		let result = 0

		if(kou){
			if(fuyou > 7){
				fuyouOver7TotalAmount = (fuyou - 7)*info.amountForFuyouOver7
			}
			const fuyouHandling = fuyou >= 7 ? 7 : fuyou
			amountBase = matched.kou.amount[fuyouHandling]
			rate = matched.kou.rate
			if(rate){
				prevBoundary = matchedNum > 0 ? info.condition[matchedNum-1].boundary : null
			}
		} else {
			amountBase = matched.otsu.amount
			rate = matched.otsu.rate
			if(rate){
				let num = matchedNum
				while(info.condition[num].otsu.amount == matched.otsu.amount) num--
				prevBoundary = info.condition[num].boundary
			}
		}
		if(!rate || !prevBoundary){
			result =  amountBase - fuyouOver7TotalAmount
		} else {
			result =  amountBase + _calcWithRate(amount, prevBoundary, rate) - fuyouOver7TotalAmount
		}
		return result >= 0 ? result : 0
	}
}

function _calcWithRate(amount:number, amountPrev: number, rate: number){
   return Math.floor((amount - amountPrev)*rate*1/100)
}

