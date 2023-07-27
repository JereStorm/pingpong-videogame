class Player {

    constructor(name) {
        this.player = document.querySelector(`#${name}`);
        this.keyPress = false;
        this.keyCode = null;
        this.velocidad = 1;
    }

    showPlayer() {
        console.log(this.player)
    }

    getStatus() {
        return this.player.getBoundingClientRect();
    }

}