function add() {
    var num1 = parseInt(document.getElementById("inp-first-num").value);
    var num2 = parseInt(document.getElementById("inp-second-num").value);
    var sum = num1 + num2;
    document.getElementById("output-result").value = sum;
}