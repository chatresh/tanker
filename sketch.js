// You could have multiple flags like: start, launch to indicate the state of the game.

const { Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;
var shootergun;
function preload(){
    shootergun = loadImage("download.jpg")
}
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

 var canvas =  createCanvas(1400,550);
 
 engine = Engine.create();
 world = engine.world;


 tan = new Tanker();
 ground1 = new Ground(700,455,1400,20);
 ground2 = new Ground(95,200,115,30);
CanonBall1 = new CanonBall(830,410,50,50)
CanonBall2 = new CanonBall(850,450,50,50)
CanonBall3 = new CanonBall(790,450,50,50)

shotBall1 = new ShootBall(179,180,40,40)
sling = new SlingShot(shotBall1.body,{x:179,y:180});

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(56,24,226);
Engine.update(engine);
tan.display();
CanonBall1.display();
CanonBall2.display();
CanonBall3.display();

for (var i = 80; i<1300; i = i+200){
 var sprite = createSprite(i,50,20,20)
 sprite.addImage(shootergun)
}

textSize(100)
text("T A N K E R  G A M E",220,230)
shotBall1.display();
ground1.display();
ground2.display();

drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(shotBall1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
     sling.attach(shotBall1.body);
    }
}
