class Aventura {
  constructor() {
    this.pantallas = []
      this.cargarPantallas(lineas);
    this.verPantalla = 0;
    this.juego = new Juego(15, 16)
  }

  dibujar() {
    
    if (this.verPantalla == 14) {
      this.juego.dibujar();
      if (this.juego.juegoFinalizado()) {
        this.verPantalla = this.juego.controlarGanaroPerder();
      }
    } else {
      this.pantallas[this.verPantalla].dibujar();
    }
  }

  cargarPantallas(lineas) {
    //Organizacion de parametros
    //img, btnX, btnY, pSiguiente, textoBtn, textoY, linea1, linea2, linea3
    //PantallaDosBotones img, btnUnoX, btnUnoY, btnDosX, btnDosY, pSiguiente, pSiguienteDos, textoBtn1, textoBtn2, textoY, linea1, linea2, linea3

    this.pantallas[0] = new PantallaUnBoton(imgs[0], 300, 360, 1, "Iniciar");
    this.pantallas[1] = new PantallaUnBoton(imgs[1], 300, 280, 2, "Siguiente", 350, lineas[0], lineas[1], lineas[2]);
    this.pantallas[2] = new PantallaDosBotones(imgs[2], 255, 280, 345, 280, 3, 4, "Abandonar", "Rescatar", 350, lineas[3], lineas[4], lineas[5]);
    this.pantallas[3] = new PantallaUnBoton(imgs[11], 300, 280, 0, "Reiniciar", 350, lineas[6], lineas[7], lineas[8]);//primer final
    this.pantallas[4] = new PantallaUnBoton(imgs[3], 300, 360, 5, "Siguiente", 60, lineas[9], lineas[10], lineas[11]);
    this.pantallas[5] = new PantallaUnBoton(imgs[4], 300, 360, 6, "Siguiente", 60, lineas[12], lineas[13], lineas[14]);
    this.pantallas[6] = new PantallaDosBotones(imgs[4], 255, 360, 345, 360, 7, 9, "A", "B", 60, lineas[15], lineas[16], lineas[17]);
    this.pantallas[7] = new PantallaUnBoton(imgs[12], 300, 360, 8, "Siguiente", 60, lineas[18], lineas[19], lineas[20]);//desvio a final 2
    this.pantallas[8] = new PantallaUnBoton(imgs[13], 300, 360, 0, "Reiniciar", 60, lineas[21], lineas[22], lineas[23]);//segundo final
    this.pantallas[9] = new PantallaUnBoton(imgs[5], 300, 280, 10, "Siguiente", 350, lineas[24], lineas[25], lineas[26]);
    this.pantallas[10] = new PantallaUnBoton(imgs[6], 300, 50, 11, "Siguiente", 350, lineas[27], lineas[28], lineas[29]);
    this.pantallas[11] = new PantallaUnBoton(imgs[7], 300, 280, 12, "Siguiente", 350, lineas[30], lineas[31], lineas[32]);
    this.pantallas[12] = new PantallaUnBoton(imgs[16], 300, 50, 13, "Siguiente", 350, lineas[33], lineas[34], lineas[35]);
    //pantalla explicacion del juego
    this.pantallas[13] = new PantallaUnBoton(imagenesJuego[1], 300, 280, 14, "Siguiente");
    this.pantallas[15] = new PantallaUnBoton(imagenesJuego[2], 300, 280, 18, "Siguiente");//ganar
    this.pantallas[16] = new PantallaUnBoton(imagenesJuego[3], 300, 280, 17, "Siguiente");//perder
    //final despues de perder
    this.pantallas[17] = new PantallaUnBoton(imgs[17], 300, 800, 0, "Siguiente", 60, lineas[36], lineas[37], lineas[38]);
     //final despues de Ganar
    this.pantallas[18] = new PantallaUnBoton(imgs[8], 300, 280, 19, "Siguiente", 350, lineas[39], lineas[40], lineas[41]);
    this.pantallas[19] = new PantallaUnBoton(imgs[9], 300, 280, 20, "Siguiente", 350, lineas[42], lineas[43], lineas[44]);
    this.pantallas[20] = new PantallaUnBoton(imgs[10], 300, 360, 21, "Siguiente", 60, lineas[45], lineas[46], lineas[47]);
    this.pantallas[21] = new PantallaUnBoton(imagenesJuego[4], 300, 500, 0, "");
    
  }

  click(btn) {
    this.pantallas[this.verPantalla].click(btn)
      this.verPantalla = this.pantallas[this.verPantalla].click(btn)
  }
  
  pantallaGanoOPerdio() {
    this.verPantalla = this.pantallas[this.verPantalla].controlarGanaroPerder()
  }

  btnApretado(btn) {
    this.juego.btnApretado(btn);
  }

  btnTipeado(btn) {
    this.juego.btnTipeado(btn);
  }
}
