const prompt = require("prompt");

prompt.start();

prompt.get(["parsedinput"], main)
function main(err, res) {
    let parsedinput = true;
    if (res.parsedinput === "true") {
        parsedinput = true;
    } else if (res.parsedinput === "false") {
        parsedinput = false;
    } else {
        parsedinput = false;
        console.log("invalid input")
        return;
    }
    console.log("valid input", parsedinput)

}
