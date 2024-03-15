const prompt = require("prompt");

prompt.start();

prompt.get(["number1", "number2"], main)
function main(err, res) {
    let number1 = Number(res.number1);
    let number2 = Number(res.number2);
    let sum = number1 + number2
    console.log(number1);
    console.log(number2);
    console.log("sum of number1 and number2 is", sum)
}