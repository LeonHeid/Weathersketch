var d = [];
function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,0);
  for (var i = 0; i < 500; i++) {
    d.push(new Drop(random(0, windowWidth), random(0, windowHeight), random(2, 4)));
  }
}
function draw(){

noStroke();
fill(255, 255, 255);
circle(300, 300, 100);
circle(200, 250, 120);
circle(275, 260, 80);
circle(245, 280, 150);
circle(215, 230, 125);
circle(115, 200, 120);
circle(115, 250, 130);
circle(145, 300, 110);
  
  
  
noStroke();
fill(255, 255, 255);
circle(325, 265, 110);
ellipse(320, 250, 200, 150);
ellipse(280, 270, 175, 250);
ellipse(190, 250, 175, 230);
ellipse(320, 290, 240, 180);
circle(360, 350, 80);
  
  
  
noStroke();
fill(255, 255, 255);
ellipse(1000, 450, 175, 230);
ellipse(1000, 400, 250, 200);
circle(900, 320, 120);
ellipse(1000, 400, 200, 350);
ellipse(1000, 420, 400, 220);
circle(1100, 340, 200);
circle(1100, 500, 150);
circle(920, 500, 140);
circle(1400, 120, 140);  
ellipse(1500, 100, 200, 220);
circle(1400, 60, 80);
ellipse(1540, 170, 60, 100);
  
  

noStroke();
fill(255, 255, 255);
ellipse(500, 600, 150, 120);
ellipse(450, 600, 140, 200);
circle(350, 550, 120);
ellipse(320, 630, 180, 130);
circle(520, 670, 75);
circle(285, 560, 85);
  


noStroke();
fill(255, 255, 255);
ellipse(780, 80, 180, 130);
ellipse(690, 80, 140, 200);
circle(750, 140, 85);
ellipse(650, 60, 170, 100);
circle(800, 130, 65);
circle(630, 130, 75);
ellipse(770, 65, 160, 120);
circle(830, 50, 65);
circle(850, 100, 100);



noStroke();
fill(255,165,0);
ellipse(100,75,100,100);
fill(0,0,0);
ellipse(125,75,100,100);




noStroke();
  fill(0, 25);
  rect(0, 0, width, height);
  
  // i'm guessing this updates each particle on screen?
  for (var i = 0; i < d.length; i++) {
    d[i].displ();
  }
}

function Drop(x, y, sp) {
  var x1 = x;
  var y1 = y;
  var x2;
  var y2;
  var s = sp;

  this.displ = function() {
    // converts mouse position. could also use map() to avoid mx <= 0
    var mx = mouseX / 120;
    if (mx <= 0) {
      mx = 0.5; // default, works as a failsafe. old one was too slow for me
    }
    
    y1 = y1 + s * mx; // scales speed according to mouse position
    x2 = x1;
    y2 = y1 + 30; // length of raindrops, change if they're too long/short

    stroke(200);
    line(x1, y1, x2, y2); // draws raindrop

    if (y1 >= windowHeight - 80) { // did the drop hit the ground?
      noFill();
      noStroke();
      fill(255, 150);
      ellipse(x1, windowHeight - random(5, 50), random(2, 5), random(1, 4)); // then draw a splash
      
      // renews the drop by sending it back to the top (no need to generate new ones)
      x1 = random(0, windowWidth);
      y1 = -120;
    }
}
}
