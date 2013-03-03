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
		animSheet: new ig.AnimationSheet( 'media/windBlast.png', 50, 50 ),
		//size of entity
                size: {x:50, y:50},
		offset: {x:0, y:0},
                //set collison type
		
                type: 0,
                checkAgainst: 0, // TYPE.NONE
                collides: 0,
                //not affected by gravity
                gravityFactor: 0,
		//fade out timers
		lifeTime: 1,
		fadeTime: 1,
	
               
                
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'blast', 0.1, [0,1,2,3,14,14,16] );
			
                        this.currentAnim = this.anims.blast;
                        
			//set a timer so we know how long to keep it around for
			this.idleTimer = new ig.Timer();
		},
		
		update: function(){
                    //called every iteration
		    if ( this.idleTimer.delta() > this.lifeTime ){
				this.kill();
				return;
			}
                   this.currentAnim.alpha = this.idleTimer.delta().map(this.lifeTime - this.fadeTime, this.lifeTime, 1, 0);
                    //call the parent
                    this.parent();
		},
                
		
	});
	
});