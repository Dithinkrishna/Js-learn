const prompt = require("prompt");

prompt.start();

prompt.get(["number1"], main, checkIsDivisible)
function main(err, res) {
    const number1 = Number(res.number1);
    if (!number1) {
        console.log("Number is not valid");
        return;
    }
    checkIsDivisible(number1)
}
function checkIsDivisible(inputNumber) {
    if (inputNumber % 2 === 0) {
        console.log("Number is divisible by 2");
        return;
    }
    if (inputNumber % 3 === 0) {
        console.log("Number is divisible by 3");
        return;
    }
    if (inputNumber % 5 === 0) {
        console.log("Number is divisible by 5");
        return;
    }
    console.log("Number is not divisible by 2,3 or 5");
}