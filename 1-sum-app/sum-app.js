function add() {
    var num1 = parseInt(document.getElementById("inp-first-num").value);
    var num2 = parseInt(document.getElementById("inp-second-num").value);
    if ((num1 < 0) && (num1 < 0)) {
        document.getElementById("first-error-message").style.display = "inline";
    }
    if ((num2 < 0) && (num2 < 0)) {
        document.getElementById("second-error-message").style.display = "inline";
    }
    sum = num1 + num2;
    document.getElementById("output-result").value = sum;
}
