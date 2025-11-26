let img = document.getElementById("pokemon-img");
let nome = document.getElementById("pokemon-name");
let tipo = document.getElementById("pokemon-type");
let ataques = document.getElementById("attacks-list");


document.getElementById("btn-pokemon-1").onclick = function() {
    img.src = "images/pikachu.png";
    nome.innerText = "Pikachu";
    tipo.innerText = "Tipo: Elétrico";

    ataques.innerHTML = "";
    ataques.innerHTML += "<li>Choque do Trovão</li>";
    ataques.innerHTML += "<li>Ataque Rápido</li>";
    ataques.innerHTML += "<li>Investida Elétrica</li>";

    let background = document.querySelector('.pokemon-image');
    background.style.backgroundColor = '#d4d66f';
};


document.getElementById("btn-pokemon-2").onclick = function() {
    img.src = "images/charmander.png";
    nome.innerText = "Charmander";
    tipo.innerText = "Tipo: Fogo";

    ataques.innerHTML = "";
    ataques.innerHTML += "<li>Lança-chamas</li>";
    ataques.innerHTML += "<li>Garra de Fogo</li>";
    ataques.innerHTML += "<li>Investida</li>";

    let background = document.querySelector('.pokemon-image');
    background.style.backgroundColor = '#d66f6f';
};


document.getElementById("btn-pokemon-3").onclick = function() {
    img.src = "images/squirtle.png";
    nome.innerText = "Squirtle";
    tipo.innerText = "Tipo: Água";

    ataques.innerHTML = "";
    ataques.innerHTML += "<li>Jato d'Água</li>";
    ataques.innerHTML += "<li>Bolhas</li>";
    ataques.innerHTML += "<li>Cauda de Água</li>";

    let background = document.querySelector('.pokemon-image');
    background.style.backgroundColor = '#6fa3d6';
};


img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.1)";
  img.style.transition = "transform 0.3s";
});

img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
});