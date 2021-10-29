const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
  baseimage = loadImage("./assets/base.png");
  var player, playerBase, playerArcher, playerimage, baseimage, playerArcherImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(width/10.3, height/2, 100, 140, playerOptions);
  //create player body
  var playerOptions = {
    isStatic  : true
    }
    var playeroptions = {
      isStatic  : true
      }
    player = Bodies.rectangle(width/8, height/3, 80, 130, playerOptions);
  //  playerArcher  = Bodies.rectangle(width/6, height/3, 100 , 100, playerOptions);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image (playerimage, width/8, height/3, 80, 130)
  //show the playerbase image using image() function
  image (baseimage, width/10.3, height/2, 160, 140)
 // image (playerArcherImg, width/6, height/3, 100, 100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
