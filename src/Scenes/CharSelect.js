class CharSelect extends Phaser.Scene {
    constructor() {
        super("CharSelect");
        this.my = { sprite: {} };
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("rook_button", "chess_rook.png");
        this.load.image("bishop_button", "chess_bishop.png");
    }

    create() {
        // Tomato Button
        this.my.sprite.tomato_button = this.add.sprite(300, 300, "bishop_button").setInteractive();
        this.add.text(266, 350, 'Tomato', { font: 'bold 20px Times', color: "red" });

        // Potato Button
        this.my.sprite.potato_button = this.add.sprite(700, 300, "rook_button").setInteractive();
        this.add.text(672, 350, 'Potato', { font: 'bold 20px Times', color: "tan" });

        this.my.sprite.potato_button.on('pointerdown', () => {
            console.log("START POTATO GAME");
            this.scene.start("Potato");
        });

        this.my.sprite.tomato_button.on('pointerdown', () => {
            console.log("START TOMATO GAME");
            this.scene.start("Tomato");
        });
    }

    update() {
    }
}
