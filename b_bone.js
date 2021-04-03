function setup() {

  createCanvas(windowWidth,windowHeight)
  // createP();
  // createDiv();
  // createButton();
  // createImg();
  createElement('h1','My fav');


}

function draw() {
  var canvas = document.getElementById('responsive-canvas');
  var heightRatio = 1;
  canvas.height = canvas.width * heightRatio;
  console.log("yay")
  background(0);
  fill(200,100,50);
  rect(100,100,50,50);

}
