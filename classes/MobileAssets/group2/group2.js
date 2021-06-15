//Final Project #1
//Cookie Clicker Game
//Authors: Vanessa Wu Cen, Lucía Castillo, Analaura Quiros, Luis Tejeira (worked? not really, just came to the meeting)
//November 2020
//Mobile adaptation: Giacomo E. Ambrosino
//-----------------------------------------------------------------------


//VAR DECLARATION
let mainCookie; //main cookie button
var cookieImg; //image for cookie btn
var handler = { //handles specific vars for the cookie
	multiplier: 1,
	cookies: 0,
	cpTime: 1,
	totalCPS: 0,
	activeItems: 0,
};

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
var circleSpeed = 10.8;
var ax;
var r;
var ra;

//Array for coookie text "+1" when clicked
var clickTxts = [];

var menuOffset = 70;
var heightMultiplier = 0.9178;

//-----------------------------------------------------------------------


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
	Muln = loadImage('group2/mulan2.png');
	Donny = loadImage('group2/Don.png');
	Dosy = loadImage('group2/dais.png');
}


function setup() {
	//position main cookie btn
	windowHeight = windowHeight/heightMultiplier-menuOffset;
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight);
	windowResized();

	circleX=windowWidth*2/8;
	ax=windowWidth*2/8 +35;
	r= 1
	ra=2

	//create main cooke using class cookieClickr
	mainCookie = new cookieClickr(windowWidth / 2,
																windowHeight* 1/3,
																windowHeight*4/11,
																cookieImg);

	//Item 1: Mickey Mouse bakes cookies
	cursorBtn = new structureBtn("Mickey Mouse", //name
															 windowWidth * 6 / 8, //x-pos
															 150, //y-pos
															 windowWidth * 2 / 8, //width
															 100, //height
															 50, //price
															 1, //cookiesPerSecond
															 color(204, 0, 0), //color
															 0
															);

	// Item #2: Minnie
	cursorExo = new structureBtn("Minnie",
															 windowWidth * 6 / 8, //x-pos
															 250, //y-pos
															 windowWidth * 2 / 8, //width
															 100, //height
															 250, //price
															 3, //cookiesPerSecond
															 color(255, 255, 0), //color
															 0
															);

	//Item #3: Snow White
	cursorNct = new structureBtn("Snow White",
															 windowWidth * 6 / 8, //x-pos
															 350, //y-pos
															 windowWidth * 2 / 8, //width
															 100, //height
															 600, //price
															 5, //cookiesPerSecond
															 color(126, 204, 5), //color
															 0
															);

	//Item #4: Mulan
	cursorMomi = new structureBtn("Mulan",
																windowWidth * 6 / 8, //x-pos
																450, //y-pos
																windowWidth * 2 / 8, //width
																100, //height
																1300, //price
																8, //cookiesPerSecond
																color(207, 181, 59), //color
															  0
															 );

	//Item #5: Donald Pato
	cursorPotter = new structureBtn("Donald Pato",
																	windowWidth * 6 / 8, //x-pos
																	550, //y-pos
																	windowWidth * 2 / 8, //width
																	100, //height
																	2500, //price
																	10, //cookiesPerSecond
																	color(96, 165, 196), //color
																	0
																 );

	//Item #6: Daisy
	cursorSurprise = new structureBtn("Daisy Duck",
																		windowWidth * 6 / 8, //x-pos
																		650, //y-pos
																		windowWidth * 2 / 8, //width
																		100, //height
																		2501, //price
																		11, //cookiesPerSecond
																		color(245, 158, 176), //color
																		0
																	 );

	//=================================================================

	//Upgrade #1: Magi Micknie Gloves
	Santa = new upgrades("Magi Gloves",
											 windowWidth * 6 / 8, //x-pos
											 0, //y-pos
											 windowWidth * 1 / 15, //width
											 75, //height
											 250, //price
											 color(0, 0, 0) //color
											);

	//Upgrade #2: Lacy Minnie Ribbon
	Sasa = new upgrades("Lace",
											windowWidth * 49 / 60, //x-pos
											0, //y-pos
											windowWidth * 1 / 15, //width
											75, //height
											556, //price
											color(255, 174, 215) //color
										 );

	//Upgrade #3: RottenApple
	a = new upgrades("RottenApple",
									 windowWidth * 53 / 60, //x-pos
									 0, //y-pos
									 windowWidth * 1 / 15, //width
									 75, //height
									 2800, //price
									 color(255, 243, 128) //color
									);

	//Upgrade #4: Mushu Baby
	b = new upgrades("Mushu",
									 windowWidth * 6 / 8, //x-pos
									 75, //y-pos
									 windowWidth * 1 / 15, //width
									 75, //height
									 6666, //price
									 color(160, 82, 48) //color
									);

	//Upgrade #5: Pinguin Tootsie
	c = new upgrades("Tootsie",
									 windowWidth * 49 / 60, //x-pos
									 75, //y-pos
									 windowWidth * 1 / 15, //width
									 75, //height
									 3500, //price
									 color(255, 255, 255) //color
									);

	//Upgrade #6: Daisy fancy purse
	d = new upgrades("Purse",
									 windowWidth * 53 / 60, //x-pos
									 75, //y-pos
									 windowWidth * 1 / 15, //width
									 75, //height
									 4000, //price
									 color(255, 255, 255) //color
									);

	//Special Upgrade #1: BEWARE OF RISK
	VWC = new upgrades("Surprise!! (¬‿¬)",
										 windowWidth * 6 / 8, //x-pos
										 750, //y-pos
										 windowWidth * 1 / 8, //width
										 100, //height
										 565, //price
										 color(253, 220, 0) //color
										);

	//Special Upgrade #2: GAMBLE ALL OR NOTHING
	MT = new upgrades("Surprise (ง'̀-'́)ง",
										windowWidth * 7 / 8, //x-pos
										750, //y-pos
										windowWidth * 1 / 8, //width
										100, //height
										8888, //price
										color(253, 220, 0) //color
									 );

 windowResized();
}


function draw() {

  windowResized();

	bgd(); //set 3-section background

	//Cookie Counter indicator=================================================
	fill(255, 255, 255);
	textSize(65);
	text("Cookies:" + round(handler.cookies), 25, 75); //show amount of cookies

	fill(255, 255, 255);
	textSize(20);
	text("Cookies Per Second: (╯°□°)╯︵ ┻━┻", 30, 120);
	//round(handler.cookies/millis()) Mild attempt at trying to pu CPS

	//Method Playground=======================================================
	mainCookie.Disp(); //Displaying main coookie button

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

	cursorBtn.Animation1();
	cursorExo.Animation2();
	cursorNct.Animation3();
	cursorMomi.Animation4();
	cursorPotter.Animation5();
	cursorSurprise.Animation6();


	//show +1
	for (var i = 0; i < clickTxts.length; i++) {
		clickTxts[i].Disp();
	}

	//flushes the array after 24 elements so RAM doesn't BOOM BOOM BYE
	if (clickTxts.lenght > 24) {
		clickTxts.splice(0, round(clickTxts.length / 2));
	}

	//Display Disney themed images + characters
	image(DisneyLogo, windowWidth * 2 / 8 + 200, 58, 150, 110);
	image(MickeyM, windowWidth * 6 / 8 + 190, 218, 105, 75);
	image(MinnieM, windowWidth * 6 / 8 + 250, 305, 185, 95);
	image(Snowy, windowWidth * 6 / 8 + 269, 400, 180, 90);
	image(Muln, windowWidth * 6 / 8 + 180, 500, 110, 97.2);
	image(Donny, windowWidth * 6 / 8 + 215, 605, 120, 95);
	image(Dosy, windowWidth * 6 / 8 + 285, 700, 190, 100);
	image(Fireworks, windowWidth * 1 / 2 - 25, windowHeight / 2 + 100, 550, 400)
	image(DisCastle, windowWidth * 1 / 2, windowHeight / 2 + 178, 470, 500)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
	mainCookie.Bite(); //button for main cookie
	// mainCookie.d = mainCookie.d + 10;

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
	fill(155, 218, 250);
	rect(0, 0, windowWidth , windowHeight);

	// //middle column
	// stroke(43, 83, 41);
	// strokeWeight(4);
	// fill(100, 170, 200);
	// rect(windowWidth / 4, 0, windowWidth / 2, windowHeight);
	//
	// //right column
	// noStroke();
	// fill(255, 255, 255);
	// rect(windowWidth * 3 / 4, 0, windowWidth / 4, windowHeight);

	//Curvy Tree layout
	// noStroke();
	// fill(69, 35, 16);
	// rect(65, windowHeight * 11 / 12, 85, windowHeight / 12);
	//
	// noStroke();
	// fill(0, 150, 56);
	// triangle(0, windowHeight * 11.5 / 12, windowWidth / 8, windowHeight * 11.5 / 12, windowWidth / 16, windowHeight * 10 / 12);
	//
	// noStroke();
	// fill(0, 150, 56);
	// triangle(20, windowHeight * 10.85 / 12, windowWidth / 8.5, windowHeight * 10.85 / 12, windowWidth / 16.5, windowHeight * 10 / 12);
	//
	// noStroke();
	// fill(0, 150, 56);
	// triangle(32, windowHeight * 10.5 / 12, windowWidth / 9, windowHeight * 10.5 / 12, windowWidth / 16, windowHeight * 9.5 / 12);
}

function mouseReleased() {
  // mainCookie.d = mainCookie.d - 10
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
		rect(this.fieldX, this.fieldY, this.w, this.h);
		this.textShade.setAlpha(this.textShadeAlpha);
		fill(this.textShade);

		//show item name
		noStroke();
		textSize(28);
		text(this.name, this.fieldX + 1 / 9 * this.w - 20, this.fieldY + 35);

		//show item price
		noStroke();
		fill(this.textShade);
		textFont('MingLiU-ExtB'); //text font chosen
		textSize(25);
		text("Price:" + round(this.price), this.fieldX + 1 / 9 * this.w - 20, this.fieldY + 63);

		//show item counter, amount of items bought
		noStroke();
		textFont('MV Boli');
		textSize(38);
		push();
		textAlign(RIGHT); //align text
		text(this.counter, this.fieldX - 16, this.fieldY + 25, 400);
		pop();
	}

	Buy() { //buy items
		if ((mouseX > this.fieldX && mouseX <= this.fieldX + this.w) & (mouseY > this.fieldY && mouseY <= this.fieldY + this.h)) { //if inside the box, then...

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
		if (cursorBtn.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(255, 180, 75);
			rect(windowWidth * 2 / 8 + 1, 100, windowWidth * 4 / 8 - 3, 75);

			for (x = windowWidth * 2 / 8;
				((x + 30 > windowWidth * 6 / 8) || (x - 30 <= windowWidth * 2 / 8 + 1)); x++) {
				x += 2;
				for (y = 100;
					(y + 30 >= 175 || y - 30 <= 100); y++) {
					x += 1;
				}
				ellipse(random(x, windowWidth * 6 / 8 - 1), random(100, 175), 10, 10);
			}
		}
	}

	//cookie coding production
	Animation2() {
		if (cursorExo.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(209, 39, 110);
			rect(windowWidth * 2 / 8, 175, windowWidth * 4 / 8 - 3, 75);

			for (y = 180; y <= 239.9; y += 5) {
				for (x = windowWidth * 2 / 8 + 2; x <= windowWidth * 6 / 8 - 10.2; x += 5) {
					strokeWeight(3);
					fill(random(150), random(200), random(255));
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
			fill(190, 176, 213);
			rect(windowWidth * 2 / 8, 250, windowWidth * 4 / 8 - 3, 75);

			//moves circle across screen
			stroke(0, 0, 0);
			fill(214, 225, 243);
			ellipse(circleX, 250 + 75 / 2, circleWidth, circleHeight);
			circleX = circleX + circleSpeed;

			//when circle gets out of screen, it comes back to the beginning
			if (circleX + circleWidth >= windowWidth * 6 / 8) {
				circleX = windowWidth * 2 / 8 + circleWidth;
			}
		}
	}

	//Car delivering cookies animation
	Animation4() {
		if (cursorMomi.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill( 217,228,198);
			rect(windowWidth * 2 / 8, 325, windowWidth * 4 / 8 - 3, 75);

			fill(156,32,31);
			noStroke();
			rect(ax, 325 + 10, 85, 30);
			rect(ax - 10, 325 + 35, 105, 25)

			fill(0,0,0);
			ellipse(ax + 15, 325 + 35 + 23, 30, 30);
			ellipse(ax + 69, 325 + 35 + 23, 30, 30);

			ax += 10

			if (ax + 100 >= windowWidth * 6 / 8) {
				ax = windowWidth * 2 / 8 + 35;
			}
		}
	}

	//growing circle
	Animation5() {
		if (cursorPotter.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(255,255,88);
			rect(windowWidth * 2 / 8, 400, windowWidth * 4 / 8 - 3, 75);

			stroke(0,0,0);
			fill(150, 118,129);
			ellipse(windowWidth * 4 / 8 , 400 + 75 / 2, r, r);
			r += 0.6;

			if (r >= 75 / 2 + 22) {
				r = 1;
			}
		}
	}

	//growing rects
	Animation6() {
		if (cursorSurprise.counter >= 1) {
			stroke(0, 0, 0);
			strokeWeight(1);
			fill(162, 205, 72);
			rect(windowWidth * 2 / 8, 475, windowWidth * 4 / 8 - 3, 75);

			fill(104, 36, 4);
			rect(windowWidth * 1 / 2, 475 + 75 / 5 / 2, ra, ra);
			ra += 0.6;

			if (ra >= 75 / 2 + 22) {
				ra = 1;
			}

			fill(124, 0, 31);
			rect(windowWidth * 2 / 8 + 56, 475 + 75 / 5 / 2, ra, ra);
			ra += 0.6;

			if (ra >= 75 / 2 + 22) {
				ra = 1;
			}

			fill(99, 49, 147);
			rect(windowWidth * 5 / 8 + 56, 475 + 75 / 5 / 2, ra, ra);
			ra += 0.6;

			if (ra >= 75 / 2 + 22) {
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
