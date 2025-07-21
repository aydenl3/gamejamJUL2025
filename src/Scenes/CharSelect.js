class CharSelect extends Phaser.Scene {
    constructor() {
        super("CharSelect");
        this.my = { sprite: {} };
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("potato_button", "Potato Mid Walk2.png");
        this.load.image("tomato_button", "frontfacesize2.png");
    }

    create() {
        // Tomato Button
        this.my.sprite.tomato_button = this.add.sprite(300, 300, "tomato_button").setInteractive();
        this.add.text(270, 420, 'Tomato', { font: 'bold 20px Times', color: "red" });

        // Potato Button
        this.my.sprite.potato_button = this.add.sprite(700, 300, "potato_button").setInteractive();
        this.add.text(672, 420, 'Potato', { font: 'bold 20px Times', color: "tan" });


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