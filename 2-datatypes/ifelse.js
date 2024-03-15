const prompt = require("prompt");

prompt.start();

prompt.get(["number1"], main)
function main(err, res) {
    const number1 = Number(res.number1);
    if (number1 >= 10 && number1 <= 20) {
        console.log("Number is between 10 and 20");
    } else {
        console.log("Number is not in between 10 and 20")
    }
}