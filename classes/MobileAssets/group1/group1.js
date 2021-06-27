//DEVELOPMENT PROJECT - FINAL PROJECT
//POPCORN CLICKER - NETFLIX THEME
//Members: Erika Zou & Samuel Pinto
//Group: 10-3A
//November 20, 2020
//Mobile adaptation: Giacomo E. Ambrosino
//===============================================VARIABLES DECLARATION===================================================//
//===============================================VARIABLES DECLARATION===================================================//
var mainPopcorn;           //boton for main popcorn
var popcornImg;            //image of object (popcorn image)
var tvImg;                 //image of object (tv image)
var mainscreenImg;
var gleeImg;
var supergirlImg;
var anneImg;
var moneyImg;
var strangerImg;
var clickTxts = [];
var item1;
var item2;
var item3;
var item4;
var item5;
var upgradeA;
var upgradeB;
var upgradeC;
var upgradeD;
var upgradeE;
var item1Shade;
var item2Shade;
var item3Shade;
var item4Shade;
var item5Shade;
var upgrade1Shade;
var upgrade2Shade;
var upgrade3Shade;
var upgrade4Shade;
var upgrade5Shade;
let d;

var menuOffset = 70;
// var heightMultiplier = 0.9178;
var heightMultiplier = 0.935;

//-----------------------------------------------------------------------------------------------------

// cross elements GUI object handler........................................................
var handler = { multiplier: 1,     //this handles the global multiplier
							  popcorns: 1000000,       //this handles the popcorn counter
							  cpTime: 1,         //this handles the popcorns per second time
							  textTime: 2000,    //this handles the text animation time
							  totalCPS: 0,       //this handles the total popcorns per second counter
							  activeItems: 0     //this handles the total active items in my game
							  };

//=====================================================================================================================

function preload() {
	popcornImg = loadImage('group1/pops.png');     //load popcorn image
	tvImg = loadImage('group1/tv1.png');
	mainscreenImg = loadImage('group1/seo-watch-free-link-preview.jpg');
	gleeImg = loadImage ('group1/glee.png');
	supergirlImg = loadImage ('group1/Supergirl.jpg');
	anneImg = loadImage ('group1/anne.jpg');
	moneyImg = loadImage('group1/money3.jpg');
	strangerImg = loadImage('group1/stranger things.jpg');
	popcorn1Img = loadImage ('https://media0.giphy.com/media/m9ppt2Z9tiaK1crjHw/giphy.gif');
}

//=====================================================================================================================

function setup() {
	// print(windowHeight);
	windowHeight = windowHeight/heightMultiplier-menuOffset;
	// print(windowHeight);
	imageMode (CENTER);                        //changing the origen of the image
	createCanvas(windowWidth, windowHeight);   //create canvas
	windowResized();
	item1Shade = color(15, 192, 252, 130);
	item2Shade = color(123, 29, 175, 130);
	item3Shade = color(255, 47, 185, 130);
	item4Shade = color(212, 255, 71, 130);
	item5Shade = color(27, 54, 73, 130);

	upgrade1Shade = color(15, 192, 252, 80);
	upgrade2Shade = color(123, 29, 175, 80);
	upgrade3Shade = color(255, 47, 185, 80);
	upgrade4Shade = color(212, 255, 71, 80);
	upgrade5Shade = color(27, 54, 73, 80);

  //initializing popcorn clicker...........................................
	d = windowHeight*4/11;
	mainPopcorn = new popcornClickr(windowWidth*1/2+10,        //xPos
																	windowHeight*1/3,            //yPos
																	d,                           //diameter
																	popcorn1Img);                //image

  //initializing item botons-----------------------------------------------------------------------------
	//boton for item 1 (GLEE)..........................................................
	item1 = new itemBtn   (30,           //xPos
												windowHeight*6/11,                         //yPos
												windowWidth-60,            //width
												windowHeight*1/11*2/3,                         //height
												"GLEE",                     //name
												20,                         //price
												1,                          //pps
												item1Shade,                 //shade
	                      22);                        //maxPurchase

	//boton for item 2 (Supergirl)......................................................
	item2 = new itemBtn  (30,            //xPos
												windowHeight*7/11,                        //yPos
												windowWidth-60,            //width
												windowHeight*1/11*2/3,                         //height
												"Supergirl",                //name
												500,                        //price
												6,                          //pps
												item2Shade,                 //shade
		                    20);                        //maxPurchase

	//boton for item 3 (Anne with an E)..................................................
	item3 = new itemBtn  (30,            //xPos
												windowHeight*8/11,                        //yPos
												windowWidth-60,            //width
												windowHeight*1/11*2/3,                         //height
												"Anne with an E",           //name
												800,                        //price
												80,                         //pps
												item3Shade,                 //shade
		                    10);                        //maxPurchase

	//boton for item 4 (Money Heist)......................................................
	item4 = new itemBtn  (30,            //xPos
												windowHeight*9/11,                        //yPos
												windowWidth-60,            //width
												windowHeight*1/11*2/3,                         //height
												"Money Heist",              //name
												10000,                      //price
												250,                        //pps
												item4Shade,                 //shade
		                    10);                        //maxPurchase

  //boton for item 5 (Stranger Things)..................................................
	item5 = new itemBtn  (30,            //xPos
												windowHeight*10/11,                        //yPos
												windowWidth-60,            //width
												windowHeight*1/11*2/3,                         //height
												"Stranger Things",          //name
												100000,                     //price
												1000,                       //pps
												item5Shade,                 //shade
	                      8);                         //maxPurchase

  //initializing upgrade botons-----------------------------------------------------------------------------
	//boton for upgrade A (GLEE)..........................................................
	upgradeA = new upgradeBtn   (30,            //xPos
												       (windowHeight)*(6/11+1/11*2/3),                        //yPos
												       windowWidth-60,            //width
												       windowHeight*1/11*1/3,                         //height
												       "Upgrade",                  //name
												       10,                         //price
												       1,                          //pps
												       upgrade1Shade,              //shade
		                           6);                         //maxPurchase

	//boton for upgrade B (Supergirl)......................................................
	upgradeB = new upgradeBtn   (30,            //xPos
												       (windowHeight)*(7/11+1/11*2/3),                        //yPos
												       windowWidth-60,            //width
												       windowHeight*1/11*1/3,                         //height
												       "Upgrade",                  //name
												       100,                        //price
												       1,                          //pps
												       upgrade2Shade,              //shade
			                         5);                         //maxPurchase

	//boton for upgrade C (Anne with an E)..................................................
	upgradeC = new upgradeBtn   (30,            //xPos
												       (windowHeight)*(8/11+1/11*2/3),                        //yPos
												       windowWidth-60,            //width
												       windowHeight*1/11*1/3,                         //height
												       "Upgrade",                  //name
												       700,                        //price
												       1,                          //pps
												       upgrade3Shade,              //shade
			                         3);                         //maxPurchase

	//boton for upgrade D (Money Heist)......................................................
	upgradeD = new upgradeBtn    (30,            //xPos
												       (windowHeight)*(9/11+1/11*2/3),                        //yPos
												       windowWidth-60,            //width
												       windowHeight*1/11*1/3,                         //height
												       "Upgrade",                  //name
												       1000,                       //price
												       1,                          //pps
												       upgrade4Shade,              //shade
			                         4);                         //maxPurchase

	//boton for upgrade E (Stranger Things)..................................................
	upgradeE = new upgradeBtn   (30,            //xPos
												       (windowHeight)*(10/11+1/11*2/3),                        //yPos
												       windowWidth-60,            //width
												       windowHeight*1/11*1/3,                         //height
												       "Upgrade",                  //name
												       5000,                       //price
												       1,                          //pps
												       upgrade5Shade,              //shade
			                         3);                         //maxPurchase
}

//=====================================================================================================================

function draw() {

  //background layout setup------------------------------------------------------------------------
	background(255);
	windowResized();
	//left column........................................................................
	stroke(20,20,20);
	strokeWeight(2);
	fill(20,20,20,245);
	rect(0,0,windowWidth, windowHeight);

	// 	//central column....................................................................
	// 	stroke(229,9,20);
	// 	fill(229,9,20,245);
	// 	rect(windowWidth*2/8,0,windowWidth*4/8, windowHeight);

	// 	//right column......................................................................
	//   stroke(20,20,20);
	// 	strokeWeight(2);
	// 	fill(20,20,20,245);
	// 	rect(windowWidth*6/8,0,windowWidth, windowHeight);

	//-------------------------------------------- additonal animations / extras ------------------------------------//
	//star animation....................................................................
	push();
   translate(windowWidth/2, windowHeight/3 + 0.044082*windowHeight);  // locate star to the center of left column
	 rotate(millis() * 0.0002 * TWO_PI);                // makes the star rotate
	 noStroke();
	 fill(255, 255, 0, 150);                           //color of the star
	 star(0,0,d*0.55/2,d*0.925/2,5);                              //creates star
	pop();

	//TV image..........................................................................
	// push();
	//  translate(windowWidth/2,windowHeight - 240);              //change origin
	//  image(mainscreenImg, 0, -5, 590, 370);                  //Netflix Image
	// pop();
	// image(tvImg, windowWidth/2,windowHeight - 240, 600, 390);  //TV Image

  //Text..............................................................................
	// push();
	//  translate( windowWidth/2, windowHeight*3/9);
	//  fill(245, 245, 241);
	//  noStroke();
	//  textSize(25);
	//  textAlign(CENTER);
	//  textStyle(BOLDITALIC);
	//  text("Get enough POPCORNS to watch your fav series!", 0 , 0)
	// pop();

	// 	push();
	// 	 translate(windowWidth/2, 80);
	// 	 fill(20,20,20);
	// 	 noStroke();
	// 	 textSize(30);
	// 	 textAlign(CENTER);
	// 	 textStyle(BOLD);
	// 	 text("HOW DARE YOU WATCH YOUR", 0, 0);

	// 	 fill(20,20,20);
	// 	 noStroke();
	// 	 textSize(50);
	// 	 textAlign(CENTER);
	// 	 textStyle(BOLD);
	// 	 text("FAVORITE NETFLIX SERIES", 0, 40);

	// 	 fill(20,20,20);
	// 	 noStroke();
	// 	 textSize(30);
	// 	 textAlign(CENTER);
	// 	 textStyle(BOLD);
	// 	 text("WITHOUT SOME POPCORN?", 0, 70);
	// 	pop();

	fill(245, 245, 241);
	textSize(windowHeight*0.051429032778943972734226505817017);
	text("Series", 30, (windowHeight)*(6/11)-5);

	circleborders(windowHeight);


	//-----------------------------------------popcorn counter indicator------------------------------------------//
	fill (229,9,20);
	stroke(245, 245, 241);
	strokeWeight(5);
	textStyle(BOLD);
	textSize(windowHeight*0.051429032778943972734226505817017);
	text ("POPCORNS: ", 30, windowHeight*0.051429032778943972734226505817017);

	fill (245, 245, 241);
	noStroke();
	textStyle(BOLDITALIC);
	textSize(windowHeight*0.0440820280962376909150512907003);
	text (round(handler.popcorns), 30, windowHeight*0.095511060875181663649277796517318);

	//---------------------------------------------method playground----------------------------------------------//
	//.............................................popcorn boton.............................................//
	mainPopcorn.y = windowHeight*1/3;
	mainPopcorn.x = windowWidth/2 + 10;
	mainPopcorn.Disp();             //Displaying main popcorn boton

	//..............................................item botons.............................................//
	item1.y = windowHeight*6/11;
	item1.w = windowWidth-60;
	item1.h = windowHeight*1/11*2/3;
	item1.Disp();                   //Displaying item 1 boton

	item2.y = windowHeight*7/11;
	item2.w = windowWidth-60;
	item2.h = windowHeight*1/11*2/3;
	item2.Disp();                   //Displaying item 2 boton

	item3.y = windowHeight*8/11;
	item3.w = windowWidth-60;
	item3.h = windowHeight*1/11*2/3;
	item3.Disp();                   //Displaying item 3 boton

	item4.y = windowHeight*9/11;
	item4.w = windowWidth-60;
	item4.h = windowHeight*1/11*2/3;
	item4.Disp();                   //Displaying item 4 boton

	item5.y = windowHeight*10/11;
	item5.w = windowWidth-60;
	item5.h = windowHeight*1/11*2/3;
	item5.Disp();                   //Displaying item 5 boton

	//-----------------------------------------set Alpha for ITEM BOTONS------------------------------------------//

	//....................................set Alpha for item 1 (GLEE) boton..................................//
	if(handler.popcorns < item1.price){         //When there are not enough POPCORNS,
   item1Shade.setAlpha (130);                 //alpha/opacity is set low
		}
	else {                                      //When there are enough POPCORNS,
   item1Shade.setAlpha (250);                 //alpha/opacity is set higher
	}

	//..................................set Alpha for item 2 (Supergirl) boton...............................//
	if(handler.popcorns < item2.price){         //When there are not enough POPCORNS,
   item2Shade.setAlpha (130);                 //alpha/opacity is set low
		}
	else {                                      //When there are enough POPCORNS,
   item2Shade.setAlpha (250);                 //alpha/opacity is set higher
	}

	//................................set Alpha for item 3 (Anne with an E) boton............................//
	if(handler.popcorns < item3.price){         //When there are not enough POPCORNS,
   item3Shade.setAlpha (130);                 //alpha/opacity is set low
		}
	else {                                      //When there are enough POPCORNS,
   item3Shade.setAlpha (250);                 //alpha/opacity is set higher
	}

	//..................................set Alpha for item 4 (Money Heist) boton..............................//
	if(handler.popcorns < item4.price){         //When there are not enough POPCORNS,
   item4Shade.setAlpha (130);                 //alpha/opacity is set low
		}
	else {                                      //When there are enough POPCORNS,
   item4Shade.setAlpha (250);                 //alpha/opacity is set higher
	}

	//.................................set Alpha for item 5 (Stranger Things) boton..........................//
	if(handler.popcorns < item5.price){         //When there are not enough POPCORNS,
   item5Shade.setAlpha (130);                 //alpha/opacity is set low
	  }
	else {                                      //When there are enough POPCORNS,
   item5Shade.setAlpha (250);                 //alpha/opacity is set higher
	}

	//..........................................UPGRADE BOTON...............................................//
	upgradeA.y = (windowHeight)*(6/11+1/11*2/3);
	upgradeA.w = windowWidth-60;
	upgradeA.h = windowHeight*1/11*1/3;
	upgradeA.Disp();                   //Displaying upgrade A boton

	upgradeB.y = (windowHeight)*(7/11+1/11*2/3);
	upgradeB.w = windowWidth-60;
	upgradeB.h = windowHeight*1/11*1/3;
	upgradeB.Disp();                   //Displaying upgrade B boton

	upgradeC.y = (windowHeight)*(8/11+1/11*2/3);
	upgradeC.w = windowWidth-60;
	upgradeC.h = windowHeight*1/11*1/3;
	upgradeC.Disp();                   //Displaying upgrade C boton

	upgradeD.y = (windowHeight)*(9/11+1/11*2/3);
	upgradeD.w = windowWidth-60;
	upgradeD.h = windowHeight*1/11*1/3;
	upgradeD.Disp();                   //Displaying upgrade D boton

	upgradeE.y = (windowHeight)*(10/11+1/11*2/3);
	upgradeE.w = windowWidth-60;
	upgradeE.h = windowHeight*1/11*1/3;
	upgradeE.Disp();                   //Displaying upgrade E boton

	//----------------------------------------set Alpha for UPGRADE BOTONS-----------------------------------------------//

	//........................................ set Alpha for upgrade A ..............................................//
	if(handler.popcorns < upgradeA.price){                          //When there are not enough POPCORNS,
   upgrade1Shade.setAlpha (80);                                   //alpha/opacity is set low.
	  }
	else {
		 if(handler.popcorns > upgradeA.price && item1.counter >= 1)  //When there are enough cookies and a minimum of 1 item is bought,
      upgrade1Shade.setAlpha (200);                               //alpha/opacity is set higher.
	}

	//........................................ set Alpha for upgrade B ..............................................//
	if(handler.popcorns < upgradeB.price){                          //When there are not enough POPCORNS,
   upgrade2Shade.setAlpha (80);                                   //alpha/opacity is set low.
	}
	else {
		 if(handler.popcorns > upgradeB.price && item2.counter >= 1)  //When there are enough cookies and a minimum of 1 item is bought,
      upgrade2Shade.setAlpha (200);                               //alpha/opacity is set higher.
	}

	//........................................ set Alpha for upgrade C ..............................................//
	if(handler.popcorns < upgradeC.price){                          //When there are not enough POPCORNS,
   upgrade3Shade.setAlpha (80);                                   //alpha/opacity is set low.
	}
	else {
		 if(handler.popcorns > upgradeC.price && item3.counter >= 1)  //When there are enough cookies and a minimum of 1 item is bought,
      upgrade3Shade.setAlpha (200);                               //alpha/opacity is set higher.
	}

	//........................................ set Alpha for upgrade D ..............................................//
	if(handler.popcorns < upgradeD.price){                          //When there are not enough POPCORNS,
   upgrade4Shade.setAlpha (80);                                   //alpha/opacity is set low.
	}
	else {
		 if(handler.popcorns > upgradeD.price && item4.counter >= 1)  //When there are enough cookies and a minimum of 1 item is bought,
      upgrade4Shade.setAlpha (200);                               //alpha/opacity is set higher.
	}

	//........................................ set Alpha for upgrade E ..............................................//
	if(handler.popcorns < upgradeE.price){                          //When there are not enough POPCORNS,
   upgrade5Shade.setAlpha (80);                                   //alpha/opacity is set low.
	}
	else {
		 if(handler.popcorns > upgradeE.price && item5.counter >= 1)  //When there are enough cookies and a minimum of 1 item is bought,
      upgrade5Shade.setAlpha (200);                               //alpha/opacity is set higher.
	}

	//------------------------------------------------ SERIES IMAGE ------------------------------------------------------//
		//............................................... GLEE image ....................................................//
	// 	if(item1.counter >= 1){
	// 		push();
	// 	   translate(windowWidth/2,windowHeight - 240);            //change origin
	// 	   image(gleeImg, 0, -5, 580, 360);                        //GLEE Image
	// 	  pop();
	// 	}

	// 	//.............................................. SUPERGIRL image ...............................................//
	// 	if(item2.counter >= 1){
	// 		push();
	// 	   translate(windowWidth/2,windowHeight - 240);            //change origin
	// 	   image(supergirlImg, 0, -5, 580, 360);                   //Supergirl Image
	// 	  pop();
	// 	}

	// 	//............................................ ANNE WITH AN E image ............................................//
	// 	if(item3.counter >= 1){
	// 		push();
	// 	   translate(windowWidth/2,windowHeight - 240);      //change origin
	// 	   image(anneImg, 0, -5, 580, 360);                  //Anne with an E Image
	// 	  pop();
	// 	}

	// 	//.............................................. MONEY HEIST image .............................................//
	// 	if(item4.counter >= 1){
	// 		push();
	// 	   translate(windowWidth/2,windowHeight - 240);       //change origin
	// 	   image(moneyImg, 0, -5, 580, 360);                  //Money Heist Image
	// 	  pop();
	// 	}

	// 	//............................................ STRANGER THINGS image ...........................................//
	// 	if(item5.counter >= 1){
	// 		push();
	// 	   translate(windowWidth/2,windowHeight - 240);          //change origin
	// 	   image(strangerImg, 0, -5, 580, 360);                  //Stranger Things Image
	// 	  pop();
	// 	}

	//others-----------------------------------------------------------------------------------------------------
	for (var i = 0; i < clickTxts.length; i++) {       //iterate over each element inside array
	clickTxts[i].Disp();                               //show click text
  }

  if (clickTxts.length > 15){
		clickTxts.splice(0,15);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//=====================================================================================================================


// function touchStarted(){
// 	// mainPopcorn.d -= 20;
// }

function mouseReleased() {           //When mouse is released...
  // mainPopcorn.d += 20;               //Popcorn Image diameter increase
}

//=====================================================================================================================
function mouseReleased() {            //When mouse is pressed...
	mainPopcorn.Bite();                //...over the item, popcorns are gain
	// mainPopcorn.d -= 20;               //...popcorn size decrease

	//Item Buy---------------------------------------------------------------------------------------------------
	//item 1.................................................................................
	if(item1.counter <= 21){      //When there are less than 21 items,
		item1.Buy();                //item is available for purchase
	}

	//item 2................................................................................
	if(item2.counter <= 19){      //When there are less than 19 items,
		item2.Buy();                //item is available for purchase
	}

	//item 3...............................................................................
	if(item3.counter <= 9){      //When there are less than 9 items
		item3.Buy();                //item is available for purchase
	}

	//item 4...............................................................................
	if(item4.counter <= 9){      //When there are less then 9 items
		item4.Buy();                //item is available for purchase
	}

	//item 5..............................................................................
	if(item5.counter <= 7){      //When there are less than 7 items
		item5.Buy();                //item is available for purchase
	}

//Upgrade Buy-----------------------------------------------------------------------------------------------
	//upgrade A...........................................................................
	if(item1.counter >= 1 && upgradeA.counter <= 5){      //When a minimum of 1 item is bought and there are less than 5 upgrades,
		upgradeA.Buy();                                     //upgrade is available to buy
	 }

	//upgrade B...........................................................................
	if(item2.counter >= 1 && upgradeB.counter <= 4){      //When a minimum of 1 item is bought and there are less than 4 upgrades,
		upgradeB.Buy();                                     //upgrade is available to buy
	 }

	//upgrade C...........................................................................
	if(item3.counter >= 1 && upgradeC.counter <= 2){      //When a minimum of 1 item is bought and there are less than 2 upgrades,
		upgradeC.Buy();                                     //upgrade is available to buy
	 }

	//upgrade D...........................................................................
	if(item4.counter >= 1 && upgradeD.counter <= 3){      //When a minimum of 1 item is bought and there are less than 3 upgrades,
		upgradeD.Buy();                                     //upgrade is available to buy
	 }

	//upgrade E...........................................................................
	if(item5.counter >= 1 && upgradeE.counter <= 2){      //When a minimum of 1 item is bought and there are less than 2 upgrades,
		upgradeE.Buy();                                     //upgrade is available to buy
	 }

}


// Classes======================================================================

class popcornClickr {
	//Data------------------------------------------------------------------------
	constructor(xPos,yPos,diameter,img){
		this.x = xPos;
		this.y = yPos;
		this.d = diameter;
		this.popcorn = 1;	       //amount of popcorn received when I click on it
		this.img = img;
	}

	//Methods---------------------------------------------------------------------
  Disp(){
	  noStroke();
		image(this.img, this.x, this.y, this.d, this.d);
  }

	Bite(){
		if( dist(mouseX, mouseY, this.x, this.y) < (this.d/2)){                                                //if cursor is inside image, then
			 handler.popcorns += this.popcorn*handler.multiplier;                                                //updates counter in handler
			 clickTxts.push (new txts(mouseX, mouseY-5, str(this.popcorn*handler.multiplier),millis(), 2000));   //pushes new text instance
	  }
  }

}

class txts {
	//Data----------------------------------------------------
	constructor(xPos, yPos, dispTxt, initTimer, endTimer) {
		this.x = xPos;
		this.y = yPos;
		this.txt =dispTxt;
		this.iniTime = initTimer;
		this.endTime = endTimer;
		this.alpha = 255;
  }

  // Methods -----------------------------------------------
	Disp() {
		if (millis() - this.iniTime < this.endTime) {
			//print ("ticking");
			this.alpha -= 5;
			fill(229,9,20,this.alpha);
			stroke(200,200,200,this.alpha);
			textSize(50);
			this.y = this.y -2;
			text("+" + this.txt, this.x, this.y);
		}
  }
}

class itemBtn{
 //Data--------------------------------
	constructor(xPos, yPos, width, height, name, price, popcornPerSecond, shade, maxPurchase){
	  this.x = xPos;
		this.y = yPos;
		this.w = width;
		this.h = height;
		this.name = name;
		this.counter = 0;
		this.price = price;
		this.pps = popcornPerSecond;
		this.shade = shade;
		this.textShade = color(210,210,210);
		this.max = maxPurchase;

		//.....................................................
		this.pTime = handler.cpTime;
		this.produce = false;
		this.t = 0;
	}

 //Method------------------------------
  Disp(){
	 noStroke();
	 fill(this.shade);
	 rect(this.x,this.y, this.w, this.h);

	 fill(this.textShade);
	 textStyle(BOLD);
	 textSize(this.h/2*0.9);
	 text(this.name, this.x + 1 / 128 * this.w, this.y + this.h/2*0.9);

	 let p = round(this.price, 2);
	 textSize(this.h/2*0.75);
	 text("Price: " + (p), this.x + 1 / 128 * this.w, this.y + this.h*0.9);
	 push()
	 textAlign(RIGHT);
	 textSize(15);
	 text(">max " + this.max + " episodes" , this.x + this.w - 5, this.y + this.h*9/10);
	 pop()
	 textSize (this.h/2*0.98);
	 push();
	 textAlign(RIGHT);
	 text(this.counter, this.x + this.w - 5, this.y + this.h/2*0.9);
	 pop();

	 if(this.counter > 0) {
			this.Production(millis());
	 }

}

	Production(tic){
		this.t = (tic % 1050) / 1000;                      //this sets my varibale t into seconds

		if(this.t >= this.pTime){                          //I make sure the logic is applied in time windows of 1 second

			if(this.produce){                                //I make sure I only increment my currency when the production flag is up
				handler.popcorns += this.pps * this.counter;
				this.produce = false;
			}

		} else {                                           //Here I prepare my flag before the counter reaches the 1 sec window
			this.produce = true;                             //I prepare my flag for production

		}

}

	Buy(){
		if((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)){
			if(handler.popcorns >= this.price){
				handler.popcorns -= this.price;
			  this.counter++;

				this.price += 0.10 * this.price;
		  }
	  }
	}
}

class upgradeBtn{
 //Data--------------------------------
	constructor(xPos, yPos, width, height, name, price, popcornPerSecond, shade, maxPurchase){
	  this.x = xPos;
		this.y = yPos;
		this.w = width;
		this.h = height;
		this.name = name;
		this.counter = 0;
		this.price = price;
		this.pps = popcornPerSecond;
		this.shade = shade;
		this.textShade = color(120,120,120,255);
		this.max = maxPurchase;

		//.....................................................
		this.pTime = handler.cpTime;
		this.produce = false;
		this.t = 0;
   }

 //Method------------------------------
  Disp(){
	 noStroke();
	 fill(this.shade);
	 rect(this.x,this.y, this.w, this.h);

	 fill(this.textShade);
	 textStyle(BOLDITALIC);
	 textSize(this.h * 0.75);
	 text(this.name + ": " + round(this.price, 2), this.x + 1 / 128 * this.w, this.y + this.h*0.75);

	 // let x = round(this.price, 2);
	 // textStyle(BOLD);
	 // textSize(this.h * 0.75);
	 // text((x), this.x + this.w/2 - 3.8792184724689170285296038413852*this.h, this.y + this.h*0.75);
	 push();
		 textAlign(RIGHT);
		 textSize(this.h * 0.60)
		 text(">max " + this.max + " seasons" , this.x + this.w -35, this.y + this.h*0.75);
	 pop();

	 textSize (this.h * 0.75)
	 push();
		 textAlign(RIGHT);
		 textStyle(BOLD);
		 text(this.counter, this.x + this.w - 5,this.y + this.h * 0.75);
	 pop();

	 if(this.counter > 0) {
			this.Production(millis());
	 }

}

	Production(tic){
		this.t = (tic % 1050) / 1000;                      //this sets my varibale t into seconds

		if(this.t >= this.pTime){                          //I make sure the logic is applied in time windows of 1 second

			if(this.produce){                                //I make sure I only increment my currency when the production flag is up
				handler.popcorns += this.pps * this.counter;
				this.produce = false;
			}

		} else {                                           //Here I prepare my flag before the counter reaches the 1 sec window
			this.produce = true;                             //I prepare my flag for production

		}

}

	Buy(){
		if((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)){
			if(handler.popcorns >= this.price){
				handler.popcorns -= this.price;
			  this.counter++;
				itemBtn.pps = itemBtn.pps*2;
				this.price += 0.50 * this.price;
		  }
	  }
  }

}


//--------------------------------------star animation-----------------------------------------//
function star ( x,  y,  radius1,  radius2,  npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}

//------------------------------------- circle borders----------------------------------------//

function circleborders(h) {
 let decoskip = 15;
 while(decoskip < h){  // circle loop at the left
	 fill(255);
	 noStroke();
	 ellipse(15,decoskip,15,15);
 decoskip = decoskip + 35;
 }

 decoskip = 15;
 while(decoskip < h){	// circle loop at the right
	 fill(255);
	 noStroke();
	 ellipse(windowWidth-15,decoskip,15,15);
 decoskip = decoskip + 35;
 }

}
