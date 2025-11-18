//Pantalla de estado
let pantalla = 0; 
let pantallaAnterior = 0;

//Configuración de botones
let buttonWidth = 150;
let buttonHeight = 40;
let storyTextY = 390; 

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


if (pantalla === 0) {
//Pantalla de Inicio
background(220, 220, 220);
textSize(28);
text("Aventura de Yanay", textX, height / 2 - 80);
textSize(20);
text("Haz clic para comenzar", textX, height / 2);
dibujarBotonUnico("Comenzar Aventura");

} else if (pantalla === 1) {
//Pantalla 1: Yanay despierta
background(50, 50, 70);
fill(255);
text("Yanay despierta en un lugar oscuro sola con su muñeca.\nEscucha un ruido, ¿Qué elige hacer?", textX, storyTextY); 
dibujarBotonesNavegacion("Escapar izquierda", "Curiosidad derecha");

} else if (pantalla === 2) {
//Pantalla 2: Puerta protegida
background(100, 100, 150);
fill(255);
text("Encuentra una puerta protegida. Le informan que Rey Supay está ocupado y que debe intentar en otro momento.\n¿Qué debe hacer?", textX, storyTextY); 
dibujarBotonesNavegacion("Decide esperar", "Se duerme");

} else if (pantalla === 3) {
  
//Pantalla 3: Ir a la derecha (Curiosidad) a a Pantalla 7
background(150, 100, 50);
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
textSize(32);
text("FINAL 1: PERMANECE EN HURIN PACHA", textX, height/2 - 50); 
textSize(20);
text("Yanay se duerme y despierta cuando Supay la recibe.", textX, height/2 + 20); 
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
background(100, 150, 100);
fill(255);
text("Encuentra una mujer quien le pide ayuda para cruzar el río.\nYanay no puede ayudarla, ¿Qué hace?", textX, storyTextY); 

dibujarBotonesNavegacion("Se disculpa y sigue", "Continúa buscando"); 

} else if (pantalla === 8) {
//Pantalla 8: Se disculpa Mujer le indica el camino
background(150, 200, 150);
text("La mujer comprende que Yanay busca la salida y le indica el camino...", textX, storyTextY);
dibujarBotonUnico("Continuar");

} else if (pantalla === 9) {
//Pantalla 9: Cuarta hermana
background(200, 255, 200);

text("Yanay llega con la cuarta hermana, ruega por salir y la mujer se apiada y la guía a la salida...", textX, storyTextY);
dibujarBotonUnico("Continuar");

} else if (pantalla === 10) {
// Pantalla 10: FINAL 2
background(100, 200, 255);
textSize(32);
text("FINAL 2: REGRESA AL RAY PACHA", textX, height/2 - 50); 
textSize(20);
text("Yanay es guiada de nuevo a la puerta del rey, quien la espera. ¡Regresa a casa!", textX, height/2 + 20); 
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
//Pantalla 4: Continuar esperando  a Pantalla 5 (Final 1)
checkBotonUnico(5);

} else if (pantalla === 5 || pantalla === 6 || pantalla === 10) {
checkBotonUnico(0);

} else if (pantalla === 7) {

if (checkBotonIzquierdo(8)) return;
checkBotonDerecho(8); 

} else if (pantalla === 8) {
checkBotonUnico(9);

} else if (pantalla === 9) {
// Pantalla 9: Continuar va a Pantalla 10 por ahora
checkBotonUnico(10);
}
}
