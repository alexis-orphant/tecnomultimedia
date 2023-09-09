function dibujarPlayer() {
  dibujarDisparo()
    image(playerImage, posXplayer, posYplayer, pAncho, pAlto)
    playerMovX()
}

function playerMovX() {
  if (keyCode == LEFT_ARROW && keyIsPressed && posXplayer -25 > 0) {
    posXplayer-= pVelocidad;
  }
  if (keyCode == RIGHT_ARROW && keyIsPressed && posXplayer +25 < 600) {
    posXplayer+= pVelocidad;
  }
}

function piedras() {
  for (let i = 0; i <3; i++) {
    image(piedraImagen, piedrasPosX[i], 380, piedrasAncho[i], piedrasAncho[i])
      colisonBalaPiedra(i)
  }
}

function colisonBalaPiedra(i) {
  if ( dist(posXbala, posYbala, piedrasPosX[i], 380)< 40) {
    piedrasAncho[i]= 40;
    piedrasVidas[i]-=1;
    if (piedrasVidas[i] == 0) {
      delete piedrasPosX[i]
    }
    baladisparada= false;
  }
}
