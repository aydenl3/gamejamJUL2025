class Potato extends Phaser.Scene {
    constructor() {
        super("Potato");
        this.my = {sprite: {}};
    }


    preload() {
        this.load.setPath("./assets/");
        this.load.image("potato","chess_knight.png");
    }


    create() {
        this.my.sprite.potato = this.physics.add.sprite(100,550,"potato");
        this.my.sprite.potato.setCollideWorldBounds(true);
        this.physics.world.setBounds(0, 0, 1000, 600, this.gameScreenWidth, this.gameScreenHeight);
        this.left = this.input.keyboard.addKey("A");
        this.right = this.input.keyboard.addKey("D");
        this.up = this.input.keyboard.addKey("W");
        this.down = this.input.keyboard.addKey("S");
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.shift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);


       
       


    }


    update() {
        this.checkInput();
    }


    checkInput(){
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            this.Leap();
        }


        if(this.right.isDown && this.left.isDown){
            this.my.sprite.potato.setVelocityX(0);
        }
        else if(this.up.isDown && this.down.isDown){
            this.my.sprite.potato.setVelocityY(0);
        }
        else if(this.right.isDown){
            this.my.sprite.potato.setVelocityX(200);
        }
        else if(this.left.isDown){
            this.my.sprite.potato.setVelocityX(-200);
        }
        else {
            this.my.sprite.potato.setVelocityX(0);
        }
        if(this.up.isDown){
            this.my.sprite.potato.setVelocityY(-200);
        }
        else if(this.down.isDown){
            this.my.sprite.potato.setVelocityY(200);
        }
        else {
            this.my.sprite.potato.setVelocityY(0);
        }  
    }


    Leap(){


    }
}

