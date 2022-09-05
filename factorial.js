//factioral by using for loop
/*
var number = getFactorial(7);
let factorial = 1;
for (let i = 7; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(number); */

//factorial by recurtion

function getFactorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * (getFactorial(--i));
}
console.log(getFactorial(7));