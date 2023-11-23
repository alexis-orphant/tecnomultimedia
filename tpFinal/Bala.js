class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.diametro = 10;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      noStroke()
        fill(103, 25, 25);
      ellipse(this.posX, this.posY, this.diametro, this.diametro);
      this.mover();
      this.controlarPosY()
    }
  }

  mover() {
    this.posY -= 7;
  }

  disparar() {
    this.disparada = true;
  }


  controlarPosY() {

    if (this.posY < 0 && this.disparada) {
      this.disparada = false;
    }
  }
}
