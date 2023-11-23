class Juego {
  constructor(pSiguienteGanar, pSiguientePerder) {
    this.personaje = new Personaje();
    this.crearEnemigo();
    this.crearCobertura();
    this.imgFondo = imagenesJuego[0];
    this.finalizo = false;
    this.pSiguienteGanar = pSiguienteGanar;
    this.pSiguientePerder = pSiguientePerder;
  }

  dibujar() {
    this.fondo();
    this.personaje.dibujar();
    this.dibujarEnemigo();
    this.dibujarCobertura();
    this.controlarDisparoCobertura();
    this.controlarDisparo();
    this.puntaje();
    this.controlarGanaroPerder();
  }

  fondo() {
    imageMode(CENTER);
    image(this.imgFondo, width/2, height/2, 700, 500)
  }

  crearEnemigo() {
    this.enemigos = [];
    this.offset = 0;
    for (let i = 0; i <6; i++) {
      this.enemigos[i] = new Enemigo(i * 80 + 80, 60, 5)
    }
    for (let j = 6; j < 12; j++) {
      this.enemigos[j] = new Enemigo(this.offset * 80 + 80, 55 + 60, 5)
        this.offset++;
    }
  }

  dibujarEnemigo() {
    this.enemigo = new Enemigo()

      for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
      this.enemigos[i].movimiento();
      if ( this.enemigos[i].posX +25 > width || this.enemigos[i].posX -25 < 0) {
        this.enemigo.borde =true;
      }
    }

    this.bordePantalla();
  }

  crearCobertura() {
    this.Coberturas = [];
    for (let i = 0; i <3; i++) {
      this.Coberturas[i] = new Cobertura(200 * i +100, 300)
    }
  }

  dibujarCobertura() {
    this.Cobertura = new Enemigo()

      for (let i = 0; i < this.Coberturas.length; i++) {
      this.Coberturas[i].dibujar();
    }
  }

  bordePantalla() {
    if (this.enemigo.borde) {
      for (let j = 0; j < this.enemigos.length; j++) {
        this.enemigos[j].movimientoAbajo();
      }
    }
  }

  controlarDisparo() {
    //control para eliminar enemigos
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i <this.enemigos.length; i++) {
        if (this.enemigos[i].haTocadoLaBala(this.personaje.bala)) {
        }
        if (!this.enemigos[i].estaVivo) {
          this.enemigos.splice(i, 1)
        }
      }
    }
  }

  controlarDisparoCobertura() {
    //control para eliminar cobertura
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i <this.Coberturas.length; i++) {
        if (this.Coberturas[i].haTocadoLaBala(this.personaje.bala, this.puntos)) {
        }
        if (!this.Coberturas[i].estaVivo) {
          this.Coberturas.splice(i, 1)
        }
      }
    }
  }

  controlarGanaroPerder() {
    if (this.enemigos.length == 0 ) {
      return this.pSiguienteGanar;
    } else if (this.enemigos.length >= 1 && this.enemigo.posYPerder(this.enemigos) > 180){
      return this.pSiguientePerder;
    }
  }

  juegoFinalizado() {
    if (this.enemigos.length == 0 ) {
      return  this.finalizo = true;
    } else if (this.enemigos.length >= 1 && this.enemigo.posYPerder(this.enemigos) > 180) {
      return  this.finalizo = true;
    } else {
      return  this.finalizo = false;
    }
  }

  puntaje() {
    fill(0);
    rectMode(CORNER);
    rect(0, 0, width, 30);
    fill(255);
    textSize(28);
    textAlign(CENTER);
    text("Enemigos: " + this.enemigos.length, width/2, 20);
  }

  btnApretado(btn) {
    this.personaje.mover(btn, this.pantallaActual)
  }

  btnTipeado(btn) {
    this.personaje.disparo(btn, this.pantallaActual);
  }
}
