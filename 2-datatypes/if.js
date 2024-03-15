const prompt = require("prompt");

prompt.start();

prompt.get(["number1"], main)
function main(err, res) {
    const number1 = Number(res.number1);
    if (number1 >= 10) {
        console.log("Number is greater than 10");
    }
}