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
		animSheet: new ig.AnimationSheet( 'media/breadCrumb.png', 35, 35 ),
		
                size: {x:2, y:2},

		collides: ig.Entity.COLLIDES.ACTIVE,
		gravityFactor: 0,
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
			
                        //record positions
                        this.initialX = this.pos.x;
                        this.initialY = this.pos.y;
                        
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