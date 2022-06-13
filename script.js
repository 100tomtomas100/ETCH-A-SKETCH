let container = document.getElementById("container");

for (i = 0; i < 16*16; i++) {       
let square = container.appendChild(document.createElement("div"));
square.className = "square";
square.style.border = "thin solid black"
}

container.style.gridTemplateColumns = "repeat(16, auto)";

let randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(typeof(container))
container.addEventlistener("mouseover", () => {
    backgroundColor = "blue"
})