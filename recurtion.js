//Doing one thing again and again by function. if we call a function inside of that function that function is called recurtion function.

function consoleNumber(i) {
    if (i > 10) {
        return;
    }
    console.log(i);
    // consoleNumber(i + 1);
    consoleNumber(++i);
}
consoleNumber(1);