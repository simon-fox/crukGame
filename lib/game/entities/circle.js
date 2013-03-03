//////////////////////////////////////
// radius item entity               //
//////////////////////////////////////

ig.module(
	'game.entities.circle'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityCircle = ig.Entity.extend({
		//physical movement parameters
		//animSheet: new ig.AnimationSheet( 'media/circle.png', 100, 100 ),
		//size of entity
                size: {x:100, y:100},
		offset: {x:0, y:0},
                //set collison type
		
                type: 0,
                checkAgainst: 0, // TYPE.NONE
                collides: 0,
                
		//affected by gravity
                gravityFactor: 0,
		
		//color
		color: '#ffffff',
               
                //set name
                name : "circle",
		radius: 100,
		
		//fade time life time
		lifeTime: 1,
		fadeTime: 1,
		
		image: "",
		scale: 1,
		
	
		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
                        
			//add animations
			//this.addAnim( 'idle', 1, [0] );
                        //this.currentAnim = this.anims.idle;
                        
			//set a timer so we know how long to keep it around for
			this.idleTimer = new ig.Timer();
			//console.log(this.currentAnim);
			this.image = new ig.Image('media/circle.png');
			this.image.width=100;
			this.image.height=100;
			this.image.draw(100,100);
			console.log(this.image);
			//this.scale = Math.floor(ig.system.width/image.width);
			
		},
		
		update: function(){
                    //called every iteration
		  //  if ( this.idleTimer.delta() > this.lifeTime ){
		//		this.kill();
		//		return;
		//	}
		    //this.scale = this.idleTimer.delta().map(this.lifeTime - this.fadeTime, this.lifeTime, 1, 100);
                
                    
		    //this.currentAnim.sheet.image.resize(this.scale);
		//	this.currentAnim.sheet.width *= this.scale;
		//	this.currentAnim.sheet.height *= this.scale;
			
		//	this.currentAnim.draw(this.pos.x,this.pos.y);
		    //this.image.resize(1);
		    this.image.draw(100,100);
		    
		    
		    //call the parent
                    this.parent();
		    
		    
		},
                
		
	});
	
});