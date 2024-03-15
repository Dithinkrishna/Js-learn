const prompt = require("prompt");

prompt.start();

prompt.get(["number1", "number2"], main,)
function main(err, res) {
    const number1 = BigInt(res.number1);
    const number2 = BigInt(res.number2);
    const sum = number1 + number2;
    console.log(sum);
}




