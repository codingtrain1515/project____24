const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var compArrow;
var computerArcher
var arrow;

var plArrows = [];
var CmpArrows = [];


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(345, player.body.position.y - 25, 120, 120);
  //Create Player Archer Object
  

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  ); 

 //Create an arrow Object
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
//Playerarrow.display();
 
}
function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX = computerArcher.body.position.x;
    var posY = computerArcher.body.position.y;
    var angle = computerArcher.body.angle+PI/2;

    arrow.display()

    var arrow = new Computerarrow(width - 340,player.body.position.y - 5,80,20)
    Matter.Body.setAngle(arrow.body, angle);
    CmpArrows.push(arrow);
  
  }
}

function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
    if (playerArrow.length) {
      var angle = computerArcher.body.angle+PI/2;
      CmpArrows[playerArrows.length - 1].shoot(angle);
    }
  }


}

function showArrows(index, arrows) {
  arrows[index].display();
  
    
  
 

}



