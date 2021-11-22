//document.getElementById("count-el").innerText = 5;

let count = 0
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log("Count = " + count);
}

function save() {
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}