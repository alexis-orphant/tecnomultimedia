function segundero() {
  if (frameCount % 60 == 0) {
    segundos = segundos + 1;
  } 
  text("Segundos: " + segundos,  width/2+100, 50)
}

function pantallaPerdio() {
  if (segundos > 35 && puntos <90) {
    pantalla = 3;
    perdiste = true;
    inicio= false;
    juego = false;
  } else if ( segundos <= 35 && puntos == 90) {
    pantalla = 2;
    ganaste = true;
    inicio = false;
    juego = false;
  }
}

function puntuacion() {
  fill(0)
  rect(width/2, 0, width, 150)
  fill(0, 255, 0)
    textSize(30)
    text("Puntos: " + puntos, width/2-100, 50)  
}
