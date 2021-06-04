var database;
var allPlayers;
//objects from classes
var game,player,form

var car1
var car2
var car3
var car4
var cars 



//properties in database
var gameState = 0
var playerCount = 0


function setup(){
  //creating database
  database = firebase.database();
  console.log(database);
  
  createCanvas(windowWidth-20,windowHeight-20);
  
  //game object out of the game class
  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.updateState(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}

