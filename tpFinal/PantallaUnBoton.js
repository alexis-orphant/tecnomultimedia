class PantallaUnBoton {
  constructor(img, btnX, btnY, pSiguiente, textoBtn, textoY, linea1, linea2, linea3) {
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.btnX = btnX;
    this.btnY = btnY;
    this.pSiguiente = pSiguiente;
    this.boton = new Boton(this.btnX, this.btnY, textoBtn);
    this.texto = new Texto(textoY, linea1, linea2, linea3);
  }

  dibujar() {
    imageMode(CORNER, CORNER);
    image(this.img, 0, 0, this.ancho, this.alto)
      this.boton.dibujar();
      this.texto.dibujar();
  }

  click(btn) {
    if (this.boton.click(btn)) {
      return this.pSiguiente;
    }
  }
}
