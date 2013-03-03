//////////////////////////////////////
// Bomb item entity                 //
//////////////////////////////////////

ig.module(
	'game.entities.bomb'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityBomb = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/vase.png', 30, 30 ),
		//size of entity
                size: {x:30, y:30},
		offset: {x:4, y:-2},
                //set collison type
		
                type: ig.Entity.COLLIDES.LITE,
                checkAgainst: 0, // TYPE.NONE
                collides: ig.Entity.COLLIDES.ACTIVE,
                
		//affected by gravity
                gravityFactor: 1,
		
		//bounce
		bounciness: 0,
               
                //set name
                name : "breakableItem",
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'idle', 1, [0] );
                        this.currentAnim = this.anims.idle;
                        
			
		},
		
		update: function(){
                    //called every iteration
		    
                   
                    //call the parent
                    this.parent();
		},
                
		
	});
	
});