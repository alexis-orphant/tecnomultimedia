class Boton {
  constructor(x, y, texto) {
    this.posX = x;
    this.posY = y;
    this.w = 80;
    this.h= 30;
    this.texto = texto;
  }

  dibujar() {
    rectMode(CENTER);
    fill(198, 122, 64);
    stroke(0);
    rect(this.posX, this.posY, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();
    text(this.texto, this.posX, this.posY);
  }

  click(btn) {
    if (dist(this.posX, this.posY, mouseX, mouseY) < 25 ) {
      return true;
    }
  }
}
