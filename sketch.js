var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Bg
var form, player, game;
var playfield1
var office, messhall, start, hallway, gym, bedroom
var player, impostor
var Bg, dna, fp
var dnaS = 0
var fpS
var button

function preload(){
 bg1 = loadAnimation("BG Start/1.jpg", "BG Start/2.jpg" , "BG Start/3.jpg" , "BG Start/4.jpg" , "BG Start/5.jpg" , "BG Start/6.jpg" , "BG Start/7.jpg" , "BG Start/8.jpg" , "BG Start/9.jpg","BG Start/11.jpg", "BG Start/12.jpg", "BG Start/13.jpg", "BG Start/14.jpg", "BG Start/15.jpg", "BG Start/16.jpg", "BG Start/17.jpg", "BG Start/18.jpg", "BG Start/19.jpg","BG Start/21.jpg", "BG Start/22.jpg", "BG Start/23.jpg", "BG Start/24.jpg", "BG Start/25.jpg", "BG Start/26.jpg", "BG Start/27.jpg", "BG Start/28.jpg", "BG Start/29.jpg","BG Start/31.jpg", "BG Start/32.jpg", "BG Start/33.jpg", "BG Start/34.jpg", "BG Start/35.jpg", "BG Start/36.jpg", "BG Start/37.jpg", "BG Start/38.jpg", "BG Start/39.jpg", "BG Start/41.jpg", "BG Start/42.jpg", "BG Start/43.jpg", "BG Start/44.jpg", "BG Start/45.jpg", "BG Start/46.jpg", "BG Start/47.jpg", "BG Start/48.jpg", "BG Start/49.jpg", "BG Start/51.jpg", "BG Start/52.jpg", "BG Start/53.jpg", "BG Start/54.jpg", "BG Start/55.jpg", "BG Start/56.jpg", "BG Start/57.jpg", "BG Start/58.jpg", "BG Start/59.jpg", "BG Start/61.jpg", "BG Start/62.jpg", "BG Start/63.jpg", "BG Start/64.jpg", "BG Start/65.jpg", "BG Start/66.jpg", "BG Start/67.jpg", "BG Start/68.jpg", "BG Start/69.jpg", "BG Start/71.jpg", "BG Start/72.jpg", "BG Start/73.jpg", "BG Start/74.jpg", "BG Start/75.jpg", "BG Start/76.jpg", "BG Start/77.jpg", "BG Start/78.jpg", "BG Start/79.jpg", "BG Start/81.jpg", "BG Start/82.jpg", "BG Start/83.jpg", "BG Start/84.jpg", "BG Start/85.jpg", "BG Start/86.jpg", "BG Start/87.jpg", "BG Start/88.jpg", "BG Start/89.jpg","BG Start/91.jpg", "BG Start/92.jpg", "BG Start/93.jpg", "BG Start/94.jpg", "BG Start/95.jpg", "BG Start/96.jpg", "BG Start/97.jpg", "BG Start/98.jpg", "BG Start/99.jpg", "BG Start/100.jpg")
 playfield = loadImage("a2.jpg")
 gamer = loadImage("Archivo__1_-removebg-preview.png")
 clue1 = loadImage("dna-removebg-preview.png")
 clue2 = loadImage("fingerprint-removebg-preview.png")
 Button = loadImage("al-removebg-preview.png")
 meeting = loadImage("all.jpg")
 winner = loadImage("Archivo (2).png")
 loser = loadImage("Archivo (3).png")
 risk = loadImage("Screen Shot 2021-01-26 at 8.36.53 PM.png")
}
function setup(){
  //canvas = createCanvas(displayWidth - 15, displayHeight-220);
  canvas = createCanvas(windowWidth, windowHeight-20);
    game = new Game()
    game.start()
    Bg = createSprite(displayWidth/2,displayHeight/2)
    Bg.addAnimation("bgStart", bg1)
    Bg.scale = 1.5
    Bg.visible = true
    button = createSprite(1350,640,10,10)
    button.addAnimation("hi", Button)
    button.scale = 0.2
    
  player = createSprite(1400,600,10,10)
  player.shapeColor = "orange"
  player.addAnimation("gamer", gamer)
  player.scale = 0.2
    player.visible = false
    var rani = Math.round(random(1,2))
   if(rani == 1){
    impostor = createSprite(140,645,10,10)
    impostor.visible = false
    dna = createSprite(1100,205,10,10)
    dna.addAnimation("dna", clue1)
    dna.scale = 0.075
    dna.visible = false
    fp = createSprite(700,305,10,10)
    fp.addAnimation("fp", clue2)
    fp.scale = 0.2
    fp.visible = false
   }
   if(rani == 2){
    impostor = createSprite(1100,50,10,10)
    impostor.visible = false
    dna = createSprite(140,445,10,10)
    dna.addAnimation("dna", clue1)
    dna.scale = 0.075
    dna.visible = false
    fp = createSprite(700,305,10,10)
    fp.addAnimation("fp", clue2)
    fp.scale = 0.2
    fp.visible = false 
   }
 
}


function draw(){
  if(gameState === 4){
    if(fpS === "got"){
      fp.visible = true
      fp.x = displayWidth/2 + 540
      fp.y = displayHeight/2 - 300
      if(dnaS === "found"){
        dna.visible = true
        dna.x = displayWidth/2 + 540
        dna.y = displayHeight/2 - 270
      }
    }
    background("black")
    fill("white")
    textSize(20)
    text("Clues", displayWidth/2+500, displayHeight/2-350)
    textSize(40)
    text("Who do you think it is?", windowWidth/2-180, windowHeight/2)
    guess();
}
if (gameState === 0){
  button.visible = false
  drawSprites();
  }
  if(gameState === 1){
    clear();
    background("black")
    fill("white")
    textSize(50)
    text("Detective", width/2 - 80, height/5)
    textSize(20)
    fill("red")
    text("There are clues scattered in the room, you have to find them. When you are ready to guess who is the impostor, you may click the huge red button.", width/2-630,height/2-50)
    textSize(15)
    text("To collect clues, you must be extremely close. In the voting process, click the color you think is the impostor. If you're correct, you win, otherwise, GAME OVER!", width/2-550,height/2)
    textSize(20)
    text("However if you get too close to the impostor...", width/2-200,height/2+50)
    game.Start()
    
   
  }
  if(gameState === 2){
  Bg.visible = false
  button.visible = true
    form.hide()
    image(playfield, 100, 0)
 //playfield1 = createSprite(width/2, height/2)
  //playfield1.addImage("Play", playfield)
  player.visible = true
  playerControls()
  drawSprites()
  //text(mouseX + "," + mouseY, mouseX, mouseY);
    
if(player.x - impostor.x <= 100 && player.y - impostor.y <= 100 ){
  impostor.visible = true
  impostor.shapeColor = "cyan"
  gameState = 6
}
if(player.x - fp.x <= 80 && player.y - fp.y <= 80 ){

  fp.visible = true

}
if(player.x - dna.x <= 80 && player.y - dna.y <= 80 ){

  dna.visible = true

}
if(player.isTouching(dna)){
  dnaS = "found"
}

if(player.isTouching(fp)){
  fpS = "got"
}
if(fpS === "got"){
  fp.visible = false
}
if(dnaS === "found"){
  dna.visible = false
}
if(mousePressedOver(button)){
    gameState = 4
    button.visible = false
    player.visible = false
    impostor.visible = false
    dna.visible = false
    fp.visible = false
}
  }
  if(gameState === 5){
    var dub = createSprite(windowWidth/2, windowHeight/2,10,10)
    dub.addAnimation("win", winner)
    dub.scale = 1.2
    drawSprites();
  }
  if(gameState === 6){
    var lose = createSprite(windowWidth/2, windowHeight/2,10,10)
    lose.addAnimation("lahoo-saher", loser)
    lose.scale = 1.2
    drawSprites();
  }
}
function playerControls(){
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 3
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x - 3
}
if(keyDown("DOWN_ARROW")){
  player.y = player.y + 3
}
if(keyDown("UP_ARROW")){
  player.y = player.y - 3
  }
}
function walls(){
}
function guess(){
  var guess = createSprite(windowWidth/2, windowHeight/2 - 200)
    guess.addAnimation("lol", meeting)
    var person1 = createSprite(windowWidth/2 - 60, windowHeight/2+100,40,40)
    var person2 = createSprite(windowWidth/2 - 10, windowHeight/2+100 ,40,40)
    var person3 = createSprite(windowWidth/2 + 40, windowHeight/2+100 ,40,40)
    var person4 = createSprite(windowWidth/2 - 210, windowHeight/2+100,40,40)
    var person5 = createSprite(windowWidth/2 - 110, windowHeight/2+100 ,40,40)
    var person6 = createSprite(windowWidth/2 + 90, windowHeight/2+100 ,40,40)
    var person7 = createSprite(windowWidth/2 + 140, windowHeight/2+100,40,40)
    var person8 = createSprite(windowWidth/2 + 190, windowHeight/2+100,40,40)
    var person9 = createSprite(windowWidth/2 - 160, windowHeight/2+100,40,40)
    person1.shapeColor = "red"
    person2.shapeColor = "blue"
    person3.shapeColor = "green"
    person4.shapeColor = "white"
    person5.shapeColor = "pink"
    person6.shapeColor = "lime"
    person7.shapeColor = "cyan"
    person8.shapeColor = "orange"
    person9.shapeColor = "yellow"

    if(mousePressedOver(person7)){
      gameState = 5
    } else if (mousePressedOver(person1) 
    || mousePressedOver(person1)
    || mousePressedOver(person2)
    || mousePressedOver(person3)
    || mousePressedOver(person4)
    || mousePressedOver(person5)
    || mousePressedOver(person6)
    || mousePressedOver(person8) 
    || mousePressedOver(person9)){
      gameState = 6
    }
  
    drawSprites();
}


