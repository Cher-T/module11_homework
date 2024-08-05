function sum (firstNum) {
    return function (secondNum) {
        return firstNum + secondNum;
    }
}

console.log(sum(19)(41));