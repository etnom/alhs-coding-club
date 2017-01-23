/***********************************************************************************************************************************
 * INSTRUCTIONS & TIPS                                                                                                             * 
 * 1. TODO Indicates lines to edit. If you finish all the TODO steps, the game should run properly.                                *
 * 2. If you are ever stuck, try looking at other lines of code that are similar, asking your peers, or google it.                 *
 * 3. The // indicates a comment. Computers will ignore all commented lines. Try using it to document your progress.               *
 * 4. You will probably not finish all the code in one day. Take your time to learn.                                               *
 * 5. Feel free to experiment with other parts of code or add new lines.                                                           *
 ***********************************************************************************************************************************/

var gameState = 0;      //game states: 0 = loading, 1 = playing, 2 = lose

var projectile, player; //Holds sprites for projectile and player
var playerSpeed = 7;    //Optional: Change the number of this variable and see what happens.
var keyW, keyS;         //Used for movement via keyboard press

var gameOverText;       //when game is over, this will be displayed

var gameVar = 
{
	preload: function()
	{
        //
        //
        //TODO \/ \/ \/
        //
        //
        
		//Loads Images
		game.load.image("playerImg", "Assets/line.png");
		//TODO Load the penguin image (or any other image you like)
        
        //
        //
        //TODO ^^^^^^^^^
        //
        //
  
	},

	create: function()
	{
		//Background color
		//Optional: Change color. Look up 'hex color picker' and enter the value below.
		game.stage.backgroundColor = '#003366';

		
        //
        //
        //TODO \/ \/ \/
        //
        //
        
		//Create projectile
		projectile = game.add.sprite(, , );                                          //TODO Load the projectile image (If you are stuck, try looking at the lines of code for "Create player" below
		projectile.scale.setTo(1, 1);                                                //TODO Change size of projectile
		game.physics.arcade.enable(projectile);                                      //Enables projectile to use  phaser physics
		projectile.body.collideWorldBounds = false;                                  //TODO Make it so projectile doesn't go out of bounds
		game.physics.arcade.velocityFromAngle(200, 200, projectile.body.velocity);   //Sets projectile's velocity (speed)
		projectile.body.bounce.set(1);                                               //Projectile bounces around

		//Create player
		player = game.add.sprite(20, 70, "playerImg"); //Load the player image
		player.scale.setTo(1, 1);                      //TODO Changes size of player
		game.physics.arcade.enable(player);            //Enables player to use phaser physics
		player.body.collideWorldBounds = false;        //TODO Make it so player doesn't go out of bounds
		player.body.immovable = true;                  //Player doesn't get moved when it hits the projectile
        
        //
        //
        //TODO ^^^^^^^^^
        //
        //
        

        //
        //
        //TODO \/ \/ \/
        //
        //
        
		//Binds keys to keyA and keyD
		keyW = ; //TODO Add keyw
		keyS = ; //TODO Add keys
        
        //
        //
        //TODO ^^^^^^^^^
        //
        //
        
		gameState = 1;  //set gamestate to playing, because loading is all complete
	},

	update: function()
	{  
		//make sure in gamestate 'playing'
		if (gameState === 1) 
		{
			//Player and projectile can collide
			game.physics.arcade.collide(projectile, player);
            
            //
            //
            //TODO \/ \/ \/
            //
            //

			//Basic movements for player
			if(//TODO IF keyW is pressed)
			{
				//TODO Move player's vertical position
			}
			else if(//TODO If keyS is pressed)
			{
				//TODO Move player's vertical position
			}
			
			//Game over
			if (//TODO Condition for when game is over) 
			{
				gameState = 2;
			}
                      
            //
            //
            //TODO ^^^^^^^^^
            //
            //  
		}

		//when in gameState 'game over' / 'lose'
		if (gameState === 2) 
		{
			//create game over text, but make sure there wasn't one already created
			if (gameOverText === null || gameOverText === undefined) 
			{
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
    
var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('game', gameVar);
game.state.start('game');
