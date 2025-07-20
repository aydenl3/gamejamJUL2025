class CharSelect extends Phaser.Scene {
    constructor() {
        super("CharSelect");
        this.my = {sprite: {}};
    }

    preload() {
       this.load.setPath("./assets/");
       this.load.image("potato_button","chess_rook.png");
       this.load.image("bishop_button","chess_bishop.png");
    }

    create() {
    //Bishop Button
        this.my.sprite.bishop_button = this.add.sprite(400,300,"bishop_button");
        this.creditsText = this.add.text(1250, 500, 'Credits', {font: 'bold 20px Times', color: "tan"});

        //this.my.sprite.bishop_button.setGravityY(-300);
        //this.my.sprite.bishop_button.setImmovable(true);
    //Potato Button
        this.my.sprite.potato_button = this.add.sprite(500,300,"potato_button");
        this.creditsText = this.add.text(1250, 500, 'Credits', {font: 'bold 20px Times', color: "tan"});
        //this.my.sprite.potato_button.setGravityY(-300);
        //this.my.sprite.potato_button.setImmovable(true);
    }
    update() {
       this.checkInput(); 
    }
    
    checkInput() {
    
    }
}