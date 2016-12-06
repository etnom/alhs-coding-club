var sprite;

var keyW, keyA, keyS, keyD;

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
    }, 
    
    create: function() {
        console.log("its working!");
        
        sprite = game.add.sprite(10, 10, "yayIMG");
        keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
    }, 
    
    update: function () {
        if ( (sprite.x > 0) 
        && (sprite.y > 0)
        && (sprite.x < game.width) ) {
            if (keyW.isDown) {
                sprite.y -= 10;   
            }
            if (keyA.isDown) {
                sprite.x -= 10;   
            }
            if (keyS.isDown) {
                sprite.y += 10;   
            }
            if (keyD.isDown) {
                sprite.x += 10;   
            }        
            
            
        }
        
        
        
        
    }
    
};