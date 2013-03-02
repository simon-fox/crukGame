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
		animSheet: new ig.AnimationSheet( 'media/pointData8px.png', 8, 8 ),
		//size of entity
                size: {x:8, y:8},
                //set collison type
		collides: ig.Entity.COLLIDES.NONE,
		//not affected by gravity
                gravityFactor: 0,
                //has been drawn once?
                isDrawn : false,
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'idle', 0.1, [0] );
                        
                        //show it has been drawn once
                        this.isDrawn = true;
			
		},
		
		update: function(){
                    //called every iteration 
                    
                    //call the parent
                    //this.parent();
		},
                
                kill: function(){
                        
                    //call the parent
                    this.parent();
                    
                }
		
	});
	
});