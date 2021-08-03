"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const info_json_1 = __importDefault(require("./data/info.json"));
exports.default = (props) => {
    const { kou, amount, fuyou } = props;
    if (amount < info_json_1.default.bottomAmount) {
        return kou ? 0 : Math.floor(amount * info_json_1.default.bottomRate * 1 / 100);
    }
    else {
        let matchedNum = info_json_1.default.condition.findIndex(val => val.boundary && amount < val.boundary);
        if (matchedNum == -1) {
            matchedNum = info_json_1.default.condition[0].boundary && info_json_1.default.condition[0].boundary >= amount ? 0 : info_json_1.default.condition.length - 1;
        }
        const matched = info_json_1.default.condition[matchedNum];
        let amountBase = 0;
        let rate = null;
        let prevBoundary = null;
        if (kou) {
            const fuyouHandling = fuyou >= 7 ? 7 : fuyou;
            amountBase = matched.kou.amount[fuyouHandling];
            rate = matched.kou.rate;
            if (rate) {
                prevBoundary = matchedNum > 0 ? info_json_1.default.condition[matchedNum - 1].boundary : null;
            }
        }
        else {
            amountBase = matched.otsu.amount;
            rate = matched.otsu.rate;
            if (rate) {
                let num = matchedNum;
                while (info_json_1.default.condition[num].otsu.amount == matched.otsu.amount)
                    num--;
                prevBoundary = info_json_1.default.condition[num].boundary;
            }
        }
        if (!rate || !prevBoundary) {
            return amountBase;
        }
        else {
            return amountBase + _calcWithRate(amount, prevBoundary, rate);
        }
    }
};
function _calcWithRate(amount, amountPrev, rate) {
    return Math.floor((amount - amountPrev) * rate * 1 / 100);
}
