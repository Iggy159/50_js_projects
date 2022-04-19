let diameter;
let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  diameter = height - 10;
}

function draw() {
  background(40)
  let val = randomGaussian();
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  
  
  beginShape();
  for(let i = 0; i < 2; i++) {
    rotateX(millis() / 4000)
    for(let j = 0; j < 2; j++) {
      rotateZ((millis() / 4000) * -2);
      for(let k = 0; k < 6; k++) {
        stroke(200)
        strokeWeight(val * 0.5)
        
        let nk = map(i, 0, width, 0, 10);
	    let y = height * noise(nk);
        
        noFill()
        rotateY(millis() / 4000);
        box(val + 220)
        
        //ellipse(width, height, d2 * 4, d2 * 4)
      }
    } 
  }
  endShape();
  sphere(45 * val)
}