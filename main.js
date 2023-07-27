"use strict";

const game = () => {
    let time = 30;
    let movementBall = 20;
    let movementBar = 40;
    let width = document.documentElement.clientWidth - movementBall;
    let height = document.documentElement.clientHeight - movementBall;

    let controlGame;
    let player1 = null;
    let player2 = null;
    let ball = document.querySelector("#ball");

    function start() {
        init();
        controlGame = setInterval(play, time);
    }

    function init() {
        ball.style.left = 0;
        ball.state = 1;
        ball.direction = 1; // 1 right , 2 left
        player1 = new Player("jugador1");
        player2 = new Player("jugador2");
    }

    function stop() {
        clearInterval(controlGame);
        document.body.style.background = "#f00";
    }

    function play() {
        moveBar();
    }

    function moveBar() {
        if (player1.keyPress) {
            if (player1.keyCode == "q" && player1.player.offsetTop >= 0)
                player1.moveUp(movementBar);
            if (player1.keyCode == "a" && (player1.player.offsetTop + player1.player.clientHeight) <= height)
                player1.moveDown(movementBar);
        }
        if (player2.keyPress) {
            if (player2.keyCode == "ArrowUp" && player2.player.offsetTop >= 0)
                player2.moveUp(movementBar);
            if (player2.keyCode == "ArrowDown" && (player2.player.offsetTop + player2.player.clientHeight) <= height)
                player2.moveDown(movementBar);
        }

    }

    document.onkeydown = function (e) {
        console.log(e.key)
        switch (e.key) {
            case "q":
            case "a":
                player1.keyCode = e.key;
                player1.keyPress = true;
                break;
            case "ArrowUp":
            case "ArrowDown":
                player2.keyCode = e.key;
                player2.keyPress = true;
                break;
        }
    };

    document.onkeyup = function (e) {
        if (e.key == "q" || e.key == "a")
            player1.keyPress = false;
        if (e.key == "ArrowUp" || e.key == "ArrowDown")
            player2.keyPress = false;
    }

    
    start();
};

game();
