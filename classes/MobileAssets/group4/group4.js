//Developtment Project
//Clicker Tycoon
//Group Members: William Ng, Abigail Simmons, Michelle Marie.

//StrawBerry Cake Var Declaration
var StrawBerryCakeImg;
var mainStrawBerryCake;

var menuOffset = 70;
// var heightMultiplier = 0.9178;
var heightMultiplier = 0.935;

var handler = {
	multiplier: 1, // Teacher hope you don't change this! Play the game until you buy everything, Good luck!
	StrawBerryCake: 1000000,
	cpTime: 1,
	totalCPS: 0,
	activeItems: 0,
};

var clickTxts = [];

function preload() {
	StrawBerryCakeImg = loadImage('group4/StrawBerryCake.png');
	BackgroundImg = loadImage('group4/Background.png');

}

function setup() {
	windowHeight = windowHeight/heightMultiplier-menuOffset;
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight); //create canvas
	windowResized();

	mainStrawBerryCake = new StrawBerryCakeClickr(windowWidth/8,windowHeight/2, 0.8375*windowWidth*1/4, StrawBerryCakeImg);

	cursorBtn = new structureBtn("PastryChef",
															 windowWidth * 6 / 8,
															 0,
															 windowWidth * 2 / 8,
															 60,
															 50,
															 1,
															 color(255,105,180)
															 );

	cursorApp = new structureBtn("KitchenHelpers",
															 windowWidth * 6 / 8,
															 115,
															 windowWidth * 2 / 8,
															 60,
															 150,
															 2,
															 color(255,105,180)
															 );

	cursorEpp = new structureBtn("Chocolatiers",
															 windowWidth * 6 / 8,
															 230,
															 windowWidth * 2 / 8,
															 60,
															 700,
															 4,
															 color(255,105,180)
															 );

	cursorIpp = new structureBtn("ProfBaker",
															 windowWidth * 6 / 8,
															 345,
															 windowWidth * 2 / 8,
															 60,
															 2000,
															 10,
															 color(255,105,1800)
															 );

	cursorOpp = new structureBtn("ExecutiveBaker",
															 windowWidth * 6 / 8,
															 460,
															 windowWidth * 2 / 8,
															 60,
															 4000,
															 14,
															 color(255,105,180)
															 );
	cursorBuV = new structureBtn("Buddy Valastro Jr.",
															 windowWidth * 6 / 8,
															 575,
															 windowWidth * 2 / 8,
															 60,
															 50000,
															 50,
															 color(255,105,180)
															 );

// Upgrades

	cursorStr = new upgrades("StrawBerries",
															 windowWidth * 6 / 8,
															 60,
															 windowWidth * 2 / 8,
															 50,
															 2500,
															 4,
															 color(255,105,120)
															 );
	cursorCre = new upgrades("Cream",
															 windowWidth * 6 / 8,
															 175,
															 windowWidth * 2 / 8,
															 50,
															 5000,
															 4,
															 color(255,105,120)
															 );

		cursorCho = new upgrades("Chocolate",
															 windowWidth * 6 / 8,
															 290,
															 windowWidth * 2 / 8,
															 50,
															 7500,
															 4,
															 color(255,105,120)
															 );
		cursorVan = new upgrades("Vanilla",
															 windowWidth * 6 / 8,
															 405,
															 windowWidth * 2 / 8,
															 50,
															 10000,
															 4,
															 color(255,105,120)
															 );

		cursorBut = new upgrades("Butter",
															 windowWidth * 6 / 8,
															 520,
															 windowWidth * 2 / 8,
															 50,
															 12500,
															 4,
															 color(255,105,120)
															 );
		cursorBud = new upgrades("Sugar",
															 windowWidth * 6 / 8,
															 635,
															 windowWidth * 2 / 8,
															 50,
															 100000,
															 4,
															 color(255,105,120)
															 );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

	//background layout
	background(255);
	windowResized();

	//left colum
	stroke(75, 0, 13);
	strokeWeight(2);
	fill(255,182,193); //RGBA
	rect(0, 0, windowWidth, windowHeight);
	//
	// // center colum
	// stroke(230, 0, 24);
	// fill(255);
	// rect(windowWidth * 2 / 8, 0, windowWidth * 4 / 8, windowHeight);
	// 	image(BackgroundImg, windowWidth * 1 / 2, windowHeight / 2 + 1, 700, 550)
	//
	// // Right colum
	// stroke(75, 0, 13);
	// fill(255,182,193);
	// rect(windowWidth * 6 / 8, 0, windowWidth * 2 / 8, windowHeight);

	// Cookie counter indicator
	fill(255, 255, 255);
	textSize(windowWidth/16);
	text("StrawBerryCake: " + round(handler.StrawBerryCake), 1, windowWidth/16);

	mainStrawBerryCake.x = windowWidth/2;
	mainStrawBerryCake.y = windowHeight * 2.5/11 + 15;
	mainStrawBerryCake.d = windowHeight * 4/11;
	mainStrawBerryCake.Disp();

	cursorBtn.fieldX = 0;
	cursorBtn.fieldY = windowHeight * 5/11;
	cursorBtn.h = windowHeight * 1/11 *2/3;
	cursorBtn.w = windowWidth;
	cursorBtn.Disp();

	cursorApp.fieldX = 0;
	cursorApp.fieldY = windowHeight * 6/11;
	cursorApp.h = windowHeight * 1/11*2/3;
	cursorApp.w = windowWidth;
  cursorApp.Disp();

	cursorEpp.fieldX = 0;
	cursorEpp.fieldY = windowHeight * 7/11;
	cursorEpp.h = windowHeight * 1/11*2/3;
	cursorEpp.w = windowWidth;
	cursorEpp.Disp();

	cursorIpp.fieldX = 0;
	cursorIpp.fieldY = windowHeight * 8/11;
	cursorIpp.h = windowHeight * 1/11*2/3;
	cursorIpp.w = windowWidth;
  cursorIpp.Disp();

	cursorOpp.fieldX = 0;
	cursorOpp.fieldY = windowHeight * 9/11;
	cursorOpp.h = windowHeight * 1/11*2/3;
	cursorOpp.w = windowWidth;
  cursorOpp.Disp();

	cursorBuV.fieldX = 0;
	cursorBuV.fieldY = windowHeight * 10/11;
	cursorBuV.h = windowHeight * 1/11*2/3;
	cursorBuV.w = windowWidth;
	cursorBuV.Disp();

	// UPGRADES

	cursorStr.fieldX = 0;
	cursorStr.fieldY = windowHeight * (5/11+1/11*2/3);
	cursorStr.h = windowHeight * 1/11*1/3;
	cursorStr.w = windowWidth;
	cursorStr.Disp();

	cursorCre.fieldX = 0;
	cursorCre.fieldY = windowHeight * (6/11+1/11*2/3);
	cursorCre.h = windowHeight * 1/11*1/3;
	cursorCre.w = windowWidth;
	cursorCre.Disp();

	cursorCho.fieldX = 0;
	cursorCho.fieldY = windowHeight * (7/11+1/11*2/3);
	cursorCho.h = windowHeight * 1/11*1/3;
	cursorCho.w = windowWidth;
	cursorCho.Disp();

	cursorVan.fieldX = 0;
	cursorVan.fieldY = windowHeight * (8/11+1/11*2/3);
	cursorVan.h = windowHeight * 1/11*1/3;
	cursorVan.w = windowWidth;
	cursorVan.Disp();

	cursorBut.fieldX = 0;
	cursorBut.fieldY = windowHeight * (9/11+1/11*2/3);
	cursorBut.h = windowHeight * 1/11*1/3;
	cursorBut.w = windowWidth;
	cursorBut.Disp();

	cursorBud.fieldX = 0;
	cursorBud.fieldY = windowHeight * (10/11+1/11*2/3);
	cursorBud.h = windowHeight * 1/11*1/3;
	cursorBud.w = windowWidth;
	cursorBud.Disp();

	for (var i = 0; i < clickTxts.length; i++) {
		clickTxts[i].Disp();
	}

	if (clickTxts.length > 30) {
		clickTxts.splice(0, round(clickTxts.length/2));
	}
}
function mouseClicked() {
	// print("current cps: " + cursorBtn.cps);

	mainStrawBerryCake.Bite();
	cursorBtn.Buy();
	cursorApp.Buy();
  cursorEpp.Buy();
  cursorIpp.Buy();
	cursorOpp.Buy();
	cursorBuV.Buy();
	//upgrades
	cursorStr.Buy();
	cursorCre.Buy();
	cursorCho.Buy();
	cursorVan.Buy();
	cursorBut.Buy();
	cursorBud.Buy();

}

class StrawBerryCakeClickr {

	//Data
	constructor(xPos, yPos, diameter, img) {
		this.x = xPos;
		this.y = yPos;
		this.d = diameter;
		this.StrawBerryCake = 1;
		this.img = img;
	}

	//Methods
	Disp() {
		noStroke();
		image(this.img, this.x, this.y, this.d, this.d);
	}

	Bite() {
		if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
			handler.StrawBerryCake += this.StrawBerryCake * handler.multiplier;
			clickTxts.push(new txts(mouseX, mouseY - 5, this.StrawBerryCake * handler.multiplier, millis(), 2000));
		}
	}
}

class txts {

	//Data
	constructor(xPos, yPos, dispTxt, initTimer, limitTimer) {
		this.x = xPos;
		this.y = yPos;
		this.txt = dispTxt;
		this.initTime = initTimer;
		this.limitTime = limitTimer;
		this.alpha = 255;
		this.res = 8000/limitTimer;
	}

	//methods
	Disp() {
		if (millis() - this.initTime < this.limitTime) {

			this.alpha -= 5;
			fill (255,255,255,this.alpha);
			textSize(35);

			this.y -= 2;
			text("+" + this.txt, this.x, this.y);
		}
	}

}


class structureBtn {

//Data
constructor(name,xPos, yPos, width, height, price, StrawBerryCakePerSecond, shade){
		this.name = name;
		this.counter = 0;
		this.price = price;
		this.t = 0;
		this.cps = StrawBerryCakePerSecond
		this.fieldX = xPos;
		this.fieldY = yPos;
		this.w = width;
		this.h = height;
		this.shade = shade;
		this.shadeAlpha = 0;
		this.pTime = handler.cpTime;
		this.fieldP = false;
		this.produce = false;
		this.textShade = color(255);
		this.textShadeAlpha = 255;

}

//Methods
	Disp(tic) {
		if (handler.StrawBerryCake < this.price) {
			this.shadeAlpha = 50;
			this.textShadeAlpha = 50

		} else {
			this.textShadeAlpha = 255;
			this.shadeAlpha = 150;
		}
		noStroke();
		this.shade.setAlpha(this.shadeAlpha);
		fill(this.shade);
		rect(this.fieldX, this.fieldY, this.w, this.h);
		this.textShade.setAlpha(this.textShadeAlpha);
		fill(this.textShade);

		textSize(this.h * 2/3 * 0.85);
		text(this.name, this.fieldX + 10, this.fieldY + this.h * 2/3 * 0.85);

		fill(this.textShade);
		textSize(this.h * 1/3 * 0.85);
		textFont('Comic Sans Ms'); //eww
		text("Price:" + round(this.price), this.fieldX + 10, this.fieldY + this.h - 5 );


		textSize(this.h * 0.9);
		push();
		textAlign(RIGHT);
		text(this.counter, this.fieldX, this.fieldY + 10, this.w);
		pop();

		if (this.counter > 0) {
			this.Production(millis());
		}
	}
	Production(tic) {
		this.t = (tic % 1050) / 1000;

		if (this.t >= this.pTime) {
			if (this.produce) {
				handler.StrawBerryCake += this.cps * this.counter;
				this.produce = false;
			}
		} else {
			this.produce = true;
		}
	}

	Buy() {

		if ((mouseX > this.fieldX && mouseX <= this.fieldX + this.w) & (mouseY > this.fieldY && mouseY <= this.fieldY + this.h)) {

			if (handler.StrawBerryCake >= this.price) {
				handler.StrawBerryCake -= this.price
				this.counter++;

				this.price += 0.20 * this.price;

			}
		}
	}
}

class upgrades{

  constructor(name,xPos,yPos,width,height,price,StrawBerryCakePerSecond,shade){

    this.name = name;
    this.counterU = 0;
    this.price = price;
    this.t = 0;
    this.cps = StrawBerryCakePerSecond;
    this.fieldX = xPos;
    this.fieldY = yPos;
    this.w = width;
    this.h = height;
    this.shade = shade;
    this.shadeAlpha = 0;
    this.pTime = handler.cpTime;
    this.produce = false;
    this.textShade = color(0);
    this.textShadeAlpha = 0

  }

Disp() {
  if (handler.StrawBerryCake < this.price) {
    this.shadeAlpha = 50;
    this.textShadeAlpha = 50

  } else {
    this.textShadeAlpha = 255;
    this.shadeAlpha = 150;
  }
  noStroke();
  this.shade.setAlpha(this.shadeAlpha);
  fill(this.shade);
  rect(this.fieldX, this.fieldY, this.w, this.h);
  this.textShade.setAlpha(this.textShadeAlpha);
  fill(this.textShade);

  textSize(this.h * 0.75);
  text(this.name + '(' + round(this.price) + ')', this.fieldX + 10, this.fieldY + this.h * 0.75);

  // fill(this.textShade);
  // textSize(15);
  // textFont('Comic Sans Ms');
  // text("Price:" + round(this.price), this.fieldX + 0.25 / 5 * this.w, this.fieldY + 45);

  textSize(19);
  push();
  textAlign(RIGHT);
  text(this.counterU, this.fieldX, this.fieldY+ this.h/8, this.w - 12);
  pop();

}

  Buy() {
    if ((mouseX > this.fieldX && mouseX <= this.fieldX + this.w) & (mouseY > this.fieldY && mouseY <= this.fieldY + this.h)) {

      if (handler.StrawBerryCake >= this.price) {
        handler.StrawBerryCake -= this.price;
        this.counterU++;

        this.price += 0.45 * this.price;

        if(this.name == "StrawBerries") {
           this.StrawBerries();
        }
        if(this.name == "Cream") {
           this.Cream();
        }
        if(this.name == "Butter"){
           this.Butter();
        }
        if(this.name == "Chocolate") {
           this.Chocolate();
        }
        if(this.name == "Vanilla") {
           this.Vanilla();
        }
        if(this.name == "Sugar") {
           this.Sugar();
        }
      }
    }
  }

  StrawBerries() {
    cursorBtn.cps = cursorBtn.cps * 2;
  }
  Cream() {
    cursorApp.cps = cursorApp.cps * 2;
  }

  Butter() {
    cursorOpp.cps = cursorOpp.cps * 2;
  }

  Chocolate() {
    cursorEpp.cps = cursorEpp.cps * 2;
  }

  Vanilla() {
    cursorIpp.cps = cursorIpp.cps * 2;
  }

  Sugar() {
    cursorBud.cps = cursorBud.cps * 2;
  }
}
