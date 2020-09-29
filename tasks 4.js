function firstDecapital (str){
   let firstSymbol = str[0].toLowerCase()
    string = firstSymbol+ str.slice(1);
    return string
}

function IntegerOrNot (num){
    num = Number.parseFloat(num);
    return Number.isInteger(num);
}

function findFirstNotRepeating (str) {
    for (let i = 0; i < str.length; i++) {
        let symbol = str.charAt(i); //возвращает символ по указанному индексу строки
        if (str.indexOf(symbol) == i && str.indexOf(symbol, i + 1) == -1) { //символ с номером i не имеет совпадения со следующим
            return symbol
        }
    }
    return null;
}

module.exports.firstDecapital = firstDecapital
module.exports.findFirstNotRepeating = findFirstNotRepeating
module.exports.IntegerOrNot = IntegerOrNot
