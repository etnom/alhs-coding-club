var mySprite;
var backGround;

var mySpriteSpeed =10 ;

var keyW, keyA, keyS, keyD;

var bulletArr = new Array();
var enemyArr = new Array();

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
        game.load.image("backgroundIMG", "Assets/shrekObamaMemeDontOpen.jpg");
        game.load.image("sexyIMG", "Assets/sexyIMG.jpg");
        game.load.image("enemyIMG", "Assets/enemy.jpg");
        
        
    }, 
    
    create: function() {
        console.log("its working!");
        
        keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);

        backGround = game.add.sprite(0, 0, "backgroundIMG");
        backGround.height = game.height;
        backGround.width = game.width;
        
        mySprite = game.add.sprite(game.width/2, game.height/2, "sexyIMG");
        
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
        } else if (keyA.isDown) {
            mySprite.x -= mySpriteSpeed;
        } else if (keyS.isDown) {
            mySprite.y += mySpriteSpeed;
        } else if (keyD.isDown) {
            mySprite.x += mySpriteSpeed;
        }
        
        
        
        
    }
    
};