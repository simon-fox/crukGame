///////////////////////////////////
//** CRUK GAMES JAM TO DO LIST **//
///////////////////////////////////

- testing Impact
    - generate 10,000 entities in an impact level
    - across 20,000 pixels?
    - so have a class pointEntity
    - then on loading the level, loop 10k times and create them on screen 2-10 pixels apart?

- write code to only draw entities in viewport
    - viewport co-ords should be: 
    - ig.game.screen.x + 320 & ig.game.screen.y + 240
    
- to only draw entities once
    - go through all entities
    - if entity type is EntityPoint_class and isDrawn is true do nothing
    
- alternative methodology
    - blitting
    - take points and turn them into an image
    - update image when game logic has affected points

- super alternative methodology
    - bigger data points (15x15)
    - so we only have a few hundred on screen at once.
    
to do:
   // - get data points looking like something items could
     // balance on
    - get user action (swipe, long click) destroying data
      points
    - generate breakable items
        //- placeholder image
        //- needs gravity
        - needs health
        - needs kill
        - needs to collide with data points
            - might involve only checking collisions with items onscreen
            - edit in game.js from line 260
            - put in an exception for name = "point" entities
    - store scores etc
    //- write camera controls to scroll level
    - split data in half?
    
    
    //if sticking with new direction
        //- split data in half
            //- do not render below y = 0.5
        //- look at making tiled bg from tww assets
       //- add listener for input release event for click
        //- add .grow method
            - add data capture to .grow method
        - replace cloud asset with rock/breakables asset
        - work on kill function of breakables
            - smash animation on kill
            - gain points on kill
        - possible grouping algorithm
            - on init
                - if touching another breakable then group
                - if grouped make more valuable breakable
        - rock/bomb throwing animation
            - thrown item starts large and gets
              a little smaller as it approaches breakables 
   
    - scoring
        - on mouse down record x axis position
        - on mouse release record x axis position
        - subtract first from second
        - normalise number into a positive
        - bigger number = bigger amount removed 
    
    
    
    
    
    
    
    
    