const prompt = require("prompt");
prompt.start();
prompt.get(["input"], main)
function main(err, res) {
    const names = ["Dithin", "Dinu", "Priji", "Arch"];
    const input = res.input;
    for (let index = 0; index < names.length; index++) {
        if (names[index].toUpperCase().includes(input.toUpperCase())) {
            console.log(`Character ${input} is present in ${names[index]}`)
            continue;
        }
        console.log(`Character ${input} is not present in ${names[index]}`)
    }
    return;
}

