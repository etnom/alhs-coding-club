var mySprite;

var keyW, keyA, keyS, keyD;

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
    }, 
    
    create: function() {
        console.log("its working!");
        
        keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);

        
        mySprite = game.add.sprite(10, 10, "yayIMG");
    }, 
    
    update: function () {
        if (keyW.isDown) {
            console.log("keyW is down");
        } else if (keyA.isDown) {
            
        } else if (keyS.isDown) {
            
        }else if (keyD.isDown) {
            
        }
        
        
        
        
    }
    
};