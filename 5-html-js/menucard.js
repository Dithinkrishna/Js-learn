function addElement() {
    const foodName = document.createElement(`input`);
    foodName.style.cssText = "margin-top:15px"
    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add("delete-button");
    foodName.value = "";
    deleteButton.textContent = " - ";
    const outerWrapper = document.createElement(`div`);
    const name = document.getElementById("menu-card");
    outerWrapper.appendChild(foodName);
    outerWrapper.appendChild(deleteButton);
    name.appendChild(outerWrapper)
    deleteButton.addEventListener("click", deleteNewAddedElement, false);
}
function deleteNewAddedElement() {
    this.parentNode.remove()
}
function toggleReadOnly() {
    const currentInputReadOnly = document.getElementById("input-tea").readOnly;
    document.getElementById('input-tea').readOnly = !currentInputReadOnly;
}
