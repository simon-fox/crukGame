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
	
	EntityPoint_class = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/pointData1px.png', 1, 1 ),
		//size of entity
                size: {x:2, y:2},
                //set collison type
		collides: ig.Entity.COLLIDES.NONE,
		//not affected by gravity
                gravityFactor: 0,
		
	
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
                
                kill: function(){
                        
                    //call the parent
                    this.parent();
                    
                }
		
	});
	
});