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
		animSheet: new ig.AnimationSheet( 'media/pointCloud15px.png', 15, 15 ),
		//size of entity
                size: {x:30, y:30},
                //set collison type
		
                type: 0, // TYPE.NONE
                checkAgainst: 0, // TYPE.NONE
                collides: 0, // COLLIDES.NEVER
                
		//not affected by gravity
                gravityFactor: 0,
                //has been drawn once?
                isDrawn : false,
                //set name
                name : "point",
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'idle', 0.1, [0] );
                        
                        
			
		},
		
		update: function(){
                    //called every iteration 
                    
                    //call the parent
                    //this.parent();
		},
                
		
	});
	
});