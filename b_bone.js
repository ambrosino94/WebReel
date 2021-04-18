// ╔═══════════════════════════════ ° ═══════════════════════════════╗
// 8 888888888o          .8.           ,o888888o.    8 8888     ,88'
// 8 8888    `88.       .888.         8888     `88.  8 8888    ,88'
// 8 8888     `88      :88888.     ,8 8888       `8. 8 8888   ,88'
// 8 8888     ,88     . `88888.    88 8888           8 8888  ,88'
// 8 8888.   ,88'    .8. `88888.   88 8888           8 8888 ,88'
// 8 8888888888     .8`8. `88888.  88 8888           8 8888 88'
// 8 8888    `88.  .8' `8. `88888. 88 8888           8 888888<
// 8 8888      88 .8'   `8. `88888.`8 8888       .8' 8 8888 `Y8.
// 8 8888    ,88'.888888888. `88888.  8888     ,88'  8 8888   `Y8.
// 8 888888888P .8'       `8. `88888.  `8888888P'    8 8888     `Y8.

// 8 888888888o       ,o888888o.     b.             8 8 8888888888
// 8 8888    `88.  . 8888     `88.   888o.          8 8 8888
// 8 8888     `88 ,8 8888       `8b  Y88888o.       8 8 8888
// 8 8888     ,88 88 8888        `8b .`Y888888o.    8 8 8888
// 8 8888.   ,88' 88 8888         88 8o. `Y888888o. 8 8 888888888888
// 8 8888888888   88 8888         88 8`Y8o. `Y88888o8 8 8888
// 8 8888    `88. 88 8888        ,8P 8   `Y8o. `Y8888 8 8888
// 8 8888      88 `8 8888       ,8P  8      `Y8o. `Y8 8 8888
// 8 8888    ,88'  ` 8888     ,88'   8         `Y8o.` 8 8888
// 8 888888888P       `8888888P'     8            `Yo 8 88 8888888888
// ╚═══════════════════════════════ ° ═══════════════════════════════╝

// P5 Backbone of the web reel.
// Some documentation will be added in the future...prolly, the future as it is,
// it's uncertain.

// _ _          _
// \\/ariable  [|)eclaration
//  ═══════════════════════════════ ° ═══════════════════════════════
var canvas;                  //main canvas
var ctx;                     //context
var description;             //current selected description
var descriptions;            //all descriptions


var nextBtn;
var group1, group2, group3;
var selector;
var moveTrigger = false;
var arrivato = false;
var pagBtnX;
var pagBtnY;
var pagBtnSize;
// _ _ _
// \\/\/orkspace
//  ═══════════════════════════════ ° ═══════════════════════════════
function setup() {

  canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('gameParent');
  // ctx = document.querySelector("#responsive-canvas")
  // console.log(ctx)
  windowResized();

  // ctx.canvas.height = window.innerHeight;
  // ctx.canvas.width = window.innerWidth;
  // console.log(ctx.canvas)
  // var canva = document.getElementById('responsive-canvas');
  // console.log(ctx);
  // createElement('h1','My fav');

  background(12);


  pagBtnY = height/2;
  pagBtnSize = height/32;
  var pagBtnX = width/4 + 2.5 * pagBtnSize;

  group1 = new GroupBtn((500-300), pagBtnY, pagBtnSize);
  group2 = new GroupBtn(800-300, pagBtnY, pagBtnSize);
  group3 = new GroupBtn(1100-300, pagBtnY, pagBtnSize);
  group4 = new GroupBtn(1400-300, pagBtnY, pagBtnSize);

  nextBtn = {x: group1.x, y: 0};
  // console.log(nextBtn.x)
  selector = new Selector(group1.x, pagBtnY, pagBtnSize);

  description = document.getElementById("d1");
  description.style.display = "block";
}

function draw() {


  background(12);
  noStroke();
  fill(255);
  rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);



//               __
// |U|          [|-
// `-'pdating   `-lements
//  ═══════════════════════════════ ° ═══════════════════════════════
  group1.Disp('d1');
  group2.Disp('d2');
  group3.Disp('d3');
  group4.Disp('d4');

  selector.GroupChange(nextBtn.x);
  selector.Disp();



}


//  _              __
// //\lternative  [|-unctions
//  ═══════════════════════════════ ° ═══════════════════════════════
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



//  ═══════════════════════════════ ° ═══════════════════════════════
// Fonts used:
// Header  -> broadway
// Divisor -> Efti Piti

// Fonts credits and references available at README.md
