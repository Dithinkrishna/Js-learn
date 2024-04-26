function addElement() {
    const foodName = document.createElement(`input`);
    foodName.classList.add("food-name");
    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add("delete-button");
    foodName.value = "";
    deleteButton.textContent = " - ";
    const outerWrapper = document.createElement(`div`);
    const name = document.getElementById("menu-card");
    outerWrapper.appendChild(foodName);
    outerWrapper.appendChild(deleteButton);
    name.appendChild(outerWrapper);
    deleteButton.addEventListener("click", deleteNewAddedElement, false);
    changeColor.addEventListener("click", toggleReadOnly)
}
function deleteNewAddedElement() {
    this.parentNode.remove()
}
function toggleReadOnly() {
    const currentInputReadOnly = document.getElementById("input-tea").readOnly;
    document.getElementById('input-tea').readOnly = !currentInputReadOnly;
    const changeColor = document.getElementById(`input-tea`);
    changeColor.style.backgroundColor = "lightblue";
}

function changeText() {
    const newSentence = document.getElementById('sentence');
    newSentence.innerHTML = 'Enter your items below';
}
function changeLink() {
    const newLink = document.getElementById("link");
    newLink.href = "https://google.com";
}
