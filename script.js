const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar");
const hover = document.querySelector(".hover")

let mouseDown = false;
let altElemanlar;
let hoverActive = false;

function createGrid(gridSize) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "altEleman";
        container.appendChild(newDiv);
    }

    altElemanlar = document.querySelectorAll(".altEleman");

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

function hoverColor() {
    this.style.backgroundColor = "red";
}

hover.addEventListener("click", function() {
    if (hoverActive) {
        hover.innerHTML = "Hover: OFF";
        hoverActive = false;

        altElemanlar.forEach(function (renkVer) {
            renkVer.removeEventListener("mouseover", hoverColor);
        });
    } else {
        hover.innerHTML = "Hover: ON";
        hoverActive = true;
        altElemanlar.forEach(function (renkVer) {
            renkVer.addEventListener("mouseover", hoverColor);
        });
    }
});



createGrid(16);
sliderBar.textContent = "16 x 16";
