class Mover {
  constructor(position,movement,size,color) {
    this.position = position
    this.movement = movement
    this.r = size,
    this.c = color    
  }

  containWithinWindow() {
    if( this.movement.x > 0 ) {
      if( this.position.x + this.movement.x + this.r > width ) {
        this.position.x = width - this.r;
        this.movement.x *= -1;
      }      
    } else {
      if( this.position.x + this.movement.x - this.r < 0 ) {
        this.position.x = this.r;
        this.movement.x *= -1;
      }      
    }

    if( this.movement.y > 0 ) {
      if( this.position.y + this.movement.y + this.r > height ) {
        this.position.y = height - this.r;
        this.movement.y *= -1;
      }      
    } else {
      if( this.position.y + this.movement.y - this.r < 0 ) {
        this.position.y = this.r;
        this.movement.y *= -1;
      }        
    }
  }

  draw() {
    fill(this.c);
    circle(this.position.x,this.position.y,this.r);
  }    

  update() {
    this.containWithinWindow();
    this.position.add(this.movement);
  }  

  static createRandom() {
    return new Mover(
      createVector(random(width),random(height)),
      createVector(random(-1,1),random(-1,1)),
      random(3,20),
      random(['red','orange','yellow','green','purple'])
    )
  }  
}