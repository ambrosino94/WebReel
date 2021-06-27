//Development Project By:
// Sarah Pineda, Stephanie Yau, Fanny Hau, Valeria Carreño 10-1

// POTAXIO CON ARRO BLANCO enjoy :)
//https://youtu.be/90jrqfejUF8

// VARIABLE DECLARATIONS ===============================================

var mainCookie;
var clickTxts = []; // text array (array are like lists)

//ITEM VARIABLES =================================================
var chefHarryBtn;
var wisk;
var Bakery;

//IMAGE VARIABLES ===============================================
var cookieImg;
var harryImg;
var wiskImg;
var bakeryImg;
var bakery2Img;

// UPGRADE VARIABLES ===============================================
var ganache;
var cookiedough;
var caramel;
var bonus;

var Curser;

var menuOffset = 70;
// var heightMultiplier = 0.9178;
var heightMultiplier = 0.935;

//cross elements GUI object handler
var handler = { 		//the handler is to cross diferent class codes
	multiplier: 1,		// handles the global multiplier
	cookies: 0, 			// handles the cookie counter
	cpTime: 1000, 		// handles the cookies per time
	textTime: 2000,	 	// handles the text of the time
	totalCPS: 0,			// handles the cookies per second
	activeItems: 0};	// handles all active elements in the code

// INSERTS PNG ========================================================

function preload(){
	cookieImg = loadImage('group3/macaroon.png'); // loads the image of a macarron
	harryImg = loadImage('group3/chefharry.png'); // loads the image of chef Harry
	wiskImg = loadImage('group3/wisk.png'); // loads the image of a wisk
	bakeryImg = loadImage('group3/bakery-shop.png'); // loads the image of a bakery shop
	bakery2Img = loadImage('group3/background.png'); // loads the image of a backery (for the background)

}

// CREATES CANVAS AND COOKIE CLASS ====================================
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	windowHeight = windowHeight/heightMultiplier-menuOffset;
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight);
  windowResized()
	mainCookie = new cookieClicker(windowWidth/2,windowHeight/2,windowWidth/1.5,cookieImg);
	// ^^^ creates a new object of an especific class


	// ITEMS =====================================================================
print(windowHeight*1/11*3/4);
	chefHarryBtn = new itemBtn (0, 															//xpos
																	 windowHeight*8/11,					//ypos
																	 windowWidth,								//width
																	 windowHeight*1/11,												//height
																	 "Chef Harry",							//name
																	 color(187, 133, 136,180),	//color
																	 1,												  //cps
																	 10);												//price

	wisk = new itemBtn (0,                     								 //xpos
															windowHeight*9/11,             //ypos
															windowWidth,             			 //width
															windowHeight*1/11,                            //height
															"Wisk",                        //name
															color(187, 133, 136,180),      //color
															5,                             //cps
															50);                           //price

	Bakery = new itemBtn (0,                  								//xpos
															windowHeight*10/11,           //ypos
															windowWidth,            			//width
															windowHeight*1/11,                           //height
															"Bakery",                     //name
															color(187, 133, 136,180),     //color
															10,                           //cps
															100);                         //price
	// UPGRADES =============================================================

	ganache = new upgrade (windowWidth * 6/8,               //xpos
												 60,                              //ypos
												 windowWidth,               			//width
												 50,                              //height
												 "Ganache",                       //name
												 1000,                            //price
												 color(255, 173, 245,180));       //color

	cookiedough = new upgrade (windowWidth * 6/8,           //xpos
														 0,                           //ypos
														 windowWidth * 1/8,           //width
														 50,                          //height
														 "Cookie Dough",              //name
														 2000,                        //price
														 color(255, 173, 245,180));   //color

	caramel = new upgrade (windowWidth * 7/8,              //xpos
												 0,                              //ypos
												 windowWidth * 1/8,              //width
												 50,                             //height
												 "Caramel",                      //name
												 3000,                           //price
												 color(255, 173, 245,180));      //color

	bonus = new upgrade (windowWidth * 7/8,              //xpos
											 60,                             //ypos
											 windowWidth * 1/8,              //width
											 50,                             //height
											 "Bonus",                        //name
											 3000,                           //price
											 color(255, 173, 245,180));      //color

}


function draw() {

// LEFT COLUMN "BEAU BLUE" STRIPE ==================================
	// background(214, 237, 255, 180);
	windowResized();

	fill(214, 237, 255, 180);
	rect(0,0,windowWidth, windowHeight);

// stroke(214, 237, 255);
// strokeWeight(2);
// fill (214, 237, 255, 180);  //RGBA (Red, Green, Blue, Alpha)
// rect(0, 0, windowWidth * 2 / 8, windowHeight);

// CENTER COLUMN	"MIDDLE BLUE GREEN" STRIPE =============================
//
// stroke(132, 220, 198);
// fill (132, 220, 198, 180); //RGBA (Red, Green, Blue, Alpha)
// rect(windowWidth*2/8, 0, windowWidth * 4 / 8, windowHeight);

// RIGHT COLUMN  "BEAU BLUE" STRIPE ===================================

// stroke(214, 237, 255);
// strokeWeight(2);
// fill (214, 237, 255, 180); //RGBA (Red, Green, Blue, Alpha)
// rect(windowWidth * 6 / 8, 0, windowWidth*2/8,windowHeight);

// TEXT OF THE COOKIE COUNTER============================================
	stroke(40, 143, 118);
	fill(255);
	textSize(35);
	text("Macarons: " + round(handler.cookies), 25, 40);

// PLACING IMAGE ============================================================

	// imageMode(CENTER)
	// image(bakery2Img, windowWidth * 4 / 8, 350, windowWidth * 4 / 8, windowHeight * 1.2);

	imageMode(CENTER)
	image(harryImg, windowWidth / 8, windowHeight / 1.28, 75, 55);

	imageMode(CENTER)
	image(bakeryImg, windowWidth / 8, windowHeight / 1.08, 78, 45);

	imageMode(CENTER)
	image(wiskImg, windowWidth / 8, windowHeight / 1.18, 87, 123);

// METHODS =========================================================

	mainCookie.Disp();



	chefHarryBtn.y = windowHeight*8/11;
	chefHarryBtn.Disp();


	if(handler.cookie > chefHarryBtn.price) {
		chefHarryBtn.color = color(187, 133, 136)
	}
		else {
			chefHarryBtn.color = color(187, 133, 136,50)
	}
	wisk.y = windowHeight*9/11;
	wisk.Disp();

	if(handler.cookie > wisk.price) {
		wisk.color = color (187, 133, 136)
	}
	else{
		wisk.color = color(187, 133, 136,50)
	}


	Bakery.y = windowHeight*10/11;
	Bakery.Disp();
	if(handler.cookie > Bakery.price) {
		Bakery.color = color (187, 133, 136)
	}
	else{
		Bakery.color = color(187, 133, 136,50)
	}

	ganache.Disp();
	cookiedough.Disp();
	caramel.Disp();
	bonus.Disp();


	for(var i = 0; i < clickTxts.length; i = i+1){
		clickTxts[i].Disp();
	}

	if(clickTxts.length > 25){
clickTxts.splice(0,round(clickTxts.length/2));
	}
}
	if(handler.cookies > 28){
}

function mouseClicked(){
	mainCookie.Bite();

	chefHarryBtn.Buy();
	wisk.Buy();
	Bakery.Buy();
	ganache.Buy();
	cookiedough.Buy();
	caramel.Buy();
	bonus.Buy();
}

// =====================================================================

class cookieClicker {
	constructor(xpos, ypos, diameter, img){ 	// the constructor tells the compiler the different values
		this.x 			= xpos; 			// handles the xposition
		this.y 			= ypos;				// handles the yposition
		this.d 			= diameter;		// handles the diameter of our cookie (macaron)
		this.cookie = 1;					// value of cookie
		this.img 		= img;				// image of the cookie (macaron)
	}

	Disp(){
		noStroke();
		// image(image, xpos, ypos, width, height)
		image(this.img,this.x,this.y,this.d,this.d); // values of the image

	}

	Bite(){
		if( dist(mouseX, mouseY, this.x, this.y) < this.d/3.2){
			handler.cookies += this.cookie*handler.multiplier; // updates the cookie counter with handler
			clickTxts.push(new txts(mouseX,mouseY,this.cookie*handler.multiplier,millis(),handler.textTime)); // creates new text
			// clickTxts.push(new txts(mouseX, mouseY - 5, str(this.cookie*handler.multiplier), millis(), 2000));
		}
	}
}


class txts{

	// DATA =======================================================================
	constructor(xpos,ypos,dispTxt,iniTimer,limitTimer){ // values of the class
		this.x 					= xpos; // handles the xposition
		this.y 					= ypos; // handles the yposition
		this.alpha 			= 255; //alpha handles the transparency
		this.txt 				= dispTxt;// displacement of the text
		this.iniTime 		= iniTimer; // start of the timer
		this.limitTime 	= limitTimer;// end of the timer

	}

	// METHODS ====================================================================
	Disp(){
		if(millis() - this.iniTime < this.limitTime){
			this.alpha -= 5;
			fill(255,255,255,this.alpha);
			textSize(35);
			this.y = this.y - 2;
			text("+" + this.txt,this.x,this.y);
		}
	}
}

class itemBtn {

	//DATA===============================================
	constructor (xpos,ypos,w,h,name,color,cookiepersec,price){
	this.x 		 		 = xpos; //handles the x position
	this.y 		 		 = ypos; //handles the y position
	this.w 				 = w;		//handles the width of the item
	this.h 				 = h;		//handles the height of the item
	this.name 		 = name; // handles the "text" or name of the item
	this.color		 = color; // color of the item (background)
	this.cps 			 = cookiepersec; // handles the amount of cookies per second
	this.price 		 = price; // shows or handles the price of the item
	this.textcolor = color; // color of the item (text)
	this.counter 	 = 0;

	}

	//METHODS============================================
	Disp(){
		noStroke();

		fill(this.color); // color of the item
		rect(this.x, this.y, this.w, this.h); // draws the button

		fill(this.textcolor); // sets the color of the text
		fill (255, 255, 255, 180);
		textSize(20); // size of the text
		text(this.name, this.x + 1/3 * this.w, this.y + 20); // write the name

		textSize(10); // price text size
		text("Price:" + round(this.price), this.x + 1/3 * this.w, this.y + 35); //write the price

		textSize(30); // counter text size
		push();
		textAlign(RIGHT); // aligns the text from the origin to the right
		text(this.counter, this.x + this.w - 5, this.y + 35); // write the counter
		pop();
	}

	Production(){
		handler.cookies += this.cps*this.counter
	}

	Buy(){
		if((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) {
																										// ^^^ checks if the item is inside the x or y axis.
			if (handler.cookies >= this.price) { // checks if we have the amount of money to buy the item
					handler.cookies -= this.price;	// shows that everytime we buy the item, the amount of cookies decreases
					this.counter++;										// increases the counter
					this.price += 0.2*this.price;		// increases the price of the item as you buy it

				setInterval(this.Production.bind(this),handler.cpTime);
			}
		}
	}
}

class upgrade {

	//DATA =====================================================

	constructor(xpos, ypos, w, h, name, price, color) {

		this.x = xpos; // controls the xposition
		this.y = ypos; // handles the yposition
		this.w = w; // handles the width
		this.h = h; // handles the height
		this.name = name; // handles the name
		this.color = color; // handles the color of the upgrade (background)
		this.price = price; // handles the price of the upgrade
		this.textcolor = color; // handles the color of the text

	}
	// METHODS =================================================

	Disp() {
		noStroke();

		fill(255, 255, 255, 150); // color of the rect
		rect(this.x, this.y, this.w, this.h); // creation of the rect

		fill(184, 179, 190, 180); // color of the text
		textSize(20); // size of the text
		text(this.name, this.x + 1 / 14 * this.w, this.y + 20); // values of the text

		textSize(15); // size of the price text
		text("Price:" + round(this.price), this.x + 1 / 6 * this.w, this.y + 30, +35); // values of the price text

	}


	Buy() {
		// GANACHE
		if ((mouseX > ganache.x && mouseX <= ganache.x + this.w) & (mouseY > ganache.y && mouseY <= ganache.y + ganache.h)) {
			// ^^^ checks if the upgrade is in the x and y axis
			if (handler.cookies >= this.price) { // checks if we have the amount of money to buy the item
				handler.cookies -= this.price; // shows that everytime we buy the item, the amount of cookies decreases
				ganache.price += 0.30 * this.price // increases the price of the item as you buy it
				chefHarryBtn.price -= 0.15 * this.price;
			}
		}

		// COOKIE DOUGH
		if ((mouseX > cookiedough.x && mouseX <= cookiedough.x + this.w) & (mouseY > cookiedough.y && mouseY <= cookiedough.y + cookiedough.x)) {
			// ^^^ checks if the upgrade is in the x and y axis
			if (handler.cookies >= this.price) { // checks if we have the amount of money to buy the item
				handler.cookies -= this.price; // shows that everytime we buy the item, the amount of cookies decreases
				cookiedough.price += 0.30 * this.price // increases the price of the item as you buy it
				wisk.price -= 0.15 * this.price; // increases the price of the item as you buy it
			}
		}

		// CARAMEL
		if ((mouseX > caramel.x && mouseX <= caramel.x + this.w) & (mouseY > caramel.y && mouseY <= caramel.y + caramel.h)) {
			// ^^^ checks if the upgrade is in the x and y axis
			if (handler.cookies >= this.price) { // checks if we have the amount of money to buy the item
				handler.cookies -= this.price; // shows that everytime we buy the item, the amount of cookies decreases
				caramel.price += 0.30 * this.price // increases the price of the item as you buy it
				Bakery.price -= 0.15 * this.price; // increases the price of the item as you buy it
			}
		}

		// BONUS
		if ((mouseX > bonus.x && mouseX <= bonus.x + this.w) & (mouseY > bonus.y && mouseY <= bonus.y + bonus.h)) {
			// ^^^ checks if the upgrade is in the x and y axis
			if (handler.cookies >= this.price) { // checks if we have the amount of money to buy the item
				handler.cookies -= this.price; // shows that everytime we buy the item, the amount of cookies decreases
				bonus.price -= this.price; // show that everytime we buy the upgrade the price increases
				chefHarryBtn.price -= 0.15 * this.price; // increases the price of the item as you buy it
				wisk.price -= 0.15 * this.price; // increases the price of the item as you buy it
				Bakery.price -= 0.15 * this.price; // increases the price of the item as you buy it
			}
		}
	}
}

class curser {
	constructor(xpos,ypos,iniTimer,limitTimer){
		this.x = xpos;
		this.y = ypos;
		this.iniTime = iniTimer;
		this.limitTime = limitTimer;
	}

	Item(){
			handler.cookies -= 10;
			if((millis() - this.iniTime)>this.limitTime){
			cookieClicker.cookie++;
			}
		}
}
