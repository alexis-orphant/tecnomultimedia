class PantallaDosBotones {
  constructor(img, btnUnoX, btnUnoY, btnDosX, btnDosY, pSiguiente, pSiguienteDos, imgBtn1, imgBtn2, textoY, linea1, linea2, linea3) {
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.pSiguiente = pSiguiente;
    this.pSiguienteDos = pSiguienteDos;
    this.botonUno = new Boton(btnUnoX, btnUnoY, imgBtn1);
    this.BotonDos = new Boton(btnDosX, btnDosY, imgBtn2);
    this.texto = new Texto(textoY, linea1, linea2, linea3);
  }

  dibujar() {
    imageMode(CORNER, CORNER);
    image(this.img, 0, 0, this.ancho, this.alto);
    this.botonUno.dibujar();
    this.BotonDos.dibujar();
    this.texto.dibujar();
  }

  click(btn) {
    if (this.botonUno.click(btn, this.textoBtn1)) {
      return this.pSiguiente;
    }
    if (this.BotonDos.click(btn, this.textoBtn2)) {
      return this.pSiguienteDos;
    }
  }
}
