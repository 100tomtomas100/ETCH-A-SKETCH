let container = document.querySelector("#container");
container.style.gridTemplateColumns = "repeat(16, auto)";

for (i = 0; i < 16*16; i++) {       
let square = container.appendChild(document.createElement("div"));
let randomColor = Math.floor(Math.random()*16777215).toString(16);
square.className = "square";
square.style.border = "thin solid black"
square.addEventListener("mouseover", () => {
    square.style.backgroundColor = `#${randomColor}`;
})
}







