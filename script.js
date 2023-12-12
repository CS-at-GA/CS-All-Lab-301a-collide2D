let movers = [];

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  ellipseMode(RADIUS);
  noStroke();
}

function draw() {
  background('aliceblue');
  for( const m of movers ) {
    m.update();
    m.draw();
  }
}

function mouseClicked() {
  movers.push(Mover.createRandom())
}