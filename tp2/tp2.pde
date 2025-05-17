PFont font; 
PImage[] images = new PImage[4]; 
int currentScreen = -1; 
float textX = 0;  
float textSpeed = -0.5;
int alpha = 0; 
int timer = 0;

//Textos para cada pantalla

String[][] textos = {
{
"Anillos de la Serpiente es una escultura",
"de 80 metros que representa una serpiente",
"con las fauces abiertas, donde los visitantes",
"pueden entrar y recorrer su interior."
},
{
"La obra consta de dos momentos interactivos",
"en los que los visitantes usan un código",
"para acceder a una app y responder",
"tres preguntas relacionadas con la experiencia."
},
{
"En la segunda parte, en el Centro Cultural",
"Recoleta, se encuentra la escultura de la",
"serpiente. Los visitantes pueden recorrerla,",
"y con sus movimientos, las luces de la",
"instalación cambian dinámicamente."
},
{
"Centro Cultural Recoleta, 2019",
"Dirección Artística y General:",
"Emiliano Causa y Matías Romero Costas",
"Coordinación General: David Bedoian",
"Diseño de Escultura: Emiliano Causa",
    
}
};

void setup() {
size(640, 480); 

//Cargar imágenes con extensión explícita

String[] imageNames = {"1.jpg", "2.jpg", "3.jpg", "4.jpg"};
for (int i = 0; i < images.length; i++) {
images[i] = loadImage(imageNames[i]);
if (images[i] == null) {
background(255, 0, 0);
text("Error: Imagen '" + imageNames[i] + "' no encontrada.", width/2, height/2);
noLoop();
return;
} else {
println("Imagen '" + imageNames[i] + "' cargada correctamente.");
}
}

//Cargar fuente

font = createFont("Arial", 20, true);
if (font == null) {
println("Error: No se pudo cargar la fuente 'Arial'. Usando fuente por defecto.");
font = createFont("SansSerif", 20);
}
textFont(font);
textAlign(CENTER, CENTER);
}

void draw() {
background(66, 255, 100); 

//Pantalla inicial

if (currentScreen == -1) {
textSize(32);
fill(155, 0, 0); 
text("Anillos de la serpiente", width/2, height/2 - 50);
//Botón de inicio
fill(100, 100, 255); 
ellipse(width/2, height/2 + 75, 100, 40); 
fill(255);
textSize(20);
text("Iniciar", width/2, height/2 + 75); 
}

//Pantallas de contenido

else if (currentScreen >= 0 && currentScreen < 4) {
//Mostrar imagen
if (images[currentScreen] != null) {
image(images[currentScreen], 0, 0, 640, 480);
} else {
println("Error: Imagen para pantalla " + currentScreen + " no está disponible.");
}

//Animaciones por pantalla

if (currentScreen == 0) {
  
//Animación:fundido

if (alpha < 255) {
alpha += 5;
}
fill(255, 9, 0, alpha);
} else if (currentScreen == 1) {
      
//Animación:movimiento de izquierda a derecha

textX += 0.5; 
if (textX > 640) {
textX = -640; 
}
fill(255, 9, 0, 200);
} else if (currentScreen == 2) {
      
//Animación: rebote entre márgenes

textX += textSpeed;
if (textX + 320 <= 100) {
textSpeed = 0.5; // Cambiar a derecha
println("Rebote en margen izquierdo: textX=" + textX);
} else if (textX + 320 >= 540) { 
textSpeed = -0.5; 
println("Rebote en margen derecho: textX=" + textX);
}
fill(255, 9, 0, 200);
} else if (currentScreen == 3) {
//Animación: parpadeante
if (alpha < 255) {
alpha += 5;
} else {
alpha = 100;
}
fill(255, 9, 0, alpha);
}

//Mostrar textos

if (currentScreen == 2) {
textSize(20);
for (int i = 0; i < textos[currentScreen].length; i++) {
text(textos[currentScreen][i], textX + 320, 120 + i * 40, 600); 
}
} else {
textSize(25); 
for (int i = 0; i < textos[currentScreen].length; i++) {
text(textos[currentScreen][i], textX + 320, 180 + i * 60, 600);
}
}

//Transición automática 

timer++;
int transitionTime = (currentScreen == 2) ? 800 : (currentScreen == 3) ? 600 : 300;
if (timer > transitionTime) {
currentScreen++;
timer = 0;
textX = 0;
textSpeed = -0.5;
alpha = 0;
}
}

//Pantalla final

else if (currentScreen == 4) {
textSize(32);
fill(155, 0, 0);
text("Fin de la presentación", 320, 200);
//Botón de reinicio
fill(100, 100, 255);
rect(270, 300, 100, 40);
fill(255);
textSize(20);
text("Reiniciar", 320, 320);
}
}

void mousePressed() {
  
//Botón de inicio

if (currentScreen == -1) {
float d = dist(mouseX, mouseY, width/2, height/2 + 75);
if (d < 50) {
currentScreen = 0;
timer = 0;
textX = 0;
textSpeed = -0.5; 
alpha = 0;
}
}

//Botón de reinicio

else if (currentScreen == 4) {
if (mouseX > 270 && mouseX < 370 && mouseY > 300 && mouseY < 340) {
currentScreen = -1;
timer = 0;
textX = 0;
textSpeed = -0.5; 
alpha = 0;
}
}
}
