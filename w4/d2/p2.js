
// const list = document.getElementById("list");
// let counter = 1;

// document.getElementById("addBtn").addEventListener("click", function () {
//     const li = document.createElement("li");
//     li.textContent = "Item " + counter++;
//     list.appendChild(li);
// });

// document.getElementById("rmBtn").addEventListener("click", function () {
//     if (list.lastElementChild) {
//         list.removeChild(list.lastElementChild);
//     } else {
//         list.innerHTML = "No item to delete";
//     }
// });



const list = document.getElementById("list");
const msg = document.getElementById("msg");
let counter = 1;

document.getElementById("addBtn").addEventListener("click", function () {

    const li = document.createElement("li");
    li.textContent = "Item " + counter++;
    list.appendChild(li);

    msg.textContent = ""; // remove message when adding
});

document.getElementById("rmBtn").addEventListener("click", function () {

    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    if (!list.lastElementChild) {
        msg.textContent = "No item to delete";
    }
});