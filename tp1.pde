PImage imagenP1, imagenP2, imagenP3, boton;
PFont fuenteP1, fuenteP2, fuenteP3;
int segundos = 0;
int movimientoYTextoP1 = -25;
int transparenciaTextoP3 = 0;
float escaladoTextoP2 = 0.1;
boolean iniciar = false;

void setup() {
  size(640, 480);
  
  imagenP1 = loadImage("honda-cbr-600-1988.jpg");
  imagenP2 = loadImage("honda-cbr-600-f2-1991.jpg");
  imagenP3 = loadImage("honda-cbr-600-f4-1999.jpg");
  boton = loadImage("boton.jpg");

  //Fuentes para las pantallas
  fuenteP1 = loadFont("Cambria-BoldItalic-48.vlw");
  fuenteP2 = loadFont("Roboto-BlackItalic-48.vlw");
  fuenteP3 = loadFont("ROGFonts-Regular-40.vlw");
}

void draw() {
  background(#2771B9);

// verifico si la var. es false, si es false aparece el boton de iniciar 
//si es true empieza el conteo de segundos y a pasar las pantallas
  if (iniciar != true) {
    fill(255);
    rect(220, 190, 200, 100);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(30);
    text("INICIAR", width/2, height/2);
  } else {
    
    if (frameCount % 60 == 0 && segundos < 16) {
      segundos = segundos + 1;
    }
  }

  //segun los segundo muestro las pantallas y se le reasigna el valor a la var. pantalla
  if (iniciar== true && segundos <= 5) {
    image(imagenP1, 0, 0, 640, 480);
    fill(0);

    //texto pantalla 1
    textFont(fuenteP1, 24);
    textAlign(CENTER, CENTER);
    fill(#000000);
    text("En 1987 fue cuando se lanzo \nla Primer Honda CBR 600 F", 320, movimientoYTextoP1);

    //movimiento del texto
    movimientoYTextoP1++;
  } else if (segundos >= 6 && segundos <= 11) {
    image(imagenP2, 0, 0, 640, 480);

    //texto pantalla 2
    textFont(fuenteP2, escaladoTextoP2);
    fill(#000000);
    text("La Honda CBR 600 F2 fue la CBR mas popular, \nquizas la mas vendida de la saga", 320, 30);

    //escalado de texto
    escaladoTextoP2 = escaladoTextoP2 + 0.1;
  } else if (segundos > 11) {
    image(imagenP3, 0, 0, 640, 480);

    //transparencia tento pantalla 3
    textFont(fuenteP3);
    fill(255, 255, 255, transparenciaTextoP3);
    textFont(fuenteP3, 16);
    textAlign(CENTER, CENTER);
    text("El gran cambio de la Honda CBR 600 \nllego en 1999 con su cuarta version. \nLa gran novedad llega de su chasis de Aluminio", 320, 45);

    //escalado de texto
    transparenciaTextoP3++;

    //boton de reinicio
    image(boton, 530, 420, 100, 50);
  }
}


//reinicia los valores de las variables
void mousePressed() {
  //evento para iniciar el paso de las pantallas
  if(iniciar != true && mouseX > 220 && mouseX < 420 && mouseY > 190 && mouseY < 290){
  iniciar= true;
  }
  
  //para que el evento funcione se tienen que cumplir todas las condiciones
  if (segundos > 11 && mouseX > 530 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
    segundos = 0;
    //pantalla = 1;
    movimientoYTextoP1 = -25;
    escaladoTextoP2 = 0.1;
    transparenciaTextoP3 = 0;
    iniciar = false;
  }
}
