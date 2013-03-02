//////////////////////////////////////
// Breakable item entity            //
//////////////////////////////////////

ig.module(
	'game.entities.breakableItem'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityBreakableItem = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/breakableItem.png', 30, 30 ),
		//size of entity
                size: {x:30, y:30},
                //set collison type
		
                type: 0, // TYPE.NONE
                checkAgainst: 0, // TYPE.NONE
                collides: ig.Entity.COLLIDES.ACTIVE,
                
		//not affected by gravity
                gravityFactor: 0,
               
                //set name
                name : "breakableItem",
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'idle', 0.1, [0] );
                        this.currentAnim = this.anims.idle;
                        
			
		},
		
		update: function(){
                    //called every iteration 
                    
                    //call the parent
                    this.parent();
		},
                
		
	});
	
});