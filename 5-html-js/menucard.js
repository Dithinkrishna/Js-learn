function addElement() {
    const foodName = document.createElement(`input`);
    foodName.style.cssText = "margin-top:15px"
    const deleteButton = document.createElement(`button`);
    deleteButton.style.cssText = "width:30px;height:23px;margin-top:15px;color:red;border-color:grey;"
    foodName.value = "";
    deleteButton.textContent = " - ";
    const name = document.getElementById("menu-card");
    name.appendChild(foodName);
    name.appendChild(deleteButton);
}
function toggleReadOnly() {
    const currentInputReadOnly = document.getElementById("input-tea").readOnly;
    document.getElementById('input-tea').readOnly = !currentInputReadOnly;
}
