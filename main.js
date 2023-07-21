"use strict";


let player1 = document.querySelector("#jugador1");
console.log(player1)

let player2 = document.getElementById("jugador2");
console.log(player2);

let btnMover1 = document.querySelector("#moverJugador1");

btnMover1.addEventListener("click", moverPlayer1);

function moverPlayer1() {
    let data = player1.getBoundingClientRect();
    player1.style.top = data.top + 15;
}