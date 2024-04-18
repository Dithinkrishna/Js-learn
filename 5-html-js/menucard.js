function add() {
    const foodName = document.createElement("input-food");
    foodName.setAttribute("type", "text");
    foodName.setAttribute("value", "Porotta");
    document.getElementById("body").appendChild(foodName);
}
function readOnly() {
    document.getElementById('input-tea').readOnly = true;
}
add()