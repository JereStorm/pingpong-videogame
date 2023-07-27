class Player {

    constructor(name) {
        this.player = document.querySelector(`#${name}`);
        this.keyPress = false;
        this.keyCode = null;
    }

    showPlayer() {
        console.log(this.player)
    }

    getStatus() {
        return this.player.getBoundingClientRect();
    }

    moveUp(range){
        this.player.style.top = (this.player.offsetTop - range) + "px";
    }
    moveDown(range){
        this.player.style.top = (this.player.offsetTop + range/2) + "px";
    }

}