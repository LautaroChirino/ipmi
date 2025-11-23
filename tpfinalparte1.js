/*
Gabriel Diaz Subelza y Lautaro Chirino
Comisión 3
TP Final parte 1
*/
let pantalla = 0;
let pantallaAnterior = 0;
//Sonido click
let click;
//Configuración de botones
let buttonWidth = 150;
let buttonHeight = 40;
let storyTextY = 390;
//Imágenes
let imgTitulo;
let fondo0, fondo1, fondo2, fondo3, fondo4, fondo7, fondo8, fondo9, fondo11, fondo12, fondo13;
let fondoFinal1, fondoFinal2, fondoFinal3;

function preload() {
  soundFormats("mp3", "ogg");
  click = loadSound("/data/click.mp3");
  imgTitulo = loadImage("/data/titulo.png");
  fondo0 = loadImage("/data/pantalla0.png");
  fondo1 = loadImage("/data/pantalla1.png");
  fondo2 = loadImage("/data/pantalla2.png");
  fondo3 = loadImage("/data/pantalla3.png");
  fondo4 = loadImage("/data/pantalla4.png");
  fondo7 = loadImage("/data/pantalla7.png");
  fondo8 = loadImage("/data/pantalla8.png");
  fondo9 = loadImage("/data/pantalla9.png");
  fondo11 = loadImage("/data/pantalla11.png");
  fondo12 = loadImage("/data/pantalla12.png");
  fondo13 = loadImage("/data/pantalla13.png");
  fondoFinal1 = loadImage("/data/final1b.png");
  fondoFinal2 = loadImage("/data/final2.png");
  fondoFinal3 = loadImage("/data/final3.png");
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  rectMode(CORNER);
}

//Función para dibujar los botones de navegación principal
function dibujarBotonesNavegacion(btn1Text, btn2Text) {
  let bottomY = height - 60;
  fill(150, 150, 255);
  let btn1X = width / 2 - buttonWidth - 10;
  rect(btn1X, bottomY, buttonWidth, buttonHeight);
  fill(0);
  textSize(14);
  text(btn1Text, btn1X + buttonWidth / 2, bottomY + buttonHeight / 2);

  fill(150, 150, 255);
  let btn2X = width / 2 + 10;
  rect(btn2X, bottomY, buttonWidth, buttonHeight);
  fill(0);
  textSize(14);
  text(btn2Text, btn2X + buttonWidth / 2, bottomY + buttonHeight / 2);
}

function dibujarBotonUnico(btnText) {
  fill(150, 150, 255);
  rect(width / 2 - buttonWidth / 2, height - 60, buttonWidth, buttonHeight);
  fill(0);
  textSize(16);
  text(btnText, width / 2, height - 40);
}

// Dos botones para finales y créditos
function dibujarBotonesFinales() {
  let bottomY = height - 60;
  // Izquierda: Créditos
  fill(150, 150, 255);
  rect(width / 2 - buttonWidth - 10, bottomY, buttonWidth, buttonHeight);
  fill(0);
  textSize(14);
  text("Créditos", width / 2 - buttonWidth / 2 - 10, bottomY + buttonHeight / 2);
  // Derecha: Volver al Inicio
  fill(150, 150, 255);
  rect(width / 2 + 10, bottomY, buttonWidth, buttonHeight);
  fill(0);
  textSize(14);
  text("Volver al Inicio", width / 2 + buttonWidth / 2 + 10, bottomY + buttonHeight / 2);
}

function draw() {
  background(220, 220, 220);
  fill(0);
  textSize(18);
  let textX = width / 2;

  if (pantalla === 0) {
    image(fondo0, 0, 0, 640, 480);
    image(imgTitulo, 165, 5, 320, 320);
    dibujarBotonUnico("Comenzar Aventura");

  } else if (pantalla === 1) {
    image(fondo1, 0, 0, 640, 480);
    fill(255);
    push();
    textAlign(CENTER, TOP);
    text("Yanay despierta en un lugar oscuro sola con su muñeca. Escucha un ruido, ¿Qué elige hacer?", 70, storyTextY-25, 500, 500);
    pop();
    dibujarBotonesNavegacion("Escapar izquierda", "Curiosidad derecha");

  } else if (pantalla === 2) {
    image(fondo2, 0, 0, 640, 480);
    fill(255);
    push();
    textAlign(CENTER, TOP);
    text("Encuentra una puerta protegida. Le informan que Rey Supay está ocupado y que debe intentar en otro momento. ¿Qué debe hacer?", 70, storyTextY-40, 500, 500);
    pop();
    dibujarBotonesNavegacion("Decide esperar", "Se duerme");

  } else if (pantalla === 3) {
    image(fondo3, 0, 0, 640, 480);
    fill(255);
    text("Yanay va con curiosidad a la derecha...", textX, storyTextY);
    dibujarBotonUnico("Continuar");

  } else if (pantalla === 4) {
    image(fondo4, 0, 0, 640, 480);
    text("Yanay decide esperar un rato...", textX, storyTextY);
    dibujarBotonUnico("Continuar esperando");

  } else if (pantalla === 5) {  // FINAL 1
    background(255, 100, 100);
    image(fondoFinal1, 0, 20, 640, 480);
    textSize(40);
    push();
    textAlign(CENTER, TOP);
    text("FINAL 1: PERMANECE EN HURIN PACHA", 50, height*0.15 - 50, 500, 300);
    textSize(20);
    text("Yanay se duerme y despierta cuando Supay la recibe.", 50, height*0.15 + 45, 500, 300);
    pop();
    dibujarBotonesFinales();

//Creditos 

  } else if (pantalla === 6) {  
    background(255, 220, 200);
    textSize(30);
    text("¡Créditos!", textX, 80);
    textSize(20);
    text("Aplicación de Navegación Simple\nProgramada en p5.js\n\nGabriel Díaz Subelza y Lautaro Chirino\nComisión 3", textX, height / 2 - 40);
    dibujarBotonesFinales();

  } else if (pantalla === 7) {
    image(fondo7, 0, 0, 640, 480);
    fill(255);
    push();
    textAlign(CENTER, TOP);
    text("Encuentra una mujer quien le pide ayuda para cruzar el río. Yanay no puede ayudarla, ¿Qué hace?", 70, storyTextY-25, 500, 500);
    pop();
    dibujarBotonesNavegacion("Se disculpa y sigue", "La ayuda a cruzar el rio");

  } else if (pantalla === 8) {
    image(fondo8, 0, 0, 640, 480);
    text("La mujer comprende que Yanay busca la salida y le indica el camino...", textX, storyTextY);
    dibujarBotonUnico("Continuar");

  } else if (pantalla === 11) {
    image(fondo11, 0, 0, 640, 480);
    text("Una vez cruzado el río, la mujer le pregunta si desea ir con ella.", textX, storyTextY);
    dibujarBotonUnico("Seguirla");

  } else if (pantalla === 12) {
    image(fondo12, 0, 0, 640, 480);
    push();
    fill(255);
    textAlign(CENTER, TOP);
    text("La mujer la lleva a un hermoso jardín, donde estaba la hermana de la mujer. Yamay riega su planta y salen retoños.", 70, storyTextY-25, 500, 500);
    pop();
    dibujarBotonUnico("Ir por Tercera hermana");

  } else if (pantalla === 13) {
    image(fondo13, 0, 0, 640, 480);
    push();
    textAlign(CENTER, TOP);
    text("La tercera hermana le hace escoger: ¿Florecer retoños o información para salir?", 70, storyTextY-25, 500, 500);
    pop();
    dibujarBotonesNavegacion("Florecer retoños", "Elegir información");

  } else if (pantalla === 14) {
    image(fondo9, 0, 0, 640, 480);
    text("La cuarta hermana le ofrece descansar.", textX, storyTextY);
    dibujarBotonesNavegacion("Acepta", "Groseramente se niega");

  } else if (pantalla === 15) {  
    background(255, 240, 180);
    image(fondoFinal3, 200, 165, 250, 310);
    textSize(36);
    fill(255, 220, 0);
    push();
    textAlign(CENTER, TOP);
    text("FINAL 3: ASCIENDE AL HANNA PACHA", 70, height*0.15 - 50, 500, 300);
    textSize(22);
    fill(255);
    text("Yamay es envuelta en pétalos y asciende a Hanna Pacha.", 70, height*0.15 + 45, 500, 300);
    pop();
    dibujarBotonesFinales();

  } else if (pantalla === 9) {
    image(fondo9, 0, 0, 640, 480);
    push();
    textAlign(CENTER, TOP);
    text("Yanay llega con la cuarta hermana, ruega por salir y la mujer se apiada y la guía a la salida...", 70, storyTextY-40, 500, 500);
    pop();
    dibujarBotonUnico("Continuar");

  } else if (pantalla === 10) {  // FINAL 2
    background(100, 200, 255);
    image(fondoFinal2, 42, 65, 550, 390);
    textSize(40);
    push();
    textAlign(CENTER, TOP);
    text("FINAL 2: REGRESA AL KAY PACHA", 70, height*0.15 - 50, 500, 300);
    textSize(20);
    text("Yanay es guiada de nuevo a la puerta del rey, quien la espera. ¡Regresa a casa!", 70, height*0.15 + 45, 500, 300);
    pop();
    dibujarBotonesFinales();
  }
}

function cambiarPantalla(dest) {
  pantalla = dest;
}

function checkNavButton(btnX, dest) {
  let bottomY = height - 60;
  if (mouseX >= btnX && mouseX <= btnX + buttonWidth &&
      mouseY >= bottomY && mouseY <= bottomY + buttonHeight) {
    cambiarPantalla(dest);
    return true;
  }
  return false;
}

function checkBotonIzquierdo(dest) {
  let btn1X = width / 2 - buttonWidth - 10;
  return checkNavButton(btn1X, dest);
}

function checkBotonDerecho(dest) {
  let btn2X = width / 2 + 10;
  return checkNavButton(btn2X, dest);
}

function checkBotonUnico(dest) {
  let btnX = width / 2 - buttonWidth / 2;
  return checkNavButton(btnX, dest);
}

function mousePressed() {
  click.play();

  if (pantalla === 0) {
    checkBotonUnico(1);

  } else if (pantalla === 1) {
    if (checkBotonIzquierdo(2)) return;
    checkBotonDerecho(3);

  } else if (pantalla === 2) {
    if (checkBotonIzquierdo(4)) return;
    checkBotonDerecho(5);

  } else if (pantalla === 3) {
    checkBotonUnico(7);

  } else if (pantalla === 4) {
    checkBotonUnico(5);

  } else if (pantalla === 5 || pantalla === 10 || pantalla === 15 || pantalla === 6) {
   
    if (checkBotonIzquierdo(6)) return;
    checkBotonDerecho(0);

  } else if (pantalla === 7) {
    if (checkBotonIzquierdo(8)) return;
    checkBotonDerecho(11);

  } else if (pantalla === 8) {
    checkBotonUnico(9);

  } else if (pantalla === 9) {
    checkBotonUnico(10);

  } else if (pantalla === 11) {
    checkBotonUnico(12);

  } else if (pantalla === 12) {
    checkBotonUnico(13);

  } else if (pantalla === 13) {
    if (checkBotonIzquierdo(14)) return;
    checkBotonDerecho(9);

  } else if (pantalla === 14) {
    if (checkBotonIzquierdo(15)) return;
    checkBotonDerecho(9);
  }
}
