//Final Project
//by Rebeca Pravia , Ana Moreno , Maria Goodrich , Gilberto Samaniego, Krish Ahir
//this project is based in a band named Cage the Elephant one of my favorites (Rebeca Pravia) that'swhy i chose it :)))

// variable declarations --------------------------

var container; // alternative canvas
var mainCTE; // main cookie or brownie clicker
var mouseBtn; // cursor item button
var CTEImg; // cookie image holder
var clickTxts = []; // text array
var allCPS = []; // counter array
var CTEArray = [];
var imdying, ilovefrank, popoffqueen, bocastown,youneverknow ;
var imdyngBtn , ilovefrankBtn , popoffqueenBtn , bocastownBtn , youneverknowBtn;
var LogoImg;
var PicImg;



// cross elements gui object handler --------------

var handler = {
	multiplier: 1,       // global muultiplier
	CTE: 0,         //cookie counter
	cpTime: 1,            //cookies per second
	txtTime: 2000,        //the text animation time
	totalCPS: 0,          //the total cookies per second counter
	activeItems: 0       //the total active items in the game
};


//  image png loader ------------------------
function preload() {
	CTEImg = loadImage('group5/band.png');
	LogoImg = loadImage('group5/logooo.png');
	PicImg = loadImage(' group5/pic.png')
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	mainCTE = new CookieClickr(1 / 8.5 * windowWidth, 1 / 2 * windowHeight, 300, CTEImg);


	//items ==================================================================================
	imdying = new itemBtn(
		                      windowWidth * 6/8,             //xPos
	 												280,												   //yPos
													windowWidth * 2/8,				     //width
													60,													   //height
											    "Social Cues",		   //title
											 		15,													   //price
													0.5,												   //cps
													color(145, 187, 198, 200));	   //shade

	ilovefrank = new itemBtn(
		                      windowWidth * 6/8,             //xPos
	 												340,												   //yPos
													windowWidth * 2/8,				     //width
													60,                            //height
											    "Unpeeled",   //title
											 		65,													   //price
													10,												     //cps
													color(224, 190, 247, 225));	   //shade

	popoffqueen = new itemBtn(
		                      windowWidth * 6/8,             //xPos
	 												400,												   //yPos
													windowWidth * 2/8,				     //width
													60,													   //height
											    "Tell Me ",       //title
											 		120,													 //price
													50,												   //cps
													color(123, 116, 179, 225));	   //shade


	bocastown = new itemBtn(
		                      windowWidth * 6/8,             //xPos
	 												460,												   //yPos
													windowWidth * 2/8,				     //width
													60,													   //height
											    "Melophobia",          //title
											 		250,												   //price
													200,												   //cps
													color(158, 235, 179, 225));	   //shade


	youneverknow = new itemBtn(
		                      windowWidth * 6/8,             //xPos
	 												520,												   //yPos
													windowWidth * 2/8,				     //width
													60,													   //height
											    "Skin and Bones",                  //title
											 		500,												 //price
													3000,												   //cps
													color(229, 229, 131, 225));	   //color



	//upgrades=================================================================
	imdyingBtn = new Upgrade1  (windowWidth * 6 / 8,                //xPos
											            50,                                  //yPos
                                  windowWidth * 1 / 12,				        //width
											            50,                                 //height
									     			      "Cold ",                    //name
										    	        60,                                 //price
											            color(145, 187, 198, 150));           //shade

ilovefrankBtn = new Upgrade2      (windowWidth * 7.05 / 8,           //xPos
											            50,                                  //yPos
                                  windowWidth * 1 / 12,				        //width
											            50,                                 //height
									     			      "Broken ",                        //name
										    	        150,                                //price
											            color(224, 190, 247, 150));           //shade

popoffqueenBtn = new Upgrade3(windowWidth * 6 / 8,           //xPos
											            110,                                  //yPos
                                  windowWidth * 1 / 12,				        //width
											            50,                                 //height
									     			      "Telescope",                  //name
										    	        400,                               //price
											            color(123, 116, 179, 150));           //shade

bocastownBtn = new Upgrade4   (windowWidth * 6.30 / 8,                //xPos
											            170,                                 //yPos
                                  windowWidth * 2 / 15,				        //width
											            60,                                 //height
									     			      "Spider ",                     //name
										    	        500,                               //price
											            color(158, 235, 179, 150));           //shade

youneverknowBtn = new Upgrade5 (windowWidth * 7.05/ 8,           //xPos
											            110,                                 //yPos
                                  windowWidth * 1 / 12,				        //width
											            50,                                 //height
									     			      "Rubber ",                   //name
										    	        600,                              //price
											            color(229, 229, 131, 150));           //shade




}
//---------------------------------------------------------------------------------------
function draw() {
	background(100);

	//Background colums

	//left column
	stroke(153, 172, 191);
	strokeWeight(2);
	fill(50,61,90);
	rect(0, 0, windowWidth * 2 / 8, windowHeight);

	// middle column
	stroke(153, 172, 191);
	fill(129, 139, 189);
	rect(windowWidth * 2 / 8, 0, windowWidth * 4 / 8, windowHeight);

	// right column
	stroke(153, 172, 191);
	fill(50,61,90);
	rect(windowWidth * 6 / 8, 0, windowWidth * 2 / 8, windowHeight);


		// upgrade text
	stroke(153,172,191);
	fill(225, 225, 225);
	textSize(35);
	text("Upgrades", windowWidth * 6.40 / 8, windowHeight * 1 / 20);


	// item shop text
	stroke(153,172,191);
	fill(225, 225, 225);
	textSize(35);
	text("Items", windowWidth * 6.65 / 8, windowHeight * 7 / 20*1.1);



// cage elephant counter indicator
	fill(255, 255, 255);
	textSize(30);
	text("Cage The Elephant: " + round(handler.CTE), 25, 40);

	// logo image
	imageMode(CENTER);
	image(LogoImg, windowWidth * 1/2, windowWidth * 2.85/8, 500, 300);


	//band image
	imageMode(CENTER);
	image(PicImg , windowWidth *2.5/4, windowWidth* 1/8, 500, 250);


// method playground

	// method playground ---------------------
	mainCTE.Disp();
	for (var i = 0; i < CTEArray.length; i++) {
		CTEArray[i].Disp();
	}
	if (clickTxts.length > 25) {
		clickTxts.splice(0, clickTxts.length / 2); // this flushes array after the specific amount of elements
	}

	// the display of each item --------------

	// first item
	imdying.Disp();
	if (handler.houses < imdying.price) {
		imdying.shade = color(145, 187, 198, 100);

	} else {

		imdying.shade = color(145, 187, 198, 225);
	}

	// second item
	ilovefrank.Disp();

	if (handler.CTE < ilovefrank.price) {
		ilovefrank.shade = color(224, 190, 247, 100);

	} else {

		ilovefrank.shade = color(224, 190, 247, 225);
	}

	// third item
	popoffqueen.Disp();

	if (handler.CTE < popoffqueen.price) {
		popoffqueen.shade = color(123, 116, 179, 100);

	} else {

		popoffqueen.shade = color(123, 116, 179, 225);
	}

	// fourth item
	bocastown.Disp();

	if (handler.CTE < bocastown.price) {
		bocastown.shade = color(158, 235, 179, 100);

	} else {

		bocastown.shade = color(158, 235, 179, 225);
	}

	// fifth item
	youneverknow.Disp();

	if (handler.CTE < youneverknow.price) {
		youneverknow.shade = color(229, 229, 131, 100);

	} else {

		youneverknow.shade = color(229, 229, 131, 225);

	}


// the display of each upgrade

imdyingBtn.Disp();

	if (handler.CTE < imdyingBtn.price) {
		imdyingBtn.shade = color(145, 187, 198, 100);

	} else {

		imdyingBtn.shade = color(145, 187, 198, 225);
	}


ilovefrankBtn.Disp();

	if (handler.CTE < ilovefrankBtn.price) {
		ilovefrankBtn.shade = color(224, 190, 247, 100);

	} else {

		ilovefrankBtn.shade = color(224, 190, 247, 225);
	}

popoffqueenBtn.Disp();

	if (handler.CTE < popoffqueenBtn.price) {
		popoffqueenBtn.shade = color(123, 116, 179, 100);

	} else {

		popoffqueenBtn.shade = color(123, 116, 179, 225);
	}


bocastownBtn.Disp();

	if (handler.CTE < bocastownBtn.price) {
		bocastownBtn.shade = color(158, 235, 179, 100);

	} else {

		bocastownBtn.shade = color(158, 235, 179, 225);
	}

youneverknowBtn.Disp();

	if (handler.CTE < youneverknowBtn.price) {
		youneverknow.shade = color(229, 229, 131, 100);

	} else {

		youneverknowBtn.shade = color(229, 229, 131, 225);

	}


}

function mouseClicked() {

	mainCTE.Bite();

	imdying.Buy();
	ilovefrank.Buy();
	popoffqueen.Buy();
	bocastown.Buy();
	youneverknow.Buy();

  imdyingBtn.UpgradeBuy();
	ilovefrankBtn.UpgradeBuy();
	popoffqueenBtn.UpgradeBuy();
	bocastownBtn.UpgradeBuy();
	youneverknowBtn.UpgradeBuy();


}


class CookieClickr {
	//date
	constructor(xPos, yPos, diameter, img) {
		this.x = xPos;
		this.y = yPos;
		this.d = diameter;
		this.CTE = 1; // how many cookie go to the counter
		this.img = img;

	}
	//methods
	Disp() {
		noStroke();
		image(this.img, this.x, this.y, this.d, this.d);

	}

	Bite() {
		if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
			handler.CTE += this.CTE * handler.multiplier;
			CTEArray.push(new txts(mouseX, mouseY - 5, this.CTE*handler.multiplier, millis(), handler.txtTime));
		}
	}
}

class txts {

	//------data------
	constructor(xPos, yPos, dispTxt, initTimer, endTimer) {
		this.x = xPos;
		this.y = yPos;
		this.txt = dispTxt;
		this.iniTime = initTimer;
		this.endTime = endTimer;
		this.alpha = 225;


	}

	//------methods------
	Disp() {
		if (millis() - this.iniTime < this.endTime) {
			// print("ticking");
			this.alpha -= 5;
			fill(225, 225, 225, this.alpha);
			textSize(35);
			this.y = this.y - 2;
			text("+" + this.txt, this.x, this.y);

		}
	}
}
class itemBtn {

	//------data------
	constructor(xPos, yPos, w, h, name, price, cps, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.cps = cps;
		this.shade = shade;
		this.counter = 0;
		this.textShade = color(0,0,0);
		this.produce = false; // production flag
		this.t = 0;
		this.pTime = handler.cpTime;

	}

	//------methods------
	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(20);
		text(this.name, this.x + 1 / 6 * this.w, this.y + 20);

		textSize(10);
		text("Price: " + this.price, this.x + 1 / 6 * this.w, this.y + 35);

		textSize(30);

		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 5, this.y + 35);
		pop();

		if (this.counter > 0) {
			this.Production(millis())
		}
	}

	Production(tic) {

		this.t = (tic % 1050) / 1000; // this changes the time to seconds


		if (this.t >= this.pTime) { // this checks for 1 second window
			if (this.produce) { // this checks for production flag
				handler.CTE += this.cps * this.counter;
				this.produce = false; // reset the production flag back to normal
			}

		} else { // prepare for production
			this.produce = true;
		}
	}

	Buy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) { // the conditional that states if there is enough money to buy
				handler.CTE -= this.price;
				this.counter++;

				this.price += 0.15 * this.price;
			}
		}
	}
}

class Upgrade1 {

	// data - - - - - - - - - - - - -
	constructor(xPos, yPos, w, h, name, price, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.alpha = 0;
		this.shadeAlpha = 0;
		this.textShadeAlpha = 0;
		this.shade = shade;
		this.textShade = color(0);
		this.counter = 0;

	}

	// methods - - - - - - - - - - -

	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(15);
		text(this.name, this.x + 1 / 10 * this.w, this.y + 25);

		textSize(15);
		text("Price: " + (this.price), this.x + 1 / 10 * this.w, this.y + 40);

		textSize(20);
		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 5, this.y + 35);
		pop();
	}

	UpgradeBuy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) {
				handler.CTE -= this.price;
				imdying.cps = imdying.cps * 2;
				this.price += 2 * this.price;
				this.counter += 1
			}
		}
	}
}

class Upgrade2 {

	// data=================================================
	constructor(xPos, yPos, w, h, name, price, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.alpha = 0;
		this.shadeAlpha = 0;
		this.textShadeAlpha = 0;
		this.shade = shade;
		this.textShade = color(0);
		this.counter = 0;

	}

	// methods============================================

	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(15);
		text(this.name, this.x + 1 / 10 * this.w, this.y + 20);

		textSize(15);
		text("Price: " + (this.price), this.x + 1 / 10 * this.w, this.y + 40);

		textSize(20);
		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 25, this.y + 30);
		pop();
	}

	UpgradeBuy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) {
				handler.CTE -= this.price;
				ilovefrank.cps = ilovefrank.cps * 3;
				this.price += 3 * this.price;
				this.counter += 1
			}
		}
	}
}

class Upgrade3 {

	// data - - - - - - - - - - - - -
	constructor(xPos, yPos, w, h, name, price, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.alpha = 0;
		this.shadeAlpha = 0;
		this.textShadeAlpha = 0;
		this.shade = shade;
		this.textShade = color(0);
		this.counter = 0;

	}

	// methods - - - - - - - - - - -

	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(15);
		text(this.name, this.x + 1 / 10 * this.w, this.y + 25);

		textSize(15);
		text("Price: " + (this.price), this.x + 1 / 10 * this.w, this.y + 40);

		textSize(20);
		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 5, this.y + 35);
		pop();
	}

	UpgradeBuy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) {
				handler.CTE -= this.price;
				popoffqueen.cps = popoffqueen.cps * 5;
				this.price += 4 * this.price;
				this.counter += 1
			}
		}
	}
}

class Upgrade4 {

	// data =========================================
	constructor(xPos, yPos, w, h, name, price, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.alpha = 0;
		this.shadeAlpha = 0;
		this.textShadeAlpha = 0;
		this.shade = shade;
		this.textShade = color(0);
		this.counter = 0;

	}

	// methods ==================================

	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(15);
		text(this.name, this.x + 1 / 10 * this.w, this.y + 25);

		textSize(15);
		text("Price: " + (this.price), this.x + 1 / 10 * this.w, this.y + 45);

		textSize(20);
		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 5, this.y + 20);
		pop();
	}

	UpgradeBuy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) {
				handler.CTE-= this.price;
				bocastown.cps = bocastown.cps * 4;
				this.price += 2 * this.price;
				this.counter += 1
			}
		}
	}
}


class Upgrade5 {

	// data =============================================
	constructor(xPos, yPos, w, h, name, price, shade) {
		this.x = xPos;
		this.y = yPos;
		this.w = w;
		this.h = h;
		this.name = name;
		this.price = price;
		this.alpha = 0;
		this.shadeAlpha = 0;
		this.textShadeAlpha = 0;
		this.shade = shade;
		this.textShade = color(0);
		this.counter = 0;

	}

	// methods ====================================

	Disp() {
		noStroke();

		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);

		fill(this.textShade);
		textSize(15);
		text(this.name, this.x + 1 / 5 * this.w, this.y + 25);

		textSize(15);
		text("Price: " + (this.price), this.x + 1 / 5 * this.w, this.y + 40);

		textSize(20);
		push();
		textAlign(RIGHT);
		text(this.counter, this.x + this.w - 25, this.y + 25);
		pop();
	}

	UpgradeBuy() {
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {

			if (handler.CTE >= this.price) {
				handler.CTE -= this.price;
				youneverknow.cps = youneverknow.cps * 5;
				this.price += 4 * this.price;
				this.counter += 1
			}
		}
	}
}
