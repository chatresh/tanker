

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


function setup() {
   var canvas = createCanvas(600,400);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(0,390,2000,20);

   base1 = new Box(80,380,150,10);
   base2 = new Box(80,370,150,10); 

   shoot = new Shot(110,325,120,20);

   ball1 = new Ball(200,100,15);
  
    
}

function draw() {

    background(0);

    Engine.update(engine);

    ground.display();

    base1.display();
    base2.display();
    shoot.display();
    ball1.display();

    arc (80,height - 40,150,130,PI,TWO_PI);

    



}
