// var canvas = document.getElementById('responsive-canvas');
// var ctx = document.querySelector("canvas").getContext("2d");
// var heightRatio = 1;
var canvas;
var ctx;

function setup() {

  canvas = createCanvas(windowWidth,windowHeight);
  ctx = document.querySelector("canvas").getContext("2d");
  // var canva = document.getElementById('responsive-canvas');
  console.log(ctx);
  createElement('h1','My fav');
  var heightRatio = 1;

}

function draw() {
  background(12);
  noStroke();
  fill(255);
  rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);
  // canvas.height = canvas.width * heightRatio;
  // console.log("yay")


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function ResposinveRender(){
  ctx.canvas.width = windowWidth;
  ctx.canvas.height = windowHeight;
  console.log("rendering")
}

// window.addEventListener('resize',ResposinveRender);
