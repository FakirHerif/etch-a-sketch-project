const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    var newDiv = document.createElement("div");
    newDiv.className = "altEleman"
    container.appendChild(newDiv);
};

const altElemanlar = document.querySelectorAll(".altEleman");

altElemanlar.forEach(function(renkVer) {
    renkVer.addEventListener("mouseover", function() {
    renkVer.style.backgroundColor = "black";
  });
});
