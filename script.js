const container = document.querySelector(".container");
const sizeValue = document.querySelector(".sizeValue");
const sliderBar = document.querySelector(".sliderBar")

let setValue = 4;

let mathSqrt = Math.sqrt(setValue);

container.style.gridTemplateColumns = `repeat(${mathSqrt}, 1fr)`;
container.style.gridTemplateRows = `repeat(${mathSqrt}, 1fr)`;


sizeValue.addEventListener("input", function() {
    sliderBar.textContent = `${this.value} x ${this.value}`
    setValue = this.value;
    console.log(setValue);
})


for (let i = 0; i < setValue; i++) {
    console.log("-----" + setValue)
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


