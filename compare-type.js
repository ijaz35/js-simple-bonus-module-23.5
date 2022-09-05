function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}

const result = compare(25, 25);
console.log(result);
let a = 25;
let b = a.toString();
console.log(typeof b);
