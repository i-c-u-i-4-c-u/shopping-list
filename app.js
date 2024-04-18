let input = document.querySelector("input");
const addItem = document.querySelector("button");
let listItem = document.querySelector("#list");
addItem.addEventListener("click", () => {
    const item = input.value;
    if (!item) {
        alert("input a value")
    } else {
    input.value = "";
    input.focus();
    const list = document.createElement("li");
    const listWrapper = document.createElement("div");
    const para = document.createElement("p");
    const del = document.createElement("button");

    listWrapper.appendChild(para);
    listWrapper.appendChild(del);
    list.appendChild(listWrapper);
    listItem.appendChild(list);

    para.textContent = item;
    del.textContent = "Delete";

    del.addEventListener("click", () => {
        listItem.removeChild(list)
    })};

});

