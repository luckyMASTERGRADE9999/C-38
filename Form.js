class Form {
  constructor() {
  }
  
  hide(){
    removeElements();
  }
  
  display(){
    title = createElement('h1');
    title.html("1200 m ..   Hurdles   Race ..");
    title.position(width/2 - 150,20);
  }      
  
  formContent(){
    text = createElement('h2','Please Enter your Names...');
    text.position(50,100);
    var inputName1 = createInput("");
    inputName1.size(250);
    inputName1.position(50,200);
    var inputName2 = createInput("");
    inputName2.size(250);
    inputName2.position(50,260);
    var inputName3 = createInput("");
    inputName3.size(250);
    inputName3.position(50,320);
    var inputName4 = createInput("");
    inputName4.size(250);
    inputName4.position(50,380);
    var inputName5 = createInput("");
    inputName5.size(250);
    inputName5.position(50,440);

    var button=createButton("ENTER");
    button.position(50,490);
  
    button.mousePressed(function(){
      button.hide();
      playerName1 = inputName1.value();
      playerName2 = inputName2.value();
      playerName3 = inputName3.value();
      playerName4 = inputName4.value();
      playerName5 = inputName5.value();

      playersA.push(playerName1);
      playersA.push(playerName2);
      playersA.push(playerName3);
      playersA.push(playerName4);
      playersA.push(playerName5);
      
      for (let i=0; i<playersA.length;i++){
        if (playersA[i]===""){
          data=false;
        }
      }
      greet();  
    });
  
    function greet(){
      if(data==false){
        text = createElement('h2','What happened?  Please Enter your Names...');
        text.position(50,450);  
      } else {
        var greeting=createElement('h2');
        greeting.html("Thank You .. Best of Lucks .." + "Team")
        greeting.position(50,450);
    
        var button=createButton("READY to GO..");
        button.position(300,500);
        button.mousePressed(function(){
          gameState=1;
        });
      }    
    }  
  }
}