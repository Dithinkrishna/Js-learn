function add() {
    var num1 = parseInt(document.getElementById("inp-first-num").value);
    if (num1 == null) {
        document.getElementById("first-error-message").style.display = "none";
    }
    if (num1 <= 0) {
        document.getElementById("first-error-message").style.display = "inline";
    }
    var num2 = parseInt(document.getElementById("inp-second-num").value);

    if (num2 == null) {
        document.getElementById("second-error-message").style.display = "none";
    }
    if (num2 <= 0) {
        document.getElementById("second-error-message").style.display = "inline";
    }
    var sum = num1 + num2;
    document.getElementById("output-result").value = sum;
}