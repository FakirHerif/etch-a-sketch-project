const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar");
const hover = document.querySelector(".hover");
const eraser = document.querySelector(".eraser");
const deleteAll = document.querySelector(".delete");
const grid = document.querySelector(".grid");

let mouseDown = false;
let altElemanlar;
let hoverActive = false;
let isGridActive = true; 

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
            hover.innerHTML = "Hover: OFF";
            hoverActive = false;

        altElemanlar.forEach(function (renkVer) {
            renkVer.removeEventListener("mouseover", hoverColor);
        });
        });

        renkVer.addEventListener("mouseover", function () {
            if (mouseDown) {
                renkVer.style.backgroundColor = "black";
                hoverActive = false;
            }
        });

        renkVer.addEventListener("mouseup", function () {
            mouseDown = false;
            hoverActive = false;
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

deleteAll.addEventListener("click", function() {
    altElemanlar.forEach(function (renkVer) {
        renkVer.style.backgroundColor = "";
        hover.innerHTML = "Hover: OFF";
        hoverActive = false;

        altElemanlar.forEach(function (renkVer) {
            renkVer.removeEventListener("mouseover", hoverColor);
        });
    });
});



grid.addEventListener("click", function() {
    if (isGridActive) {
        // Eğer grid aktifse, grid'i kapat
        altElemanlar.forEach(function (renkVer) {
            renkVer.style.border = "none";
        });
        isGridActive = false;
        hover.innerHTML = "Hover: OFF";
        hoverActive = false;

        altElemanlar.forEach(function (renkVer) {
            renkVer.removeEventListener("mouseover", hoverColor);
        });
        grid.innerHTML = "Grid: OFF";
    } else {
        // Eğer grid kapalıysa, grid'i aç
        altElemanlar.forEach(function (renkVer) {
            renkVer.style.border = "0.5px solid rgba(0, 0, 0, 0.132)";
        });
        isGridActive = true;
        grid.innerHTML = "Grid: ON";
    }
});



createGrid(16);
sliderBar.textContent = "16 x 16";
