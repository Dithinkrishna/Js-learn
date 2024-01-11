function add() {
    var num1 = parseInt(document.getElementById("inp-first-num").value);
    if (num1 <= 0) {
        alert("Negative number is not supported. Please enter a positive number!")
    }
    var num2 = parseInt(document.getElementById("inp-second-num").value);
    if (num2 <= 0) {
        alert("Negative number is not supported. Please enter a positive number!")
    }
    var sum = num1 + num2;
    document.getElementById("output-result").value = sum;
}