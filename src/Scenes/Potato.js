class Potato extends Phaser.Scene {
    constructor() {
        super("Potato");
        this.my = {sprite: {}};
    }


    preload() {
        this.load.setPath("./assets/");
        this.load.image("potato","PotatoFrontSize.png");
        this.load.image("attack","AttackFrame1Size.png");
        this.load.image("attack2","AttackFrame2Size.png");
        this.load.image("attack3","AttackFrame3Size.png");
        this.load.image("attack4","AttackFrame4Size.png");
        this.load.image("attack5","AttackFrame5Size.png");
        this.load.image("rightwalk1","PotatoWalkSize.png");
        this.load.image("rightwalk2","PotatoWalk2Size.png");
        this.load.image("rightmidwalk1","PotatoMidWalkSize.png");
        this.load.image("idle","Potato Front Idle.png");
        this.load.image("leftwalk1","PotatoLeftWalkSize.png");
        this.load.image("leftwalk2","PotatoLeftWalk2Size.png");
        this.load.image("leftmidwalk1","LeftMidWalkSize.png");
    }

    create() {
        this.my.sprite.potato = this.physics.add.sprite(100,550,"potato");
        this.my.sprite.potato.setCollideWorldBounds(true);
        this.physics.world.setBounds(0, 0, 1000, 600, this.gameScreenWidth, this.gameScreenHeight);
        this.left = this.input.keyboard.addKey("A");
        this.right = this.input.keyboard.addKey("D");
        this.up = this.input.keyboard.addKey("W");
        this.down = this.input.keyboard.addKey("S");
        this.launch = this.input.keyboard.addKey("L");
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.shift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        this.anims.create({
            key: "walkRight",
            frames: [
                { key: "rightmidwalk1" },
                { key: "rightwalk2" },
                { key: "rightwalk1" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
        this.anims.create({
            key: "walkLeft",
            frames: [
                { key: "leftmidwalk1" },
                { key: "leftwalk2" },
                { key: "leftwalk1" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
               this.anims.create({
            key: "walkUp",
            frames: [
                { key: "potato" },
                { key: "idle" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
        this.anims.create({
            key: "walkDown",
            frames: [
                { key: "potato" },
                { key: "idle" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
        this.anims.create({
            key: "idle",
            frames: [
                { key: "potato" },
                { key: "idle" },
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
    }

    update() {
        this.checkInput(); 
    }
    
    checkInput(){

        //RIGHT
        if(!this.left.isDown && this.right.isDown && !this.up.isDown && !this.down.isDown){
            this.my.sprite.potato.setVelocityX(200);
            this.my.sprite.potato.setVelocityY(0);
            this.my.sprite.potato.play('walkRight',true);
        }
        //LEFT
        else if(this.left.isDown && !this.right.isDown && !this.up.isDown && !this.down.isDown){
            this.my.sprite.potato.setVelocityX(-200);
            this.my.sprite.potato.setVelocityY(0);
            this.my.sprite.potato.play('walkLeft',true);
        }
        //UP
        else if(!this.left.isDown && !this.right.isDown && this.up.isDown && !this.down.isDown){
            this.my.sprite.potato.setVelocityY(-200);
            this.my.sprite.potato.setVelocityX(0);
            this.my.sprite.potato.play('walkUp',true);
        }
        //DOWN
        else if(!this.left.isDown && !this.right.isDown && !this.up.isDown && this.down.isDown){
            this.my.sprite.potato.setVelocityY(200);
            this.my.sprite.potato.setVelocityX(0);
            this.my.sprite.potato.play('walkDown',true);
        }
        //LEFT UP
        else if(this.left.isDown && !this.right.isDown && this.up.isDown && !this.down.isDown){
            this.my.sprite.potato.setVelocityX(-180);
            this.my.sprite.potato.setVelocityY(-180);
            this.my.sprite.potato.play('walkLeft',true);
        }
        //RIGHT UP
        else if(!this.left.isDown && this.right.isDown && this.up.isDown && !this.down.isDown){
            this.my.sprite.potato.setVelocityX(180);
            this.my.sprite.potato.setVelocityY(-180);
            this.my.sprite.potato.play('walkRight',true);
        }
        //LEFT DOWN
        else if(this.left.isDown && !this.right.isDown && !this.up.isDown && this.down.isDown){
            this.my.sprite.potato.setVelocityX(-180);
            this.my.sprite.potato.setVelocityY(180);
            this.my.sprite.potato.play('walkLeft',true);
        }
        //RIGHT DOWN
        else if(!this.left.isDown && this.right.isDown && !this.up.isDown && this.down.isDown){
            this.my.sprite.potato.setVelocityX(180);
            this.my.sprite.potato.setVelocityY(180);
            this.my.sprite.potato.play('walkRight',true);
        }
        else{
            this.my.sprite.potato.setVelocityX(0);
            this.my.sprite.potato.setVelocityY(0);
            this.my.sprite.potato.play('idle',true);
        }
        //LAUNCH
    }
}