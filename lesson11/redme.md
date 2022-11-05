```js
let result = 1;

function numberToPower(number, power) {
    for (let i = 1; i <= power; i++) {
        result = result * number;
    }
    return result
}

console.log(numberToPower(2, 3));