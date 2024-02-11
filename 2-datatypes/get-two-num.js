const prompt = require("prompt");

prompt.start();

prompt.get(["number1", "number2"],
    function (err, res) {
        console.log(res.number1);
        console.log(res.number2);
    })