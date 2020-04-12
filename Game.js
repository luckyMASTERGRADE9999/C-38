class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      form = new Form();
      form.display();
      form.formContent();
    }
    
    player1 = createSprite(50,120,10,10);
    player1.addImage("player1",plr1_img);
  
    player2 = createSprite(50,220,10,10);
    player2.addImage("player2",plr2_img);
     
    player3 = createSprite(50,340,10,10);
    player3.addImage("player3",plr3_img);
    
    player4 = createSprite(50,430,10,10);
    player4.addImage("player4",plr4_img);
    
    player5 = createSprite(50,540,10,10);
    player5.addImage("player5",plr5_img)
    
    playersA.push(player1.x);
    playersA.push(player2.x);
    playersA.push(player3.x);
    playersA.push(player4.x);
    playersA.push(player5.x);
  }

  play(){
    form.hide();
    var greeting=createElement('h1');
    greeting.html(" Get SET... GO.. ")
    greeting.position(50,75);
      
    createCanvas(1200,650);
    //background(23,134,134);
    image(track, 0,(height*0.6-400),width*1.0, height*1.2);

    if(keyIsDown(32) ){
       var speed=random(0.5,1.1);
      player1.x =player1.x+speed;   
    }
    
    if(keyIsDown(UP_ARROW) ){
      player1.y=player1.y-1;
    }else if (keyIsDown(DOWN_ARROW)){
      player1.y=player1.y+2;
    } 
    
    var speed=random (0.2,0.8);
    player2.x=player2.x+speed;
    var speed=random (0.4,0.7);
    player3.x=player3.x+speed;
    var speed=random (0.3,0.7);
    player4.x=player4.x+speed;
    var speed=random (0.3,0.9);
    player5.x=player5.x+speed;
    drawSprites();
  }  
  
  end(){
    noLoop(); 
    console.log("Game Ended");
    console.log(player.rank);
  }
  
  playerRank(){
    if(gameState===2){
      if(dist1>dist2||dist1>dist3|dist1>dist4|dist1>dist5){
        var rank=1;  
      } else if (dist2>dist3||dist2>dist4||disdt2>dist5) {
          rank=2;
      } else if(dist3>dist4|dist3>dist5){
          rank=3;
      } else if(dist4>dist5){
          rank=4;
      }else{
          rank=5;
      }
    console.log(rank);
    var result=createElement('h1');
    result.position(300,75);
    
    
    switch (rank) {
                
        case 1:
          result.html(playerName1+ "    is the WINNER");
        break;
        case 2:
          result.html(playerName2+ "    is the WINNER");
        break;
        case 3:
          result.html(playerName3+ "    is the WINNER");
        break;
        case 4:
          result.html(playerName4+ "    is the WINNER");
        break;
        case 5:
          result.html(playerName5+ "    is the WINNER");
        break;
      }
    
    }
  } 
}
