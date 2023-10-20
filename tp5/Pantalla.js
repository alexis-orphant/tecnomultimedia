class Pantalla {
  constructor() {
  }
  dibujar(img){
    imageMode(CORNER);
   image(img, 0, 0, width, height)
  }
}
