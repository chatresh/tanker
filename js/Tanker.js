 class Tanker {
  constructor(x, y, width, height) {
      var options = {
      restitution:1.0
     }
    this.body=Bodies.rectangle(x,y,width,height);
    World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
     push();
      fill(246,128,173);
      strokeWeight(2.5);
      stroke('rgb(100%,0%,10%)');
      
      rect(110,330,30,80);
      rect(50,370,20,40);
      pop();
      push();
      strokeWeight(2.5);
      stroke(255, 204, 100);
      fill(100,146,88);
      ellipse(50,200,100,100);
      ellipse(60,350,55,55);
      pop();
      push();
      stroke(0,0,255);
      strokeWeight(2.5);
      fill(200,250,180);
      rect(0,410,130,10); 
      rect(50,250,100,20);
      pop();
      stroke(255, 204, 0);
      strokeWeight(2.5);
      fill(26,55,189);
      rect(50,270,120,60);
      rect(0,240,25,180)
      // You could also use an image if you want a specific look

    };
}
