class Game {
  constructor(){

  }

  /* getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
*/
  async start(){
    if(gameState === 0){
      player = new Player();
    }
  
    
      form = new Form()
      form.display();
  }
   Start(){
     form.startButton()
   }
      /*
    

    blue = createSprite(100,200);
    blue.shapeColor = "blue"
 
    green = createSprite(300,200);
    green.shapeColor = "green"
    

    red = createSprite(700,200);
    red.shapeColor = "red"
   
    orange = createSprite(700,200);
    orange.shapeColor = "orange"
   
    characters = [blue, green, red, orange];
  }

  play(){
    console.log("CHECK2")
    form.hide();

    Player.getPlayerInfo();
    console.log(allPlayers)
    if(allPlayers !== undefined){
      console.log("Check 1")
      console.log(allPlayers)

      //image(track,0, -4*displayHeight, displayWidth, displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the characters
      var x = 200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the characters a little away from each other in x direction
        x = x + 225;
        //use data form the database to display the characters in y direction
        y = displayHeight - allPlayers[plr].distance;
        characters[index-1].x = x;
        characters[index-1].y = y;
        console.log(y)
        console.log(player.index)
        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = characters[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.y += 10
      player.update();
    }
    /*if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x += 10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.x -= 10
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.y -= 10
      player.update();
    } 
    

    drawSprites();
  }

  end(){
    console.log("Game Ended")
  }
  */
}
