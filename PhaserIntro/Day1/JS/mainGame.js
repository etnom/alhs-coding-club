var mySprite;
var myNumber = 1;

var gameVar = {
    preload: function () {
        game.load.image("yayIMG", "Assets/yay.jpg");
    }, 
    
    create: function() {
        console.log("its working!");
        
        mySprite = game.add.sprite(10, 10, "yayIMG");
    }, 
    
    update: function () {
        // if (myNumber === 1) {
        //     mySprite.kill();
        // }
        
        if (mySprite.x < 50) {
            mySprite.x += myNumber;
            mySprite.y += myNumber;
        } else if (mySprite.x < 200) {
            mySprite.x += myNumber * 4;
            mySprite.x += myNumber * 4;
        } else {
            mySprite.x += myNumber * 2;
            mySprite.y += myNumber * 2;
        }
        
        
    }
    
};