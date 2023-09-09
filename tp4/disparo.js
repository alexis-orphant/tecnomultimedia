function dibujarDisparo() {
  fill(247,244,37);
  noStroke();
  rect(posXbala, posYbala, balaAncho, balaAlto)
    posYbala-=5;
  disparo()
}

function disparo() {
  if (!baladisparada) {
    posXbala = posXplayer;
    posYbala = posYplayer;
  }
  if (posYbala < 75) {
    baladisparada = false;
  }
}
