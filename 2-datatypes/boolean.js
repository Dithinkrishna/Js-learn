const prompt = require("prompt");

prompt.start();

prompt.get(["input"], main)
function main(err, res) {
    let parsedInput = false;
    if (res.input === "true") {
        parsedInput === true;
    } else if (res.input === "false") {
        parsedInput === false;
    } else {
        console.log("invalid input");
        return;
    }
}