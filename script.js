const magicBtn = document.getElementById("magicBtn");
let points = 0;
function randomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0;i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

magicBtn.addEventListener("click", function(){
    points++;
    magicBtn.style.backgroundColor = randomColor();
    magicBtn.textContent = `pontos: ${points}`;
})