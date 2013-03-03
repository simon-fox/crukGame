//////////////////////////////////////
// tree   item entity               //
//////////////////////////////////////

ig.module(
	'game.entities.tower'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityTower = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/tower.png', 35, 53 ),
		//size of entity
                size: {x:35, y:53},
		offset: {x:0, y:0},
                //set collison type
		
                type: 0,
                checkAgainst: 0, // TYPE.NONE
                collides: 0,
                
		//affected by gravity
                gravityFactor: 0,
		
		
                //set name
                name : "tower",
	
		
		image: "",
		scale: 1,
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                      //  console.log('init');
			//add animations
			this.addAnim( 'idle', 1, [0] );

			//set random tree here
                        this.currentAnim = this.anims[idle];
                      //  console.log('end of init');
			//set a timer so we know how long to keep it around for
			//this.idleTimer = new ig.Timer();
			//console.log(this.currentAnim);
			
		
			
		},
		
		update: function(){
                    //called every iteration

		    //call the parent
                   // this.parent();
		    
		    
		},
		

                
		
	});
	
});