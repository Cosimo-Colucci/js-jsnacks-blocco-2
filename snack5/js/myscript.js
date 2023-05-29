const listItems = [];
console.log(listItems);

let itemName = document.getElementById("item");

function addItem() {
    listItems.push (itemName);
    itemName = ""
};

document.querySelector("button.insert-item").addEventListener("click"){
    addItem
};

