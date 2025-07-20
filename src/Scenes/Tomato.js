class Tomato extends Phaser.Scene {
    constructor() {
        super("Tomato");
        this.my = {sprite: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("bishop","chess_bishop.png");
    }

    create() {
        this.physics.world.setBounds(0, 0, 1000, 1000, this.gameScreenWidth, this.gameScreenHeight);
    //Backdrop
 //       this.my.sprite.blue = this.physics.add.sprite(400,320,"");
   //     this.my.sprite.blue.setGravityY(-300);
     //   this.my.sprite.blue.setImmovable(true);
    //Platforms
      //  this.my.sprite.platform = this.physics.add.sprite(700,518,"platform");
       // this.my.sprite.platform2 = this.physics.add.sprite(700,518,"platwoform");
    //Dog
       this.my.sprite.bishop = this.physics.add.sprite(55,650,"bishop");
        this.my.sprite.bishop.setCollideWorldBounds(true);
        this.p1up = this.input.keyboard.addKey("W");
        this.p1down = this.input.keyboard.addKey("S");
        this.p1left = this.input.keyboard.addKey("A");
        this.p1right = this.input.keyboard.addKey("D");
        this.p1phase = this.input.keyboard.addKey("V");
        this.p1reset = this.input.keyboard.addKey("R");
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
    }

    update() {
        this.checkInput(); 
    }

    checkInput(){
        if(this.p1down.isDown){
            this.my.sprite.dog.body.y +=3
            this.my.sprite.dog.setSize(32, 60);
        }
        else if(this.p1phase.isDown && this.my.sprite.dog.body.onFloor()){
            this.my.sprite.dog.body.y +=20

        }
        else if(this.p1up.isDown && this.my.sprite.dog.body.onFloor()){
            if (this.jumpBoost) {
            this.my.sprite.dog.setVelocityY(-700);
        }   else {
            this.my.sprite.dog.setVelocityY(-500);
        }
    }
        else if(this.p1ups.isDown && this.my.sprite.dog.body.onFloor()){
            if (this.jumpBoost) {
            this.my.sprite.dog.setVelocityY(-700);
        }   else {
            this.my.sprite.dog.setVelocityY(-500);
        }
    } 
        else {
            this.my.sprite.dog.setGravityY(800);
            this.my.sprite.dog.setSize(32, 64);
        }
        
        if(this.p1down.isDown && this.p1left.isDown){
            this.my.sprite.dog.setVelocityX(-150);
        }
        else if(this.p1down.isDown && this.p1right.isDown){
            this.my.sprite.dog.setVelocityX(160);
        }
        else if(this.p1right.isDown){
            this.my.sprite.dog.setVelocityX(240);
        }
        else if(this.p1left.isDown){ 
            this.my.sprite.dog.setVelocityX(-240);
        } else {
            this.my.sprite.dog.setVelocityX(0);
        }

        this.jumpBoost = false;
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