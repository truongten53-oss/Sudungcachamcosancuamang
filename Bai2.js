let arrNumber = [1,2,4,5,6,8,6]
let result = [0];
for (let i = 1 ; i < arrNumber.length ; i++ ) {
    if (arrNumber[i] % 2 === 0 && arrNumber[i - 1] % 2 === 0) {
        result += "-";
    }
    result += arrNumber[i];
}
console.log(result);
