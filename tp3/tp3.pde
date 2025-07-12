//TP3
//Alumno:Lautaro Chirino
//Link del video https://youtu.be/gSpr72XhbyE?si=4UVRJSO8Q0IXvQKf
PImage mifoto; 
PGraphics circlePattern;
int rectSize = 12; 
int lastRectSize = 12; //Para rastrear cambios
float circleRadius = 150; 
float lastCircleRadius = 150; 
boolean toggleColors = false; //alternar colores
boolean patternNeedsUpdate = true; 
float rotationAngle = 0; //Ángulo para la rotación del círculo

void setup() {
size(800, 400);
background(255); 
mifoto = loadImage("tp3.jpg");
