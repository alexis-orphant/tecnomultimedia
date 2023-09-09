//video: https://youtu.be/MX2TuuqKFyA
let posX;
let posY;
//imagenes
let playerImagen,alienImagen,fondoImagen,piedraImagen,pInicio,pGano,pPerdio;
//pantalla
let pantalla= 0;//0-1-2-3
let inicio = true;
let juego = false;
let ganaste = false;
let perdiste = false;
//funciones jugador
let posXplayer = 300;
let posYplayer = 470;
let pAncho = 50;
let pAlto = 50;
let pVelocidad = 5;
//alien
let alienTam = [];
let alienAlto = 50;
let posYfila1 = 100;
let posYfila2 = 150;
let enemigosPosX = [];
let enemigosPosY = [];
let eneImg = [];
//disparo
let posXbala = posXplayer;
let posYbala = 470;
let balaAncho = 8;
let balaAlto = 15;
let balaVel = 5;
let balaPos = 0;
let baladisparada = false;
//piedras
let piedrasAncho = [80, 80, 80];
let piedrasPosX = [100, 300, 500];
let piedrasVidas = [2, 2, 2];
//juego
let puntos = 0;
let gano = false;
let perdio = false;
let segundos= 0;
let texto;

function preload() {//carga imagenes a las respectivas variables
  playerImage = loadImage("data/player_ship.PNG");
  alienImage = loadImage("data/alien.PNG");
  fondoImagen = loadImage("data/fondo.jpg");
  piedraImagen = loadImage("data/piedra.PNG");
  pInicio = loadImage("data/pantallaInicio.jpg");
  pGano = loadImage("data/pantallaGano.jpg");
  pPerdio = loadImage("data/pantallaPerdio.jpg");
  texto = loadFont('data/Anton-Regular.ttf');
}

function setup() {
  let cnv = createCanvas(600, 500);
  cnv.center()//centra el juego en la pantalla
    page=select("body");//color de fondo del la pagina
  page.style("background-color", color(0));

  textFont(texto)
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER)

    for (let i=0; i<9; i++) {//se cargan lo valores a los arrays
    enemigosPosX.push([i*50, i*50]);
    enemigosPosY.push([posYfila1, posYfila2]);
    eneImg.push(alienImage)
      alienTam.push([50, 50])
  }
}


function draw() {//controlamos que pantalla vamos a mostrar
  if (pantalla == 0 && inicio) {
    image(pInicio, width/2, height/2, 600, 500)
  } else if (pantalla == 1 && juego) {
    image(fondoImagen, width/2, height/2, 600, 500)
      juegoCompleto()
  } else if (pantalla == 2 && ganaste) {
    image(pGano, width/2, height/2, 600, 500)
  } else if (pantalla == 3 && perdiste) {
    image(pPerdio, width/2, height/2, 600, 500)
  }
}

function keyPressed() {//tecla "R" para reiniciar el juego y todas la variables
  if (key == " " && juego) {
    baladisparada= true
  }
  if (key == "r") {
    for (let i=0; i<9; i++) {
      enemigosPosX.push([i*50, i*50]);
      enemigosPosY.push([100, 150]);
      eneImg.push(alienImage)
        alienTam.push([50, 50])
    }
    puntos = 0;
    segundos = 0;
    piedrasAncho = [80, 80, 80];
    piedrasPosX = [100, 300, 500];
    piedrasVidas = [2, 2, 2];
    pantalla = 0;
    inicio = true;
    juego = false;
    ganaste = false;
    perdiste = false;
  }
}
function mouseClicked() {//click en la pantalla de inicio para empezar a jugar
  if (pantalla == 0 && inicio) {
    pantalla = 1;
    inicio = false;
    juego = true;
  }
}
