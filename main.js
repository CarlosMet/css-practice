const topLine = document.getElementById("top-line")
const middleLine = document.getElementById("middle-line")
const bottomLine = document.getElementById("bottom-line")

function showMenu (){
    topLine.classList.toggle("td")
    middleLine.classList.toggle("md")
    bottomLine.classList.toggle("bd")
}