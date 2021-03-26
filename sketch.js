var  database;
var form,game,player;
var gameState=0;
var playerCount;
var canvas;
var allplayers,distance=0


function setup(){
  database = firebase.database();
 
 canvas=  createCanvas(500,500);

game= new Game();
game.getstate();
game.start();

}

function draw(){

  if (playerCount===4)
  {
    game.update(1);
    
  }
  if(gameState===1)
    {
     clear();
     game.play();
    }
 
  //console.log(playerCount);
  //console.log(gamestate);
}
