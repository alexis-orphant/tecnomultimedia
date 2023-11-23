class Enemigo {
  constructor(posX, posY, puntaje) {
    this.posX = posX;
    this.posY = posY;
    this.estaVivo = true;
    this.puntos = puntaje;
    this.xDir = 1;
    this.borde = false;
    this.movAbajo = 15;
    this.imagen = imgPng[1];
  }

  dibujar() {
    if (this.estaVivo) {
      imageMode(CENTER)
        image(this.imagen, this.posX, this.posY, 50, 50)
    }
  }

  movimiento() {
    this.posX = this.posX + this.xDir;
  }

  movimientoAbajo() {
    this.xDir = -this.xDir;
    this.posY = this.posY + this.movAbajo;
  }

  haTocadoLaBala(bala, puntos) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 30) {
      this.estaVivo = false;
      bala.disparada = false;
    }
  }

  posYPerder(enemigos) {
    for (let i = 0; i < enemigos.length; i++) {
      return enemigos[i].posY;
    }
  }
}
