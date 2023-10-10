const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar");

let mouseDown = false;

function createGrid(gridSize) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "altEleman";
        container.appendChild(newDiv);
    }

    const altElemanlar = document.querySelectorAll(".altEleman");

    altElemanlar.forEach(function (renkVer) {
        renkVer.addEventListener("mousedown", function () {
            mouseDown = true;
            renkVer.style.backgroundColor = "black";
        });

        renkVer.addEventListener("mouseover", function () {
            if (mouseDown) {
                renkVer.style.backgroundColor = "black";
            }
        });

        renkVer.addEventListener("mouseup", function () {
            mouseDown = false;
        });
    });

    // SAYFA DIŞINA ÇIKIP EKRANA GERİ GELİNCE BOYAMAYI DURDURMASI İÇİN BU GEREKLİ
    document.addEventListener("mouseup", function () {
        mouseDown = false;
    });

}

sizeValue.addEventListener("input", function () {
    const gridSize = this.value;
    sliderBar.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

createGrid(16);
sliderBar.textContent = "16 x 16";
