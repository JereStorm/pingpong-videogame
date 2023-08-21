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

    let player1Node = null;
    let player2Node = null;

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

        player1Node = document.querySelector("#jugador1");
        player2Node = document.querySelector("#jugador2");
    }

    function stop() {
        clearInterval(controlGame);
        document.body.style.background = "#f00";
    }

    function play() {
        moveBall();
        moveBar();
        checkIfLost();
    }

    function checkIfLost() {
        if (ball.offsetLeft >= width) {
            stop();
            console.log("punto player 1");
        }
        if (ball.offsetLeft <= 0) {
            stop();
            console.log("punto player 2");
        }
    }
    function moveBall() {
        //Checkeamos el estado de la bola antes de seguir moviendola
        checkStateBall();
        switch (ball.state) {
            case 1: // derecha, abajo
                ball.style.left = (ball.offsetLeft + movementBall) + "px";
                ball.style.top = (ball.offsetTop + movementBall) + "px";
                break;
            case 2: // derecha, arriba
                ball.style.left = (ball.offsetLeft + movementBall) + "px";
                ball.style.top = (ball.offsetTop - movementBall) + "px";
                break;
            case 3: // izquierda, abajo
                ball.style.left = (ball.offsetLeft - movementBall) + "px";
                ball.style.top = (ball.offsetTop + movementBall) + "px";
                break;
            case 4: // izquierda, arriba
                ball.style.left = (ball.offsetLeft - movementBall) + "px";
                ball.style.top = (ball.offsetTop - movementBall) + "px";
                break;
        }
    }

    function checkStateBall() {

        if (collidePlayer2()) {
            ball.direction = 2;
            if (ball.state == 1) ball.state = 3;
            if (ball.state == 2) ball.state = 4;
        } else if (collidePlayer1()) {
            ball.direction = 1;
            if (ball.state == 3) ball.state = 1;
            if (ball.state == 4) ball.state = 2;
        }



        if (ball.direction === 1) {
            if (ball.offsetTop >= height) ball.state = 2;
            else if (ball.offsetTop <= 0) ball.state = 1;
        } else {
            if (ball.offsetTop >= height) ball.state = 4;
            else if (ball.offsetTop <= 0) ball.state = 3;
        }
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

    function collidePlayer1() {

        if (ball.offsetLeft <= (player1Node.clientWidth + 30) &&
            ball.offsetTop >= player1Node.offsetTop &&
            ball.offsetTop <= (player1Node.offsetTop + player1Node.clientHeight)) {
            console.log("Colision player 1")
            return true;

        }

        return false;
    }
    function collidePlayer2() {

        if (ball.offsetLeft >= (width - player2Node.clientWidth - 30) &&
            ball.offsetTop >= player2Node.offsetTop &&
            ball.offsetTop <= (player2Node.offsetTop + player2Node.clientHeight)) {
            console.log("Colision player 2")
            return true;
        }
        return false;

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
