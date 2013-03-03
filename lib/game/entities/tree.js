//////////////////////////////////////
// tree   item entity               //
//////////////////////////////////////

ig.module(
	'game.entities.tree'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityTree = ig.Entity.extend({
		//physical movement parameters
		animSheet: new ig.AnimationSheet( 'media/trees.png', 25, 45 ),
		//size of entity
                size: {x:25, y:45},
		offset: {x:0, y:0},
                //set collison type
		
                type: 0,
                checkAgainst: 0, // TYPE.NONE
                collides: 0,
                
		//affected by gravity
                gravityFactor: 0,
		//type: 'tree',
		
                //set name
                name : "trees",
	
		
		image: "",
		scale: 1,
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                      //  console.log('init');
			//add animations
			this.addAnim( 'tree0', 1, [0] );
			this.addAnim( 'tree1', 1, [1] );
			this.addAnim( 'tree2', 1, [2] );
			this.addAnim( 'tree3', 1, [3] );
			//set random tree here
                        this.currentAnim = this.anims['tree'+Math.floor(Math.random()*3)];
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