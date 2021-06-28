//Final Project #1
//Cookie Clicker Game
//Authors: Vanessa Wu Cen, Lucía Castillo, Analaura Quiros, Luis Tejeira (worked? not really, just came to the meeting)
//November 2020
//Mobile adaptation: Giacomo E. Ambrosino
//-----------------------------------------------------------------------

//VAR DECLARATION
var mainCookie; //main cookie button
var cookieImg; //image for cookie btn
var handler = { //handles specific vars for the cookie
	multiplier: 100000,
	cookies: 0,
	cpTime: 1,
	totalCPS: 0,
	activeItems: 0,
};

var menuOffset = 70;
// var heightMultiplier = 0.9178;
var heightMultiplier = 0.935;

//Items for Sale
var cursorBtn;
var cursorExo;
var cursorMomi;
var cursorCostco;
var cursorPotter;

//Upgrades, making game more fun
var Santa;
var Sasa;
var a;
var b;
var c;
var d;
var VWC;

//vars for animations
var x;
var y;
var circleWidth = 45;
var circleHeight = circleWidth;
var circleX;
var circleX2;
var circleSpeed = 10.8;
var ax;
var r;
var ra;

//Array for coookie text "+1" when clicked
var clickTxts = [];

//-----------------------------------------------------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//preload all images for game
function preload() {
	cookieImg = loadImage('group2/Scookie.png'); //cookie image

	//Decorative Disney items
	DisneyLogo = loadImage('group2/Dos.png');
	DisCastle = loadImage('group2/discasss.png');
	Fireworks = loadImage('group2/fireworks.png');
	MickeyM = loadImage('group2/Mike.png');
	MinnieM = loadImage('group2/Untitled.png');
	Snowy = loadImage('group2/Sonwy.png');
	Muln = loadImage('group2/mulan.png');
	Donny = loadImage('group2/Don.png');
	Dosy = loadImage('group2/dais.png');
}


function setup() {
	//position main cookie btn
	windowHeight = windowHeight/heightMultiplier-menuOffset;
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight);
	windowResized();
	circleX=windowWidth*3/4;
	circleX2=windowWidth*3/4;
	ax=windowWidth*3/4;
	r= 1
	ra=2
	// windowHeight * 0.08
	//create main cooke using class cookieClickr
	mainCookie = new cookieClickr(windowWidth * 0.244,
																windowHeight * 0.28,
																windowHeight * 2/11,
																cookieImg);

	//Item 1: Mickey Mouse bakes cookies
	cursorBtn = new structureBtn("Mickey Mouse", //name
															 0, //x-pos
															 windowHeight*4/11, //y-pos
															 windowWidth, //width
															 windowHeight*1/11, //height
															 50, //price
															 1, //cookiesPerSecond
															 color(204, 0, 0), //color
															 0
															);

	// Item #2: Minnie
	cursorExo = new structureBtn("Minnie",
															 0, //x-pos
															 windowHeight*5/11, //y-pos
															 windowWidth, //width
															 windowHeight*1/11, //height
															 250, //price
															 3, //cookiesPerSecond
															 color(255, 255, 0), //color
															 0
															);

	//Item #3: Snow White
	cursorNct = new structureBtn("Snow White",
															 0, //x-pos
															 windowHeight*6/11, //y-pos
															 windowWidth, //width
															 windowHeight*1/11, //height
															 600, //price
															 5, //cookiesPerSecond
															 color(126, 204, 5), //color
															 0
															);

	//Item #4: Mulan
	cursorMomi = new structureBtn("Mulan",
																0, //x-pos
																windowHeight*7/11, //y-pos
																windowWidth, //width
																windowHeight*1/11, //height
																1300, //price
																8, //cookiesPerSecond
																color(207, 181, 59), //color
															  0
															 );

	//Item #5: Donald Pato
	cursorPotter = new structureBtn("Donald Pato",
																	0, //x-pos
																	windowHeight*8/11, //y-pos
																	windowWidth, //width
																	windowHeight*1/11, //height
																	2500, //price
																	10, //cookiesPerSecond
																	color(96, 165, 196), //color
																	0
																 );

	//Item #6: Daisy
	cursorSurprise = new structureBtn("Daisy Duck",
																		0, //x-pos
																		windowHeight*9/11, //y-pos
																		windowWidth, //width
																		windowHeight*1/11, //height
																		2501, //price
																		11, //cookiesPerSecond
																		color(245, 158, 176), //color
																		0
																	 );

	//=================================================================

	//Upgrade #1: Magi Micknie Gloves
	Santa = new upgrades("Magi Gloves",
											 windowWidth * 1/2, //x-pos
											 windowHeight* 2/11, //y-pos
											 windowWidth * 1 / 6, //width
											 windowHeight*1/11, //height
											 250, //price
											 color(0, 0, 0) //color
											);

	//Upgrade #2: Lacy Minnie Ribbon
	Sasa = new upgrades("Lace",
											windowWidth * 4/6, //x-pos
										  windowHeight* 2/11, //y-pos
										  windowWidth * 1 / 6, //width
										  windowHeight*1/11, //height
											556, //price
											color(255, 174, 215) //color
										 );

	//Upgrade #3: RottenApple
	a = new upgrades("RottenApple",
									 windowWidth * 5/6, //x-pos
									 windowHeight* 2/11, //y-pos
									 windowWidth * 1 / 6, //width
									 windowHeight*1/11, //height
									 2800, //price
									 color(255, 243, 128) //color
									);

	//Upgrade #4: Mushu Baby
	b = new upgrades("Mushu",
									 windowWidth * 3/6, //x-pos
									 windowHeight* 3/11, //y-pos
								   windowWidth * 1 / 6, //width
								   windowHeight*1/11, //height
									 6666, //price
									 color(160, 82, 48) //color
									);

	//Upgrade #5: Pinguin Tootsie
	c = new upgrades("Tootsie",
									 windowWidth * 4/6, //x-pos
									 windowHeight* 3/11, //y-pos
								   windowWidth * 1 / 6, //width
								   windowHeight*1/11, //height
									 3500, //price
									 color(255, 255, 255) //color
									);

	//Upgrade #6: Daisy fancy purse
	d = new upgrades("Purse",
									 windowWidth * 5/6, //x-pos
									 windowHeight* 3/11, //y-pos
								   windowWidth * 1 / 6, //width
								   windowHeight*1/11, //height
									 4000, //price
									 color(255, 255, 255) //color
									);

	//Special Upgrade #1: BEWARE OF RISK
	VWC = new upgrades("Surprise!! (¬‿¬)",
										 0, //x-pos
										 windowHeight*10/11, //y-pos
										 windowWidth/2, //width
										 windowHeight*1/11, //height
										 565, //price
										 color(253, 220, 0) //color
										);

	//Special Upgrade #2: GAMBLE ALL OR NOTHING
	MT = new upgrades("Surprise (ง'̀-'́)ง",
										windowWidth/2, //x-pos
										windowHeight*10/11, //y-pos
										windowWidth/2, //width
										windowHeight*1/11, //height
										8888, //price
										color(253, 220, 0) //color
									 );
}


function draw() {
	windowResized();
	bgd(); //set 3-secgtion background
	// background(255,0,0);

	//Cookie Counter indicator=================================================
	fill(255, 255, 255);
	textSize(windowWidth * 1/16);
	text("Cookies:" + round(handler.cookies), 5, windowWidth * 0.05); //show amount of cookies

	fill(255, 255, 255);
	textSize(windowWidth * 1/14);
	text("CPS: (╯°□°)╯︵ ┻━┻", 5, windowWidth * (1/16 + 0.05) + 15);
	//round(handler.cookies/millis()) Mild attempt at trying to pu CPS

	//Method Playground=======================================================
	mainCookie.Disp(); //Displaying main coookie button

	cursorBtn.Animation1();
	cursorExo.Animation2();
	cursorNct.Animation3();
	cursorMomi.Animation4();
	cursorPotter.Animation5();
	cursorSurprise.Animation6();

	//Displaying objects 1-6
	cursorBtn.Showing();
	cursorExo.Showing();
	cursorNct.Showing();
	cursorMomi.Showing();
	cursorPotter.Showing();
	cursorSurprise.Showing();

	//Displaying upgrades 1-6 + Special upgrades 1-2
	Santa.Showing();
	Sasa.Showing();
	a.Showing();
	b.Showing();
	c.Showing();
	d.Showing();
	VWC.Showing();
	MT.Showing();




	//show +1
	for (var i = 0; i < clickTxts.length; i++) {
		clickTxts[i].Disp();
	}

	//flushes the array after 24 elements so RAM doesn't BOOM BOOM BYE
	if (clickTxts.lenght > 24) {
		clickTxts.splice(0, round(clickTxts.length / 2));
	}

	//Display Disney themed images + characters
	// push();
	// tint(255,40)
	// image(DisneyLogo, windowWidth * 2/8 , 80, 160, 160);
	// pop();
	// image(MickeyM, windowWidth * 6 / 8 + 190, 218, 105, 75);
	// image(MinnieM, windowWidth * 6 / 8 + 250, 305, 185, 95);
	// image(Snowy, windowWidth * 6 / 8 + 269, 400, 180, 90);
	// image(Muln, windowWidth * 6 / 8 + 180, 500, 110, 97.2);
	// image(Donny, windowWidth * 6 / 8 + 215, 605, 120, 95);
	// image(Dosy, windowWidth * 6 / 8 + 285, 700, 190, 100);
	// push();
	// tint(255, 80);
	// image(Fireworks, windowWidth * 1 / 2 - 25, windowHeight / 2 + 100, 550, 400)
	// image(DisCastle, windowWidth * 1 / 2, windowHeight / 2 + 178, 470, 500)
	// image(Fireworks, windowWidth * 30 / 100 + 20, windowHeight * 68/100, windowWidth/2 , windowWidth/2)
	// image(DisCastle, windowWidth/4, windowHeight * 7.5/11 + 0, windowWidth/2, windowHeight * 7/11)
	// pop()
}


function touchEnded(){
	mainCookie.Bite(); //button for main cookie
	mainCookie.d = mainCookie.d + 10

	//Buttons for buying objects 1-6
	cursorBtn.Buy();
	cursorExo.Buy();
	cursorNct.Buy();
	cursorMomi.Buy();
	cursorPotter.Buy();
	cursorSurprise.Buy();

	//Buttons for buying 6 upgrades + 2 special upgrades
	Santa.Buy();
	Sasa.Buy();
	a.Buy();
	b.Buy();
	c.Buy();
	d.Buy();
	VWC.Buy();
	MT.Buy();
}

//function for 3-section background
function bgd() {

	//left column
	noStroke();
	// fill(155, 218, 250);
	fill(100, 170, 200);
	rect(0, 0, windowWidth, windowHeight);

// 	//middle column
// 	stroke(43, 83, 41);
// 	strokeWeight(4);
// 	fill(100, 170, 200);
// 	rect(windowWidth / 4, 0, windowWidth / 2, windowHeight);

// 	//right column
// 	noStroke();
// 	fill(255, 255, 255);
// 	rect(windowWidth * 3 / 4, 0, windowWidth / 4, windowHeight);

// 	//Curvy Tree layout
// 	noStroke();
// 	fill(69, 35, 16);
// 	rect(65, windowHeight * 11 / 12, 85, windowHeight / 12);

// 	noStroke();
// 	fill(0, 150, 56);
// 	triangle(0, windowHeight * 11.5 / 12, windowWidth / 8, windowHeight * 11.5 / 12, windowWidth / 16, windowHeight * 10 / 12);

// 	noStroke();
// 	fill(0, 150, 56);
// 	triangle(20, windowHeight * 10.85 / 12, windowWidth / 8.5, windowHeight * 10.85 / 12, windowWidth / 16.5, windowHeight * 10 / 12);

// 	noStroke();
// 	fill(0, 150, 56);
// 	triangle(32, windowHeight * 10.5 / 12, windowWidth / 9, windowHeight * 10.5 / 12, windowWidth / 16, windowHeight * 9.5 / 12);
}

function touchStarted() {
	mainCookie.d = mainCookie.d - 10
}




class cookieClickr {

	//Data===================================================================================
	constructor(xPos, yPos, diameter,img){
		this.x = xPos;      //x-position
		this.y = yPos;      //y-position
		this.d = diameter;  //cookie width
		this.cookie = 1;    //amount of cookies received per click
		this.img= img;      //object image
	}

	//Methods================================================================================
	Disp() {
		noStroke();
		image(this.img, this.x, this.y, this.d, this.d); //paste loaded image of cookie
	}

	Bite() {
		if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) { //if cursor is inside image, then
			handler.cookies += this.cookie * handler.multiplier; //update counter in handler
			clickTxts.push(new txts(mouseX, mouseY - 5, this.cookie * handler.multiplier, millis(), 2000)) //push new text instance
		}
	}
}



class txts{

	constructor(xPos,yPos,dispTxt,initTimer, limitTimer){
	this.x =	xPos;              //x-position
	this.y = yPos;               //y-position
	this.txt=  dispTxt;          //text to be displayed
	this.iniTime = initTimer;    //current time
	this.limitTime = limitTimer; //limit time of animation
	this.alpha = 255;            //text transparency
	this.res = 8000/limitTimer;
	}

	Disp(){
		if(millis() - this.iniTime < this.limitTime){ //while the object's life < 1sec, then...
		//print("ticking");
		this.alpha -= 5;
		fill (255,255,255, this.alpha)
		noStroke();
		textSize(35);
		this.y -= 2;
		text("+" + this.txt, this.x, this.y);
		}
	}
}


class structureBtn {

	//Data=========================================================================
	constructor(
		name,
		xPos,
		yPos,
		width,
		height,
		price,
		cookiesPerSecond,
		shade,
		counter
	) {

		this.name = name; //item name
		this.counter = counter; //counts amount of bought items
		this.price = price;
		this.t = 0;
		this.cps = cookiesPerSecond;
		this.x = xPos;
		this.y = yPos;
		this.w = width;
		this.h = height;
		this.shade = shade;
		this.shadeAlpha = 0;
		this.pTime = handler.cpTime;
		this.produce = false;
		this.textShade = color(0, 0, 0);
		this.textShadeAlpha = 255;
		this.cookie = 1;
	 	this.alpha = 200;
	}

	//Methods========================================================================

	Showing() {
		if (handler.cookies < this.price) { //you have no chin chin to buy
			this.shadeAlpha = 50; //appear lighter in shade
			this.textShadeAlpha = 50 //text appears lighter

		} else { //when you have enough chin chin
			this.textShadeAlpha = 255; //colors pop up brighter
			this.shadeAlpha = 150; //text becomes darker
		}

		//rect surrounding items (items case)
		stroke(0, 0, 0);
		strokeWeight(1);
		this.shade.setAlpha(this.shadeAlpha);
		fill(this.shade);
		rect(this.x, this.y, this.w, this.h);
		this.textShade.setAlpha(this.textShadeAlpha);
		fill(this.textShade);

		//show item name
		noStroke();
		textSize(28);
		text(this.name, 20, this.y + this.h * 7/16);

		//show item price
		noStroke();
		fill(this.textShade);
		textFont('MingLiU-ExtB'); //text font chosen
		textSize(25);
		text("Price:" + round(this.price), 20, this.y + this.h * 63/80);

		//show item counter, amount of items bought
		noStroke();
		textFont('MV Boli');
		textSize(38);
		push();
		textAlign(RIGHT); //align text
		text(this.counter, 0 , this.y + 25, 400);
		pop();
	}

	Buy() { //buy items
		if ((mouseX > this.x && mouseX <= this.x + this.w) & (mouseY > this.y && mouseY <= this.y + this.h)) { //if inside the box, then...

			if (handler.cookies >= this.price) { //if you have enough chin chin...
				handler.cookies -= this.price; //increment amount of cookies
				this.counter++; //increment amount of items bought

				this.price += 0.25 * this.price; //up the item price to cost more chin chin

				setInterval(this.Production.bind(this), handler.cpTime * 1000);
			}
		}
	}

	Production(tic) {
		handler.cookies += this.cps * this.counter;
	}

	//cookie production bouncing
	Animation1() {
		// if (cursorBtn.counter >= 1) {
		// 	stroke(0, 0, 0);
		// 	strokeWeight(1);
		// 	fill(255, 180, 75, this.alpha);
		// 	rect(this.w/2 , this.y, windowWidth * 4 / 8 - 3, this.h);
		//
		// 	for (x = this.w/2;
		// 		((x + 30 > this.w || (x - 30 <= this.w/2 + 1))); x++) {
		// 		x += 2;
		// 		for (y = this.y;
		// 			(y + 30 >= this.y+this.h || y - 30 <= this.y); y++) {
		// 			y += 1;
		// 		}
		// 		ellipse(random(x, this.w), random(y, this.y+this.h), this.h*0.15, this.h*0.15);
		// 	}
		// }

		if (cursorBtn.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(190, 176, 213,this,alpha);
			rect(windowWidth/2, this.y, this.w/2, this.h);

			//moves circle across screen
			stroke(0, 0, 0);
			fill(214, 225, 243,this.alpha);
			ellipse(circleX2, this.y+this.h-this.h/4, this.h/2, this.h/2);
			circleX2 = circleX2 - circleSpeed;

			//when circle gets out of screen, it comes back to the beginning
			if (circleX2 - this.h/4 <= this.w/2) {
				circleX2 = this.w - this.h/4;
			}
		}
	}

	//cookie coding production
	Animation2() {
		if (cursorExo.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(209, 39, 110,this.alpha);
			rect(this.x+this.w/2, this.y, this.w/2, this.h);

			for (y = this.y; y <= this.y+this.h-10; y += 5) {
				for (x = this.w/2; x <= this.w; x += 5) {
					strokeWeight(1);
					fill(random(150), random(200), random(255), this.alpha);
					rect(x, y, 10, 10);
				}
			}
		}
	}

	//growing circle
	Animation3() {
		if (cursorNct.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(190, 176, 213,this,alpha);
			rect(windowWidth/2, this.y, this.w/2, this.h);

			//moves circle across screen
			stroke(0, 0, 0);
			fill(214, 225, 243,this.alpha);
			ellipse(circleX, this.y+this.h-this.h/4, this.h/2, this.h/2);
			circleX = circleX + circleSpeed;

			//when circle gets out of screen, it comes back to the beginning
			if (circleX + this.h/4 >= this.w) {
				circleX = this.w/2+this.h/4;
			}
		}
	}

	//Car delivering cookies animation
	Animation4() {
		if (cursorMomi.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill( 217,228,198,this.alpha);
			rect(this.w/2, this.y, this.w/2, this.h);

			fill(156,32,31,this.alpha);
			noStroke();
			rect(ax, this.y + this.h*2/5, this.h, this.h/5);
			rect(ax - this.h*0.15, this.y + this.h*3/5, this.h*1.3, this.h/5)

			fill(0,0,0,this.alpha);
			ellipse(ax + 0, this.y + this.h*4/5, this.h*1/5*1.15, this.h*1/5*1.15);
			ellipse(ax + this.h, this.y + this.h*4/5, this.h*1/5*1.15, this.h*1/5*1.15);

			ax += 10

			if (ax + this.h + this.h*1/5*1.15 >= windowWidth) {
				ax = this.w/2+this.h*1/5*1.15;
			}
		}
	}

	//growing circle
	Animation5() {
		if (cursorPotter.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(255,255,88,this.alpha);
			rect(this.w/2, this.y, this.w, this.h);

			stroke(0,0,0);
			fill(150, 118,129);
			ellipse(this.w*3/4, this.y+this.h/2, r, r);
			r += 0.3;

			if (r >= this.h/2) {
				r = 1;
			}
		}
	}

	//growing rects
	Animation6() {
		if (cursorSurprise.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(162, 205, 72,this.alpha);
			rect(this.w/2 + this.w*1/8, this.y, ra, ra);

			fill(104, 36, 4,this.alpha);
			rect(this.w/4 + this.w*2/8, this.y, ra, ra);
			ra += 0.6;

			if (ra >= this.h) {
				ra = 1;
			}

			fill(124, 0, 31,this.alpha);
			rect(this.w/2 + this.w*3/8, this.y, ra, ra);
			ra += 0.6;

			if (ra >= this.h) {
				ra = 1;
			}

			fill(99, 49, 147,this.alpha);
			rect(this.w/4 + this.w*4/8, this.y, ra, ra);
			ra += 0.6;

			if (ra >= this.h) {
				ra = 1;
			}
		}
	}
}


class upgrades {

//Data=========================================================================
	constructor(
		name,
		xPos,
		yPos,
		width,
		height,
		price,
		shade
	) {

		this.name = name;
		this.counterU = 0;
		this.price = price;
		this.t = 0;
		this.fieldX = xPos;
		this.fieldY = yPos;
		this.w = width;
		this.h = height;
		this.shade = shade;

		this.shadeAlpha = 0;
		this.pTime = handler.cpTime;
		this.produce = false;
		this.textShade = color(0, 0, 0);
		this.textShadeAlpha = 255;
		this.cookie = 1;
	}

//Methods========================================================================

	Showing() {

		if (handler.cookies < this.price) { //if got enough chin chin
			this.shadeAlpha = 50; //lighter shade
			this.textShadeAlpha = 50 //lighter text

		} else {
			this.textShadeAlpha = 255; //darker shade
			this.shadeAlpha = 150; //darker text
		}

		//upgrade box
		stroke(0, 0, 0);
		strokeWeight(1);
		this.shade.setAlpha(this.shadeAlpha);
		fill(this.shade);
		rect(this.fieldX, this.fieldY, this.w, this.h);
		this.textShade.setAlpha(this.textShadeAlpha);
		fill(this.textShade);

		if(windowWidth <= 375){
			//show upgrade name
			stroke(0, 0, 0);
			strokeWeight(0.2);
			textSize(12);
			text(this.name, this.fieldX + 1 / 15 * this.w, this.fieldY + 20);

			//show upgrade price
			fill(this.textShade);
			textFont('MingLiU-ExtB');
			textSize(15);
			text("$:" + round(this.price), this.fieldX + 1 / 15 * this.w, this.fieldY + 40);

			//show upgrade counter
			textFont('MV Boli');
			textSize(19);
			push();
			textAlign(RIGHT);
			text(this.counterU, this.fieldX + 14 / 15 * this.w, this.fieldY + 70);
			pop();

		}else{

			//show upgrade name
			stroke(0, 0, 0);
			strokeWeight(0.2);
			textSize(17.3);
			text(this.name, this.fieldX + 1 / 15 * this.w, this.fieldY + 20);

			//show upgrade price
			fill(this.textShade);
			textFont('MingLiU-ExtB');
			textSize(20);
			text("Price:" + round(this.price), this.fieldX + 1 / 15 * this.w, this.fieldY + 40);

			//show upgrade counter
			textFont('MV Boli');
			textSize(19);
			push();
			textAlign(RIGHT);
			text(this.counterU, this.fieldX + 14 / 15 * this.w, this.fieldY + 70);
			pop();

		}
	}


	Buy() { //buying upgrades
		if ((mouseX > this.fieldX && mouseX <= this.fieldX + this.w) & (mouseY > this.fieldY && mouseY <= this.fieldY + this.h)) { //if inside the box, then...

			if (handler.cookies >= this.price) { //if you have enough chin chin then......
				handler.cookies -= this.price;
				this.counterU++;

				this.price += 0.45 * this.price; //price increases

				//Mickey cps+2
				if (this.name == "Magi Gloves") {
					this.ChopChop();
				}

				//randomizes Minnie cps
				if (this.name == "Lace") {
					this.Saco();
				}

				// SnowWhite cps*4
				if (this.name == "RottenApple") {
					this.Ap();
				}

				//randomizes Mulan cps value
				if (this.name == "Mushu") {
					this.Mush();
				}

				//Donald cps * 2
				if (this.name == "Tootsie") {
					this.Don();
				}

				//Daisy cps * 3
				if (this.name == "Purse") {
					this.Dais();
				}

				//big surprise dependent on certain conditions. Extra points if you don't figure out the condition without reading the code below :)
				if (this.name == "Surprise!! (¬‿¬)") {
					this.Multi();
				}

				//gamble (or use your fingers to count) , take it or leave it.
				if (this.name == "Surprise (ง'̀-'́)ง") {
					this.Solo();
				}
			}
		}
	}


	//Increments cps by 2
	ChopChop() {
		cursorBtn.cps += 2;
	}

	//randomizes cps value
	Saco() {
		cursorExo.cps = round(random(0, 16));
	}

	//multiply cps*4
	Ap() {
		cursorNct.cps = cursorNct.cps * 4;
	}

	//randomizes cps value
	Mush() {
		cursorMomi.cps = round(random(0, 66));
	}

	//multiply cps*2
	Don() {
		cursorPotter.counter = cursorPotter.counter * 2;
	}

	// multiply cps * 3
	Dais() {
		cursorSurprise.cps = cursorSurprise.cps * 3;
	}

	//gifts or steals your cookies depending on your luck (or mostly Math skills pfft)
	Multi() {
		if ((handler.cookies % 2) == 0) {
			handler.cookies += 1000;
		} else {
			handler.cookies -= 10000;
		}
	}

	//changes clicking cookie multiplier or steals all your cookies depending on your last grade in that hard Math exam
	Solo() {
		if ((handler.cookies % 2) == 0) {
			handler.multiplier = handler.multiplier * 3;
		} else {
			handler.cookies = 0;
		}
	}
}
