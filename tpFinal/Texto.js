class Texto {
  constructor(posY, linea1, linea2, linea3) {
    this.posX = 300;
    this.posY = posY;
    this.linea1 = linea1;
  this.linea2 = linea2; 
  this.linea3 = linea3;
  }
  

  dibujar() {
    rectMode(CENTER);
    noStroke();
    fill(63, 116, 7, 180);
    rect(300, this.posY, 450, 70);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20)
    text(this.linea1 , this.posX, this.posY-20)
    text(this.linea2 , this.posX, this.posY)
    text(this.linea3, this.posX, this.posY+20)
  }
}
