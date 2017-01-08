var gameState = 0;  //game states: 0 = loading, 1 = playing, 2 = lose

var projectile, player1, player2; //Holds sprites for projectile and players
var playerSpeed = 7;   //Determines speed of player
var keyW, keyS, keyUp, keyDown;         //Used for movement via keyboard press

var gameOverText;   //when game is over, this will be displayed

var isPlayer1Winner;    //flag used to determine winner

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

		//Create player 1
		player1 = game.add.sprite(20, 70, "playerImg");
		player1.scale.setTo(0.03, 0.03);            //Changes size of player
		game.physics.arcade.enable(player1);        //Enables player to use phaser physics
		player1.body.collideWorldBounds = true;     //Player doesn't go out of bounds
		player1.body.immovable = true;              //Player doesn't get moved when it hits the projectile
        
        //Binds keys to keyA and keyD. These are used for player 1 controls
		keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
		keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        
        
        //create player 2
        player2 = game.add.sprite(750, 70, "playerImg");
		player2.scale.setTo(0.03, 0.03);            //Changes size of player
		game.physics.arcade.enable(player2);        //Enables player to use phaser physics
		player2.body.collideWorldBounds = true;     //Player doesn't go out of bounds
		player2.body.immovable = true;              //Player doesn't get moved when it hits the projectile
        
        //Binds keys to keyUp and keyDown. These are used for player 1 controls
		keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);


        
        gameState = 1;  //set gamestate to playing, because loading is all complete
	},

	update: function()
	{  
        //make sure in gamestate 'playing'
        if (gameState === 1) {
            //Players and projectile can collide
            game.physics.arcade.collide(projectile, player1);
            game.physics.arcade.collide(projectile, player2);

            //Basic movements for players
            if(keyW.isDown)
            {
                player1.y -= playerSpeed;
            }
            else if(keyS.isDown)
            {
                player1.y += playerSpeed;
            }
            if(keyUp.isDown)
            {
                player2.y -= playerSpeed;
            }
            else if(keyDown.isDown)
            {
                player2.y += playerSpeed;
            }
      
            
            //if projectile goes behind player, game over
            if (projectile.x < player1.x) {     //projectile goes behind player 1, player 1 loses
                gameState = 2;
                isPlayer1Winner = false; 
            } else if ( (projectile.x + projectile.width) > (player2.x + player2.width) ) {   //projectile goes behind player 2, player 2 loses
                gameState = 2;
                isPlayer1Winner = true;
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
                
                //kill player and projectile
                player1.kill();
                player2.kill();
                projectile.kill();
                
                //reuse the code we used to start the game
                this.create();

            }
            
        }

        

        
	}
}