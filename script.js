const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar");
const hover = document.querySelector(".hover");
const eraserButton = document.querySelector(".eraser");
const deleteAll = document.querySelector(".delete");
const grid = document.querySelector(".grid");
const colorPicker = document.getElementById("colorPicker");
const rainbowButton = document.querySelector(".rainbow")

let mouseDown = false;
let altElemanlar;
let hoverActive = false;
let isGridActive = true; 
let selectedColor = "black";
let rainbowActive = false;
let eraserActive = false;


eraserButton.addEventListener("click", function() {
    if (eraserActive) {
        eraserActive = false;
        eraserButton.innerHTML = "Eraser: OFF";
    } else {
        eraserActive = true;
        eraserButton.innerHTML = "Eraser: ON";
        rainbowActive = false;
        rainbowButton.innerHTML = "Rainbow: OFF";
    }
});

rainbowButton.addEventListener("click", function() {
    if (rainbowActive) {
        rainbowActive = false;
        rainbowButton.innerHTML = "Rainbow: OFF";
    } else {
        rainbowActive = true;
        rainbowButton.innerHTML = "Rainbow: ON";
        eraserActive = false;
        eraserButton.innerHTML ="Eraser: OFF";
    }
});


function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = '100%';
    const lightness = '50%';

    return `hsl(${hue}, ${saturation}, ${lightness})`;
}

function rainbowColor() {
    return getRandomColor();
}


colorPicker.addEventListener("input", function () {
    // Kullanıcının seçtiği rengi alıyoruz
    selectedColor = colorPicker.value;
    rainbowActive = false;
    rainbowButton.innerHTML = "Rainbow: OFF";
    eraserActive = false;
    eraserButton.innerHTML = "Eraser: OFF";

    // Bu renk ile karenin arka plan rengini değiştiriyoruz
    altElemanlar.forEach(function (renkVer) {
        renkVer.addEventListener("click", function () {
            renkVer.style.backgroundColor = selectedColor;
        });
    });
})


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
            if (rainbowActive) {
                renkVer.style.backgroundColor = rainbowColor();
            } else if (eraserActive) {
                renkVer.style.backgroundColor = "";
            } else {
                renkVer.style.backgroundColor = selectedColor;
            }
            hover.innerHTML = "Hover: OFF";
            hoverActive = false;

        altElemanlar.forEach(function (renkVer) {
            renkVer.removeEventListener("mouseover", hoverColor);
        });
        });

        renkVer.addEventListener("mouseover", function () {
            if (mouseDown) {
                if (rainbowActive) {
                    renkVer.style.backgroundColor = rainbowColor();
                } else if (eraserActive) {
                    renkVer.style.backgroundColor = "";
                } else {
                    renkVer.style.backgroundColor = selectedColor;
                }
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
        hover.innerHTML = "Hover: OFF";
        grid.innerHTML = "Grid: ON";
        rainbowButton.innerHTML = "Rainbow: OFF";
        eraserButton.innerHTML = "Eraser: OFF"
        mouseDown = false;
        hoverActive = false;
        isGridActive = true; 
        rainbowActive = false;
        eraserActive = false;
});

function hoverColor() {
    if (rainbowActive) {
        this.style.backgroundColor = rainbowColor();
    } else if (eraserActive) {
        this.style.backgroundColor = "";
    } else {
        this.style.backgroundColor = selectedColor;
    }
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
