class Boton {
  constructor(x, y, img) {
    this.posX = x;
    this.posY = y;
    this.w = 120;
    this.h= 60;
    
    this.img = img;
  }

  dibujar() {
    /*rectMode(CENTER);
    fill(198, 122, 64);
    stroke(0);
    rect(this.posX, this.posY, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    noStroke();
    text(this.texto, this.posX, this.posY);*/
    imageMode(CENTER, CENTER);
    image(this.img, this.posX, this.posY, this.w, this.h);
  }

  click(btn) {
    if (dist(this.posX, this.posY, mouseX, mouseY) < 40 ) {
      return true;
    }
  }
}
