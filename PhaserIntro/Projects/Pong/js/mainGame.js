var gameState = 0;  //game states: 0 = loading, 1 = playing, 2 = lose

var projectile, player; //Holds sprites for projectile and player
var playerSpeed = 7;   //Determines speed of player
var keyW, keyS;         //Used for movement via keyboard press

var gameOverText;   //when game is over, this will be displayed

var gameVar = 
{
	preload: function()
	{
		game.load.image("projectileImg", "assets/penguin.png");
		game.load.image("playerImg", "assets/line.png");
	},

	create: function()
	{
		//Background color
		game.stage.backgroundColor = '#003366';
		
		//Create projectile
		projectile = game.add.sprite(60, 60, "projectileImg");
		projectile.scale.setTo(0.03, 0.03);        //Change size of projectile
		game.physics.arcade.enable(projectile);    //Enables projectile to use  phaser physics
		projectile.body.collideWorldBounds = true; //Projectile doesn't go out of bounds
        game.physics.arcade.velocityFromAngle(200, 200, projectile.body.velocity);   //Sets projectile's velocity (speed)
		projectile.body.bounce.set(1);             //Projectile bounces around

		//Create player
		player = game.add.sprite(20, 70, "playerImg");
		player.scale.setTo(0.03, 0.03);            //Changes size of player
		game.physics.arcade.enable(player);        //Enables player to use phaser physics
		player.body.collideWorldBounds = true;     //Player doesn't go out of bounds
		player.body.immovable = true;              //Player doesn't get moved when it hits the projectile

		//Binds keys to keyA and keyD
		keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
		keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        
        gameState = 1;  //set gamestate to playing, because loading is all complete
	},

	update: function()
	{  
        //make sure in gamestate 'playing'
        if (gameState === 1) {
            //Player and projectile can collide
            game.physics.arcade.collide(projectile, player);

            //Basic movements for player
            if(keyW.isDown)
            {
                player.y -= playerSpeed;
            }
            else if(keyS.isDown)
            {
                player.y += playerSpeed;
            }
            
            //if projectile goes behind player, game over
            if (projectile.x < player.x) {
                gameState = 2;
            }
            
        }
        
        //when in gameState 'game over' / 'lose'
        if (gameState === 2) {
            //create game over text, but make sure there wasn't one already created
            if (gameOverText === null || gameOverText === undefined) {
                gameOverText = game.add.text(100, 100, "Game Over. Click to replay.", { font: '28px Arial', fill: '#ffffff' });
            }
            
            //don't let projectile move
            projectile.body.velocity = 0;
            
            //check for mouse click to start back game
            if (game.input.activePointer.isDown)
            {    
                //remove gameOverText
                gameOverText.kill();
                gameOverText = null;
                
                //destroy player and projectile
                player.destroy();
                projectile.destroy();
                
                //reuse the code we used to start the game
                this.create();

            }
            
        }

        

        
	}
}