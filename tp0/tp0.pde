//variable que contiene la foto
PImage photo;

void setup() {
  size(800, 400);
  //cargado de foto
  photo = loadImage("auto2.jpg");
}

void draw() {
  noStroke();
  //tamaño de foto
  photo.resize(400, 800);
  image(photo, 0, -200);

  //pared
  fill(#FFFDF0);
  rect(400, 0, 400, 400);

  //calle
  fill(190);
  rect(400, 330, 400, 100);

  //cordon
  fill(#F5D628);
  rect(400, 315, 400, 15);
  fill(#E8E7E5);
  rect(480, 315, 320, 15);

  //ventana
  stroke(0);
  strokeWeight(2);
  fill(#1F1BA7);
  rect(430, 70, 100, 150);

  noStroke();
  //puerta
  fill(#EDEBD5);
  rect(580, 70, 150, 245);

  //AUTO
  fill(#0C9CF2);
  rect(415, 180, 375, 100, 15, 10, 10, 10);

  //techo
  stroke(#0C9CF2);
  strokeWeight(4);
  line(550, 180, 575, 105);
  line(575, 105, 640, 105);
  line(640, 105, 640, 180);
  stroke(0);
  strokeWeight(5);
  line(590, 102, 670, 102);
  line(670, 102, 670, 180);
  line(670, 180, 788, 180);
  line(670, 130, 695, 130);
  line(695, 130, 750, 180);

  //ruedas
  fill(0);
  circle(480, 300, 110);
  circle(720, 300, 110);
}
