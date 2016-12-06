var mySprite;
var backGround;

var mySpriteSpeed =10 ;

var keyW, keyA, keyS, keyD;

var enemyArr = [];

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
        game.load.image("backgroundIMG", "Assets/shrekObamaMemeDontOpen.jpg");
        game.load.image("sexyIMG", "Assets/sexyIMG.jpg");
        
        
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