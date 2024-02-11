const prompt = require("prompt");

prompt.start();

prompt.get(["number1", "number2"], main)
function main(err, res) {
    const number1 = Boolean(res.number1);
    const number2 = Boolean(res.number2);
    const boolean = res.number1 >= res.number2
    console.log(boolean)
}