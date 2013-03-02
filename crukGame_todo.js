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