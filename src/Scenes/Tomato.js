class Tomato extends Phaser.Scene {
    constructor() {
        super("Tomato");
        this.my = {sprite: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("tomato","frontfacesize.png");
        this.load.image("leftwalk1","leftwalk1 size.png");
        this.load.image("leftwalk2","leftwalk2 size.png");
        this.load.image("rightwalk1","rightwalk1 size.png");
        this.load.image("rightwalk2","rightwalk2 size.png");
        this.load.image("idle1","idle1 size.png");
        this.load.image("rightwalk2","rightwalk2 size.png");
    }

    create() {
        this.physics.world.setBounds(0, 0, 1000, 600, this.gameScreenWidth, this.gameScreenHeight);
    //Backdrop
 //       this.my.sprite.blue = this.physics.add.sprite(400,320,"");
   //     this.my.sprite.blue.setGravityY(-300);
     //   this.my.sprite.blue.setImmovable(true);
    //Platforms
      //  this.my.sprite.platform = this.physics.add.sprite(700,518,"platform");
       // this.my.sprite.platform2 = this.physics.add.sprite(700,518,"platwoform");
    //Tomato Character
        this.my.sprite.tomato = this.physics.add.sprite(100,550,"tomato");
        //this.my.sprite.tomato.setScale(0.2);
        this.my.sprite.tomato.setCollideWorldBounds(true);
        this.p1up = this.input.keyboard.addKey("W");
        this.p1down = this.input.keyboard.addKey("S");
        this.p1left = this.input.keyboard.addKey("A");
        this.p1right = this.input.keyboard.addKey("D");
    //Collision Groups
  /*      this.objectGroup = this.physics.add.group();
        this.objectGroup.add(this.my.sprite.platform);
        this.my.sprite.platform.setGravityY(-300);
        this.my.sprite.platform.setImmovable(true);
        this.my.sprite.platform2.setGravityY(-300);
        this.my.sprite.platform2.setImmovable(true);
    //Collisions
        this.physics.add.collider(this.my.sprite.dog, this.objectGroup);
        this.physics.add.collider(this.my.sprite.key, this.objectGroup);
        this.physics.add.collider(this.my.sprite.key, this.my.sprite.dog);
        this.physics.add.collider(this.my.sprite.key, this.my.sprite.dog);
        this.physics.add.collider(this.my.sprite.dog, this.my.sprite.platform2, () => {
        this.jumpBoost = true;
        });
        this.physics.add.collider(this.my.sprite.key, this.my.sprite.chest, this.unlock, null, this) */


        this.anims.create({
            key: "walkLeft",
            frames: [
                { key: "leftwalk1" },
                { key: "leftwalk2" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
        this.anims.create({
            key: "walkRight",
            frames: [
                { key: "rightwalk1" },
                { key: "rightwalk2" }
            ],
            frameRate: 6,
            repeat: -1,
            hideOnComplete: false
        });
        this.anims.create({
            key: "idle",
            frames: [
                { key: "idle1" },
                { key: "idle2" }
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
        if(this.p1left.isDown && this.p1right.isDown){
            this.my.sprite.tomato.setVelocityX(0);
        }
        else if(this.p1left.isDown){ 
            this.my.sprite.tomato.setVelocityX(-200);
            this.my.sprite.tomato.play('walkLeft',true);
        }
        else if(this.p1right.isDown){
            this.my.sprite.tomato.setVelocityX(200);
            this.my.sprite.tomato.play('walkRight',true);
        }
        else{
            this.my.sprite.tomato.setVelocityX(0);
            this.my.sprite.tomato.play('idle',true);
        }
        
        if (this.p1up.isDown && this.p1down.isDown){
            this.my.sprite.tomato.setVelocityY(0);
        }
        else if(this.p1up.isDown){
            this.my.sprite.tomato.setVelocityY(-200);
        }
        else if(this.p1down.isDown){ 
            this.my.sprite.tomato.setVelocityY(200);
        }
        else {
            this.my.sprite.tomato.setVelocityY(0);
            this.my.sprite.tomato.play('idle',true);
    }
}
  /*  brakey(key){
        key.setTexture("brokey");
        this.my.sprite.key.body.y += 5
        this.tweens.add({
            targets: key,
            alpha: 1,
            duration: 500,
            onComplete: () => {
                key.destroy();
            }
        });
    }
    unlock(key, chest){
        key.destroy();
        chest.destroy(); 
    } */
}