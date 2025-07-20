class CharSelect extends Phaser.Scene {
    constructor() {
        super("CharSelect");
        this.my = {sprite: {}};
    }

    preload() {
       this.load.setPath("./assets/");
       this.load.image(" "," ");
    }

    create() {
        this.my.sprite.blue = this.physics.add.sprite(400,300," ");
        this.my.sprite.blue.setGravityY(-300);
        this.my.sprite.blue.setImmovable(true);
    }
    update() {
       this.checkInput(); 
    }
    
    checkInput() {
    
    }
}