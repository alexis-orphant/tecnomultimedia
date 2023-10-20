class Juego {
  constructor() {
    this. crearPantalla();
    this.crearJugador();
    this.crearEnemigo();
    this.crearCobertura();
    this.imgFondo = imagenes[0];
    this.pantalla = new Pantalla();
    this.pantallaActual = 0;
  }

  dibujar() {
    if (this.pantallaActual == 0) {//pantalla de inicio
      this.pantalla.dibujar(imagenes[1]);
    } else if (this.pantallaActual == 1) { // pantalla de juego
      this.fondo();
      this.dibujarJugador();
      this.dibujarEnemigo();
      this.dibujarCobertura();
      this.controlarDisparoCobertura();
      this.controlarDisparo();
      this.puntaje();
      this.controlarGanar();
      this.controlarPerder();
    } else if (this.pantallaActual == 2 ) { //pantalla gano
      this.pantalla.dibujar(imagenes[2]);
    } else if (this.pantallaActual == 3) { //pantalla gano
      this.pantalla.dibujar(imagenes[3]);
    }
  }

  crearPantalla() {
    
  }

  fondo() {
    imageMode(CENTER);
    image(this.imgFondo, width/2, height/2, 700, 500)
  }

  crearJugador() {
    this.personaje = new Personaje();
  }
  dibujarJugador() {
    this.personaje.dibujar();
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

  controlarGanar() {
    if (this.enemigos.length== 0 ) {
      this.pantallaActual = 2;
    }
  }

  controlarPerder() {
    if (this.enemigos.length >=1 && this.enemigo.posYPerder(this.enemigos) > 180) {
      this.pantallaActual = 3;
    }
  }

  puntaje() {
    fill(0);
    rect(0, 0, width, 30);
    fill(255);
    textSize(28);
    textAlign(CENTER);
    text("Enemigos: " + this.enemigos.length, width/2, 25);
    //console.log(this.enemigos.length)
  }
}
