class Potato extends Phaser.Scene {
    constructor() {
        super("Potato");
        this.my = {sprite: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("Potato","chess_knight.png");
    }

    create() {
        this.physics.world.setBounds(0, 0, 1000, 600, this.gameScreenWidth, this.gameScreenHeight);

    }

    update() {
        this.checkInput(); 
    }

    checkInput(){
}
}