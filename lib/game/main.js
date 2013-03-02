ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	//require levels
	'game.levels.test',
	//require entities
	'game.entities.pointClass',
	//set to debug mode
	'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	//setup mouse controls
	mouseLast: {x: 0, y: 0},
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		// Load test level
		this.loadLevel( LevelTest);
		//bind keys
		ig.input.bind( ig.KEY.MOUSE1, 'leftClick' );
		
		//create loads of entities
		var tempX = 10;
		var tempY = 10;
		for (var i = 0;i<2500;i++){
			//spawn entity - type,x,y,settings
			var settings;
			ig.game.spawnEntity(EntityPoint_class,tempX,tempY,settings);
			tempX = tempX + 10;
			tempY = tempY + 10;
		}
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// camera control
		if (ig.input.pressed('leftClick')) {
			// set the starting point
			this.mouseLast.x = ig.input.mouse.x;
			this.mouseLast.y = ig.input.mouse.y;	
		}
	  
		if (ig.input.state('leftClick')) {
			this.screen.x -= ig.input.mouse.x - this.mouseLast.x;
			this.screen.y -= ig.input.mouse.y - this.mouseLast.y;
			this.mouseLast.x = ig.input.mouse.x;
			this.mouseLast.y = ig.input.mouse.y;		  
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
