var mySprite;
var mySpriteFaceDirection = 0;      //0 = up, 1 = right, 2 = down, 3 = left
var backGround;

var mySpriteSpeed =10 ;

var keyW, keyA, keyS, keyD, keySpace;

var bulletArr = new Array();
var enemyArr = new Array();

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
        game.load.image("backgroundIMG", "Assets/shrekObamaMemeDontOpen.jpg");
        game.load.image("sexyIMG", "Assets/sexyIMG.jpg");
        game.load.image("enemyIMG", "Assets/enemy.jpg");
        game.load.image("bulletIMG", "Assets/bullet.jpg");
        
        
    }, 
    
    create: function() {
        console.log("its working!");
        
        //enables Phaser's physics stuff so we can do collisions
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        backGround = game.add.sprite(0, 0, "backgroundIMG");
        backGround.height = game.height;
        backGround.width = game.width;
        
        mySprite = game.add.sprite(game.width/2, game.height/2, "sexyIMG");
        game.physics.arcade.enable(mySprite);
        
        mySprite.scale.x = .5;
        mySprite.scale.y = .5;
        
        mySprite.x = game.width/2 - mySprite.width/2;
        mySprite.y = game.height/2 - mySprite.height/2;
        
        //create enemies
        for (var i = 0; i < 5; i++) {
            //generate random coodinates for enemies
            //since these variables are declared in this for loop, I wont have access to them anywhere else.
            //These are called LOCAL variables
            //Local variables dont stay after this loop is over
            var randX = Math.random() * game.width;
            var randY = Math.random() * game.height;
            
            //create sprite
            enemyArr[i] = game.add.sprite(randX, randY, "enemyIMG");
            //create a local varible for the sprite
            var enemySprite = enemyArr[i];
            
            //enable physics for our enemies
            game.physics.arcade.enable(enemySprite);

            
            enemySprite.width = 50;
            enemySprite.height = 50;
            
            //make sure sprite stays in screen
            if (enemySprite.x < 0) {
                enemySprite.x += 100;
            }
            if (enemySprite.y < 0) {
                enemySprite.y += 100;
            }
            if (enemySprite.x + enemySprite.width > game.width) {
                enemySprite.x -= 100;
            }
            if (enemySprite.y + enemySprite.height > game.height) {
                enemySprite.y -= 100;
            }
            
            
            
            
        }
        
        
    }, 
    
    update: function () {
        if (keyW.isDown) {
            mySprite.y -= mySpriteSpeed;
            mySpriteFaceDirection = 0;
        } else if (keyA.isDown) {
            mySprite.x -= mySpriteSpeed;
            mySpriteFaceDirection = 3;
        } else if (keyS.isDown) {
            mySprite.y += mySpriteSpeed;
            mySpriteFaceDirection = 2;
        } else if (keyD.isDown) {
            mySprite.x += mySpriteSpeed;
            mySpriteFaceDirection = 1;

        }
        
        if (keySpace.isDown) {
            //create bullets
            var bulletSprite = game.add.sprite(mySprite.x, mySprite.y, "bulletIMG");
            game.physics.arcade.enable(bulletSprite);
            bulletSprite.width = 50;
            bulletSprite.height = 20;
            //put bullet into array
            bulletArr[bulletArr.length] = bulletSprite;
            
            
            var bulletSpeed = 500;
            //shoot depend on direction mySprite is facing
            if (mySpriteFaceDirection === 0) {
                bulletSprite.body.velocity.y -= bulletSpeed;
            } else if (mySpriteFaceDirection === 1) {
                bulletSprite.body.velocity.x += bulletSpeed;
            } else if (mySpriteFaceDirection === 2) {
                bulletSprite.body.velocity.y += bulletSpeed;
            } else if (mySpriteFaceDirection === 3) {
                bulletSprite.body.velocity.x -= bulletSpeed;
            }
            
        }
        
        
        
        
    }
    
};