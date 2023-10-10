const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar")

let setValue = 16;

container.style.gridTemplateColumns = `repeat(${setValue}, 1fr)`;
container.style.gridTemplateRows = `repeat(${setValue}, 1fr)`;

for (let i = 0; i < (setValue * setValue); i++) {
    var newDiv = document.createElement("div");
    newDiv.className = "altEleman"
    container.appendChild(newDiv);
};

const altElemanlar = document.querySelectorAll(".altEleman");

altElemanlar.forEach(function(renkVer) {
    renkVer.addEventListener("click", function() {
    renkVer.style.backgroundColor = "black";
  });
});

document.querySelector(".sliderBar").textContent = `${setValue} x ${setValue}`;

sizeValue.addEventListener("input", function() {
    container.innerHTML = '';
    const gridSize = this.value;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "altEleman"
        container.appendChild(newDiv);
    };

    const altElemanlar = document.querySelectorAll(".altEleman");

    altElemanlar.forEach(function(renkVer) {
        renkVer.addEventListener("click", function() {
            renkVer.style.backgroundColor = "black";
        });
    });

    document.querySelector(".sliderBar").textContent = `${gridSize} x ${gridSize}`;
});
