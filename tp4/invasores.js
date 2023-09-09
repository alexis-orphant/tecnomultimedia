function dibujarInv() {
  for (let x = 0; x< enemigosPosX.length; x++) {
    for (let y = 0; y< enemigosPosX.length; y++) {
      image(alienImage, enemigosPosX[x][y] + 100, enemigosPosY[x][y], alienTam[x][y], alienTam[x][y])
        colisonBala(x, y)
    }
  }
}

function colisonBala(x, y) {
  if ( dist(posXbala, posYbala, enemigosPosX[x][y]+100, enemigosPosY[x][y])< 22) {
    delete enemigosPosX[x][y];
    delete enemigosPosY[x][y]
      baladisparada= false;
    puntos+=5;
  }
}
