//link youtube: https://youtu.be/sy0vf8Db-Vs

let imagenes = [];
let imgPng = [];
let juego;

function preload() {
  for (let i=0; i < 4; i++) {
    imagenes[i] = loadImage('data/img' +(i)+ '.jpg');
  }

  for (let i=0; i < 3; i++) {
    imgPng[i] = loadImage('data/png' +(i)+ '.png');
  }
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.center()

    juego = new Juego();
}


function draw() {
  keyPressed();
  juego.dibujar();
}

function keyPressed() {
  juego.personaje.mover(keyCode,juego.pantallaActual);
}

function keyTyped() {
  juego.personaje.disparo(keyCode,juego.pantallaActual);
}

function mousePressed() {
  if (juego.pantallaActual == 0) {
    juego.pantallaActual = 1;
  }
}
