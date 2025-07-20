class CharSelect extends Phaser.Scene {
    constructor() {
        super("CharSelect");
        this.my = {sprite: {}};
    }

    preload() {
       this.load.setPath("./assets/");
       this.load.image("rook_button","chess_rook.png");
       this.load.image("bishop_button","chess_bishop.png");
    }

    create() {
    //Bishop Button
        this.my.sprite.bishop_button = this.add.sprite(400,300,"bishop_button");
        this.creditsText = this.add.text(1250, 500, 'Credits', {font: 'bold 20px Times', color: "tan"});
        this.my.sprite.bishop_button.setGravityY(-300);
        this.my.sprite.bishop_button.setImmovable(true);
    //Rook Button
        this.my.sprite.rook_button = this.add.sprite(300,400,"rook_button");
        this.creditsText = this.add.text(1250, 500, 'Credits', {font: 'bold 20px Times', color: "tan"});
        this.my.sprite.blue.setGravityY(-300);
        this.my.sprite.blue.setImmovable(true);
    }
    update() {
       this.checkInput(); 
    }
    
    checkInput() {
    
    }
}