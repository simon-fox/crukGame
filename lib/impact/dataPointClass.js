//////////////////////////////////////
// point class entity for benchmark //
//////////////////////////////////////

ig.module(
	'impact.dataPointClass'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityDataPointClass = ig.Class.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/pointData8px.png', 8, 8 ),
		//size of entity
                size: {x:8, y:8},
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