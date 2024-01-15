function add() {
    var num1 = parseInt(document.getElementById("inp-first-num").value);
    var num2 = parseInt(document.getElementById("inp-second-num").value);
    var hasError = false;
    if (num1 && num1 < 0) {
        document.getElementById("first-error-message").style.display = "inline";
        hasError = true;
    } else {
        document.getElementById("first-error-message").style.display = "none";
    }
    if (num2 && num2 < 0) {
        document.getElementById("second-error-message").style.display = "inline";
        hasError = true;
    } else {
        document.getElementById("second-error-message").style.display = "none";
    }
    if (hasError) {
        document.getElementById("output-result").value = "";
        return;
    }

    const sum = num1 + num2;
    document.getElementById("output-result").value = sum;
}
