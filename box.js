class Box {
    constructor (x,y,width,height){
        var options = {
        'density': 0.04,
        'friction': 1,
        'restituition':0.8
        }

        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        World.add(world, this.body)

    }
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }