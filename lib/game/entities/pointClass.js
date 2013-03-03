//////////////////////////////////////
// point class entity for benchmark //
//////////////////////////////////////

ig.module(
	'game.entities.pointClass'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityPointClass = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/pointCloud15px.png', 15, 15 ),
		//size of entity
                size: {x:15, y:15},
                //set collison type
		
                type: ig.Entity.COLLIDES.FIXED,
                checkAgainst: 0, // TYPE.NONE
                collides: ig.Entity.COLLIDES.PASSIVE,
                
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
                    this.parent();
		},
                
		
	});
	
});