// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/ 

var engine,world;
var ground1;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

 var canvas =  createCanvas(400,400);
 
 engine = Engine.create();
 world = engine.world;

 tan = new Tanker();
 ground1 = new Ground(200,400,400,15);
 
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

tan.display();
ground1.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}