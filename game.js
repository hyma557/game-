class Game {
    constructor() { }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        
    }

    play() {
        form.hide()
        Player.getPlayerInfo()

       
    
        bg = createSprite(width / 2, height / 2)
        bg.addImage(bgi)
        bg.scale = 1.15
        bg.velocityX = -2

     

        tank1 = createSprite(width / 2 - 550, height - 200, 50, 50);
         tank1.addImage(tank1I)
         tank1.scale = 0.5

        var tank1position = database.ref("tank1/pos")
        tank1position.on("value", readPosition, showError)

         tank2 = createSprite(width - 100, height - 200, 50, 50);
         tank2.addImage(tank2I)
         tank2.scale = 0.5

         var tank2position = database.ref("tank2/position")
         tank2position.on("value", readPosition2, showError)

       
  
    

         if(bg.x < 500){
            bg.x = width/2
          }
          
            if(keyDown("D")||keyDown("d")){
              writePosition1(10, 0)
            }
          
            if(keyDown("A")||keyDown("a")){
              writePosition1(-10, 0)
            }
          
            if(keyDown(RIGHT_ARROW)){
              writePosition(10, 0)
            }
          
            if(keyDown(LEFT_ARROW)){
              writePosition(-10, 0)
            }
         
            if(keyWentDown("W")||keyWentDown("w")){
              
              spawnbomb()
            }

         
console.log(bomb1)

   text("player1Score: "+ allplayers.player1.score, width/+600, height/2-200)
        text("player2Score: "+ allplayers.player2.score, width/+500, height/2-100)
          
            drawSprites()
            

            function showError(){
              console.log("message")
            }

            function readPosition2(data){
              position = data.val();
              tank2.x = position.x
              tank2.y = position.y
              
            }

            function readPosition(data){
              pos = data.val();
             tank1.x = pos.x 
             tank1.y = pos.y
              
        
            }

            function  writePosition(x, y) {
              database.ref("tank2/position").set({
                "x": position.x += x,
                "y": position.y += y
              })
            }
        
            function  writePosition1(x, y){
              database.ref("tank1/pos").set({
                "x": pos.x += x ,
                "y": pos.y += y
              })
            }


           

            
           

           

    }


     
    
     

   
}

