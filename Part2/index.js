const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(id)
console.log(color)

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

document.getElementById('idInput', "colorInput").reset();