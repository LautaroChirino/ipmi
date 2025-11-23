let pantalla = 0;
let pantallaAnterior = 0;

//Configuración de botones
let buttonWidth = 150;
let buttonHeight = 40;
let storyTextY = 390;

//Imágenes
let fondo0, fondo1, fondo2, fondo3, fondo4;
let fondoFinal1;

function preload() {
  fondo0 = loadImage("/data/pantalla0.png");
  fondo1 = loadImage("/data/pantalla1.png");
  fondo2 = loadImage("/data/pantalla2.png");
  fondo3 = loadImage("/data/pantalla3.png");
  fondo4 = loadImage("/data/pantalla4.png");
  fondoFinal1 = loadImage("/data/final1b.png");
} 

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  rectMode(CORNER);
}

//Función para dibujar los botones de navegación principal
function dibujarBotonesNavegacion(btn1Text, btn2Text) {
  let bottomY = height - 60;
 
 //Este seria el boton izquierdo
  fill(150, 150, 255);
  let btn1X = width / 2 - buttonWidth - 10;
  rect(btn1X, bottomY, buttonWidth, buttonHeight);
  fill(0);
  textSize(14);
  text(btn1Text, btn1X + buttonWidth / 2, bottomY + buttonHeight / 2);
  
  //Y este seria boton derecho
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

function draw() {
  background(220, 220, 220);
  
//Configuración general del texto de la historia
  fill(0);
  textSize(18);
  let textX = width / 2;
  
//Si ves necesario modificar textos, hacelo, algunos mas que nada son de prueba
  if (pantalla === 0) {
    //Pantalla de Inicio
    image(fondo0, 0, 0, 640, 480);
    textSize(28);
    text("Aventura de Yanay", textX, height / 2 - 80);
    textSize(20);
    text("Haz clic para comenzar", textX, height / 2);
    dibujarBotonUnico("Comenzar Aventura");
  } else if (pantalla === 1) {
    //Pantalla 1: Yanay despierta
    image(fondo1, 0, 0, 640, 480);
    fill(255);
    text("Yanay despierta en un lugar oscuro sola con su muñeca.\nEscucha un ruido, ¿Qué elige hacer?", textX, storyTextY);
    dibujarBotonesNavegacion("Escapar izquierda", "Curiosidad derecha");
  } else if (pantalla === 2) {
    //Pantalla 2: Puerta protegida
    image(fondo2, 0, 0, 640, 480);
    fill(255);
    text("Encuentra una puerta protegida. Le informan que Rey Supay está ocupado y que debe intentar en otro momento.\n¿Qué debe hacer?", textX, storyTextY);
    dibujarBotonesNavegacion("Decide esperar", "Se duerme");
  } else if (pantalla === 3) {
    
    //Pantalla 3: Ir a la derecha (Curiosidad) a a Pantalla 7
    image(fondo3, 0, 0, 640, 480);
    fill(255);
    text("Yanay va con curiosidad a la derecha...", textX, storyTextY);
    dibujarBotonUnico("Continuar");
  } else if (pantalla === 4) {
    // Pantalla 4: Espera a Pantalla 5
    background(150, 150, 100);
    text("Yanay decide esperar un rato...", textX, storyTextY);
    dibujarBotonUnico("Continuar esperando");
  } else if (pantalla === 5) {
    //Pantalla 5: FINAL 1
    background(255, 100, 100);
    image(fondoFinal1, 0, 20, 640, 480);
    textSize(40);
    push();
    textAlign(CENTER, TOP);
    text("FINAL 1: PERMANECE EN HURIN PACHA", 50, height*0.15 - 50, 500, 300);
    textSize(20);
    text("Yanay se duerme y despierta cuando Supay la recibe.", 50, height*0.15 + 45, 500, 300);
    pop();
    dibujarBotonUnico("Volver al Inicio");
  } else if (pantalla === 6) {
    //Créditos
    background(255, 220, 200);
    textSize(30);
    text("¡Créditos!", textX, 80);
    textSize(20);
    text("Aplicación de Navegación Simple\nProgramada en p5.js\n\n© 2025", textX, height / 2);
    dibujarBotonUnico("Volver al Inicio");
  } else if (pantalla === 7) {
    
    //Pantalla 7: Encuentro con la mujer
    image(fondo4, 0, 0, 640, 480);
    fill(255);
    text("Encuentra una mujer quien le pide ayuda para cruzar el río.\nYanay no puede ayudarla, ¿Qué hace?", textX, storyTextY);
    dibujarBotonesNavegacion("Se disculpa y sigue", "La ayuda a cruzar el rio");
  } else if (pantalla === 8) {
    //Pantalla 8: Se disculpa Mujer le indica el camino
    background(150, 200, 150);
    text("La mujer comprende que Yanay busca la salida y le indica el camino...", textX, storyTextY);
    dibujarBotonUnico("Continuar");


  } else if (pantalla === 11) {
    background(100, 150, 220);
    text("Una vez cruzado el río, la mujer le pregunta si desea ir con ella.", textX, storyTextY);
    dibujarBotonUnico("Seguirla");

  } else if (pantalla === 12) {
    background(100, 220, 120);
    text("La mujer la lleva a un hermoso jardín, donde estaba la hermana de la mujer.\nYamay riega su planta y salen retoños.", textX, storyTextY);
    dibujarBotonUnico("Ir por Tercera hermana");

  } else if (pantalla === 13) {
    background(180, 220, 140);
    text("La tercera hermana le hace escoger:\n¿Florecer retoños o información para salir?", textX, storyTextY);
    dibujarBotonesNavegacion("Florecer retoños", "Elegir información");

  } else if (pantalla === 14) {
    background(220, 180, 255);
    text("La cuarta hermana le ofrece descansar.", textX, storyTextY);
    dibujarBotonesNavegacion("Acepta", "Groseramente se niega");

  } else if (pantalla === 15) {   // FINAL 3
    background(255, 240, 180);
    textSize(36);
    fill(255, 220, 0);
    text("FINAL 3: ASCIENDE AL HANNA PACHA", textX, height/2 - 60);
    textSize(22);
    fill(255);
    text("Yamay es envuelta en pétalos y asciende a Hanna Pacha.", textX, height/2 + 10);
    dibujarBotonUnico("Volver al Inicio");

  } else if (pantalla === 9) {
    //Pantalla 9: Cuarta hermana
    background(200, 255, 200);
    push();
    textAlign(CENTER, TOP);
    text("Yanay llega con la cuarta hermana, ruega por salir y la mujer se apiada y la guía a la salida...", 70, storyTextY-40, 500, 500);
    pop();
    dibujarBotonUnico("Continuar");
  } else if (pantalla === 10) {
    // Pantalla 10: FINAL 2
    background(100, 200, 255);
    textSize(32);
    text("FINAL 2: REGRESA AL KAY PACHA", textX, height/2 - 50);
    textSize(20);
    push();
    textAlign(CENTER, TOP);
    text("Yanay es guiada de nuevo a la puerta del rey, quien la espera. ¡Regresa a casa!", 70, height/2 + 20, 500, 500);
    pop();
    dibujarBotonUnico("Volver al Inicio");
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
  } else if (pantalla === 5 || pantalla === 6 || pantalla === 10 || pantalla === 15) {
    checkBotonUnico(0);
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
