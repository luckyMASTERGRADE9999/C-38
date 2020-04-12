class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }


  raceStatus(){
     dist1=player1.x;
     dist2=player2.x;
     dist3=player3.x;
     dist4=player4.x;
     dist5=player5.x;

    //console.log(dist2);
    distA=[dist1,dist2,dist3,dist4,dist5];

    for(let i=0; i<distA.length;i++){
      if (distA[i]>1200){
        gameState=2;
      }
    }

  }
}
