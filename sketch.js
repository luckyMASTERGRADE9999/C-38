var canvas, backgroundImage;
var data=true;
var gameState = 0;
var playerCount;
var playerName1,playerName2,playerName3,playerName4,playerName5;
var player1,player2,player3,player4,player5;
var playersA=[];
var form,title,button, player, game;
var track,plr1_img, car1_img, car2_img, car3_img, car4_img;
var dist1,dist2,dist3,dist4,dist5;
var distA=[];
var obstacleA=[];
var form,obstacle;

function preload(){
  track = loadImage("./assets/racing_track1.jpg");
  plr1_img = loadImage("./assets/athlete1.png");
  plr2_img = loadImage("./assets/athlete2.png");
  plr3_img = loadImage("./assets/athlete3.png");
  plr4_img = loadImage("./assets/athlete4.png");
  plr5_img = loadImage("./assets/athlete5.png");
  
}

function setup(){
 var canvas = createCanvas(600,600);
 //var  canvas = createCanvas(displayWidth - 300, displayHeight-300);
  game  = new Game();
  game.start();
  player=new Player();
  obstacle=new Hurdles();
  obstacle.erect();
}  
  
  
function draw(){
  if(gameState ===1){
    game.play();
    player.raceStatus();
    
  }  
  if(gameState === 2){
    game.end();
    game.playerRank();
  }
}
