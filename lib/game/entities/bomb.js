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
		animSheet: new ig.AnimationSheet( 'media/bomb.png', 30, 30 ),
		//size of entity
                size: {x:30, y:30},
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
	
               
                //set name
                name : "breakableItem",
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			this.addAnim( 'idle', 1, [0] );
                        this.currentAnim = this.anims.idle;
                        
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