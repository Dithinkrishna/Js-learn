const prompt = require("prompt");

prompt.start();

prompt.get(["input"], main)
function main(err, res) {
    let parsedinput = false;
    if (res.input === "true") {
        console.log(parsedinput = true);
    } else if (res.input === "false") {
        console.log(parsedinput = false);
    } else {
        console.log("invalid input");
        return;
    }
}