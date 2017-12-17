let qty = 1000;
let r = 250;
let multiplier = 1;



function setup() {
  //frameRate(30);
  pixelDensity(1);
  canvas = createCanvas(600, 600);
  canvas.parent('canvas-container');
  colorMode(HSB);
}

function draw() {
  stroke(255);
  text('aaaa', 10, 10);

  translate(width / 2, height / 2);
  rotate(PI);
  background(0);

  let points = [];
  let c = map(multiplier % 360, 0, 255, 0, 360);
  stroke(c, 255, 255);
  strokeWeight(6);
  noFill();
  ellipse(0, 0, r * 2);

  for (let i = 0; i < qty; i++) {
    let a = i * TWO_PI / qty;
    let p = {
      x: r * cos(a),
      y: r * sin(a)
    }
    points.push(p);
  }

  points.forEach((p, i) => {
    let c = map(i, 0, qty, 0, 360);
    stroke(c, 255, 255);

    strokeWeight(1);
    let result = floor(i * multiplier % qty);
    line(p.x, p.y, points[result].x, points[result].y);
  });


  multiplier += 0.1;
}