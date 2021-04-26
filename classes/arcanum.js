class GroupBtn{

  // Data--------------------------
  constructor(xPos,yPos,radius){
  this.x = xPos;
  this.y = yPos;
  this.r = radius;
  }

  // Methods-----------------------
  Disp(id){

    if ( mouseIsPressed && dist(mouseX,mouseY,this.x,this.y) <= this.r && moveTrigger == false){
      moveTrigger = true;
      nextBtn.x = this.x;

      // Accessing all descriptions through query selection
      descriptions = document.querySelectorAll(".description");

      // Invisibility cape for all descriptions
      for(var i = 0; i < descriptions[0].children.length; i++) {
        descriptions[0].children[i].style.display = "none"
      }

      // Except for the one imported in the argument id
      description = document.getElementById(id);
      description.style.display = "block";

    }

    noStroke();
    fill(68, 68, 66);
    ellipse(this.x, this.y,2*this.r,2*this.r);
  }

  ChangeContent(id){
    if ( mouseIsPressed && dist(mouseX,mouseY,this.x,this.y) <= this.r){
      for(var i = 0; i < descriptions.length; i++) {
        descriptions[i].style('display','none');
      }

      descriptions[id].style('display','block')
      console.log(description[id]);
      console.log('done');
    }
  }



}

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
      console.log(nextBtnX);
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

    this.rectW = dist(this.lc, this.y, this.rc, this.y);
    fill(150, 0, 0);
    ellipse(this.lc, this.y, 2*this.r*1.1, 2*this.r*1.1);              //círculo izquierda
    rect(this.lc, this.y - 1.1*this.r, abs(this.rectW), 2*1.1*this.r); //rectángulo
    ellipse(this.rc, this.y, 2*this.r*1.1, 2*this.r*1.1);              //círculo derecha
  }
}
