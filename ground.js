class Ground 
{
  constructor(x, y, w, h) 
  {
    var ground_options = {
      restitution: 0.3,
      friction:0,
      isStatic:true
    }; 
    
    this.body = Bodies.rectangle(x, y, w, h, ground_options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h; 
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("yellow");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  
}


