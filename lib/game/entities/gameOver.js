//////////////////////////////////////
// gameOver   item entity               //
//////////////////////////////////////

ig.module(
	'game.entities.gameOver'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityGameOver = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/gameOver.png', 662, 88 ),
		//size of entity
                size: {x:662, y:88},
		offset: {x:0, y:0},
                //set collison type
		
                type: 0,
                checkAgainst: 0, // TYPE.NONE
                collides: 0,
                
		//affected by gravity
                gravityFactor: 0,
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                      //  console.log('init');
			//add animations
			this.addAnim( 'idle', 1, [0] );
			
			//set random tree here
                        this.currentAnim = this.anims.idle;
                      //  console.log('end of init');
			//set a timer so we know how long to keep it around for
			//this.idleTimer = new ig.Timer();
			//console.log(this.currentAnim);
			
		
			
		},
		
		update: function(){
                    //called every iteration

		    //call the parent
                   // this.parent();
		    
		    
		},
		

                
		
	});
	
});