var nextBtn = {x: 0, y: 0};

var group1, group2, group3;
var selector;
var moveTrigger = false;
var arrivato = false;



function setup() {
  createCanvas(windowWidth,windowHeight);
  group1 = new GroupBtn(500,500,120);
  group2 = new GroupBtn(800,500,120);
  group3 = new GroupBtn(1100,500,120);
  group4 = new GroupBtn(1400,500,120);
  selector = new Selector(800,500,120);
}


function draw() {
  background(53, 53, 51);
  selector.GroupChange(nextBtn.x);
  //selector.Disp();
  group1.Disp();
  group2.Disp();
  group3.Disp();
  group4.Disp();
  selector.GroupChange(nextBtn.x);
  selector.Disp();
}

function mouseClicked(){

  print(moveTrigger);
//   print(prevBtn.x + "" + prevBtn.y);

}



// tab2



class GroupBtn{

  // Data--------------------------
  constructor(xPos,yPos,radius){
  this.x = xPos;
  this.y = yPos;
  this.r = radius;
  }

  // Methods-----------------------
  Disp(){

    if ( mouseIsPressed && dist(mouseX,mouseY,this.x,this.y) <= this.r && moveTrigger == false){
      moveTrigger = true;
      nextBtn.x = this.x;
      //this.Swap(prevBtnX);

    }

    noStroke();
    fill(68, 68, 66);
    ellipse(this.x, this.y,2*this.r,2*this.r);
  }





}




// tab3





class Selector {

  // Data--------------------------
  constructor(xPos, yPos, radius) {
    this.x  = xPos;                                   //Coordenada x del selector
    this.lc = xPos;                                   //Coordenada x del círculo izquierda
    this.rc = xPos;                                   //Coordenada x del círculo derecha
    this.y = yPos;                                    //Coordenada y del selector
    this.r = radius;                                  //Valor del radio de ambos círculos
    this.xSpeed = 30;                                //Velocidad del selector
    this.rectW = dist(this.lc, this.y, this.rc, this.y); //ancho del rectángulo
    this.xpand = true;
  }

  GroupChange(nextBtnX) {
    if (moveTrigger) {
      this.Swap(nextBtnX);
    }
  }


  // Methods-----------------------
  Disp() {
    noStroke();
    fill(150, 0, 0);
    ellipse(nextBtn.x, this.y, 2*this.r*1.1, 2*this.r*1.1);
  }

  Roll(circle, dir) {
    if (circle === "left") {
      if (dir == 1) {
        this.lc = this.lc + this.xSpeed;
      } else {
        this.lc = this.lc - this.xSpeed;
      }
    } else if ( circle === "right") {
      if (dir == 1) {
        this.rc = this.rc + this.xSpeed;
      } else {
        this.rc = this.rc - this.xSpeed;
      }
    }
  }

  Swap(nextBtnX) {
    this.rectW = dist(this.lc, this.y, this.rc, this.y);

    if (nextBtnX <= this.lc) {
      // print("lc se mueve primero");
      if (this.lc == nextBtnX) {
        // print("llegue");
        if (this.rc == nextBtnX) {
          // print("done");
          moveTrigger = false;
          this.x = nextBtnX;
        } else {
          this.Roll("right", -1);
        }
      } else {
        this.Roll("left", -1);
      }
    } else if (nextBtnX >= this.rc) {

      // print("rc se mueve primero");
      if (this.rc == nextBtnX) {
        // print("llegue");
        if (this.lc == nextBtnX) {
          // print("done");
          moveTrigger = false;
          this.x = nextBtnX;
        } else {
          this.Roll("left", 1);
        }
      } else {
        this.Roll("right", 1);
      }
    }


    //    //Escenario 2 (arrivato)

    //    if (arrivato) {
    //      print("abre que ya llegue!");

    //      if (nextBtn.x <= this.rc) {
    //        print("moviendo circulo derecha");
    //        this.rc = this.rc - this.xSpeed;

    //        if (this.rc == nextBtn.x) {

    //          arrivato = false;    //desactivo bandera de llegada
    //          moveTrigger = false; //desactivo bandera de movida
    //          this.x = nextBtn.x;
    //        }
    //      }
    //    }




    //if (this.xpand){
    //  if( nextBtnX < this.x ){

    //    this.lc = this.lc - this.xSpeed;

    //  }  else if (nextBtnX == this.x){

    //      this.x = nextBtnX;
    //      this.lc = this.x;
    //      this.rc = this.x;
    //      moveTrigger=false;
    //      //nextBtn.x = this.x;

    //  } else if(this.rectW == dist(nextBtn.x,this.y,this.x,this.y)){
    //    this.xpand = false;
    //  } else {

    //    this.rc = this.rc + this.xSpeed;
    //  }

    //} else {

    //  if( nextBtnX < this.rc ){

    //    this.rc = this.rc - this.xSpeed;

    //  }  else if (nextBtnX == this.lc ||
    //              nextBtnX == this.rc ){

    //      this.xpand = true;
    //      this.x = nextBtnX;
    //      this.lc = this.x;
    //      this.rc = this.x;
    //      moveTrigger=false;
    //      nextBtn.x = this.x;

    //  } else {

    //    this.lc = this.lc + this.xSpeed;
    //  }

    //}


    //if( nextBtnX < this.x ){

    //  this.lc = this.lc - this.xSpeed;

    //} else if (nextBtnX == this.x  ||
    //           nextBtnX == this.lc ||
    //           nextBtnX == this.rc){

    //    this.x = nextBtnX;
    //    this.lc = this.x;
    //    this.rc = this.x;
    //    moveTrigger=false;
    //    nextBtn.x = this.x;

    //} else {

    //  this.rc = this.rc + this.xSpeed;
    //}


    this.rectW = dist(this.lc, this.y, this.rc, this.y);
    fill(150, 0, 0);
    ellipse(this.lc, this.y, 2*this.r*1.1, 2*this.r*1.1);              //círculo izquierda
    rect(this.lc, this.y - 1.1*this.r, abs(this.rectW), 2*1.1*this.r); //rectángulo
    ellipse(this.rc, this.y, 2*this.r*1.1, 2*this.r*1.1);              //círculo derecha
  }
}
