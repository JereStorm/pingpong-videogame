"use strict";

const game = () => {
    let time = 30;
    let movementBall = 20;
    let movementBar = 20;
    let width = document.documentElement.clientWidth - movementBall;
    let height = document.documentElement.clientHeight - movementBall;

    let controlGame;
    let player1 = new Player("jugador1");
    let player2 = new Player("jugador2");

    player1.showPlayer();
    player2.showPlayer();

    function start() {

    }


}


