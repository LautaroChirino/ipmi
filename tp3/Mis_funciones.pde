
//Patrón inicial
createCirclePattern();
}

void createCirclePattern() {
circlePattern = createGraphics(width, height);
circlePattern.beginDraw();
circlePattern.noStroke(); 
circlePattern.background(0, 0); 

//Patrón de líneas verticales en la mitad derecha
for (int x = 400; x < width; x++) {
if ((x / rectSize) % 2 == 0) { 
circlePattern.fill(toggleColors ? 255 : 0); 
} else {
circlePattern.fill(toggleColors ? 0 : 255); 
}
circlePattern.rect(x, 0, rectSize, height);
}
circlePattern.endDraw();

//circulo
PGraphics maskGraphic = createGraphics(width, height);
maskGraphic.beginDraw();
maskGraphic.background(0); 
maskGraphic.fill(255); 
maskGraphic.ellipse(600, 200, circleRadius * 2, circleRadius * 2); 
maskGraphic.endDraw();

//Aplicar
circlePattern.mask(maskGraphic);
patternNeedsUpdate = false; //patrón está actualizado
}

void draw() {
background(255); // Fondo blanco
image(mifoto, 0, 0, 400, 400); 
  

//Patrón de líneas horizontales en la mitad derecha
noStroke();
for (int y = 0; y < height; y += rectSize) {
  
//Verificar si el mouse está sobre el rectángulo
if (mouseX >= 400 && mouseX < width && mouseY >= y && mouseY < y + rectSize) {
fill(random(255), random(255), random(255)); //Color aleatorio al pasar el cursor
} else {
if ((y / rectSize) % 2 == 0) { 
fill(toggleColors ? 0 : 255); 
} else {
fill(toggleColors ? 255 : 0); 
}
}
rect(400, y, width - 400, rectSize);
}

//Interactividad: Modifica el tamaño del patrón y el círculo según el movimiento del mouse
int newRectSize = int(map(constrain(mouseX, 400, width), 400, width, 5, 20)); 
float newCircleRadius = map(constrain(mouseY, 0, height), 0, height, 100, 200); 

//Corrobora si el patrón se tiene que actualizar
if (newRectSize != lastRectSize || newCircleRadius != lastCircleRadius) {
rectSize = newRectSize;
circleRadius = newCircleRadius;
lastRectSize = rectSize;
lastCircleRadius = circleRadius;
patternNeedsUpdate = true;

}

//Actualiza el patrón si es necesario
if (patternNeedsUpdate) {
createCirclePattern();
}
  
//Actualizar el ángulo de rotación
rotationAngle = updateCircleRotation(rotationAngle);

//Dibujar el patrón circular con rotación
drawRotatedCircle(rotationAngle);

//botón interactivo
drawButton();
}

void drawButton() {
float buttonX = width - 50;
float buttonY = 50;
float buttonRadius = 30;

//Detectar uso del mouse
float dist = dist(mouseX, mouseY, buttonX, buttonY);
if (dist <= buttonRadius) {
fill(255, 100, 100); 
} else {
fill(200);
}
ellipse(buttonX, buttonY, buttonRadius * 2, buttonRadius * 2);
}

void mousePressed() {
//Detectar clic en el botón
float buttonX = width - 50;
float buttonY = 50;
float buttonRadius = 30;
float dist = dist(mouseX, mouseY, buttonX, buttonY);
if (dist <= buttonRadius) {
toggleColors = !toggleColors; //Alternar colores
patternNeedsUpdate = true;
}
}

void keyPressed() {
//Alternar colores con cualquier tecla
toggleColors = !toggleColors;
patternNeedsUpdate = true;
}

//Funciones para la rotación del círculo
float updateCircleRotation(float currentAngle) {
float speed = 0.01; // ~Z0.5 segundos por rotación a 60 fps
return currentAngle + speed;
}

void drawRotatedCircle(float angle) {
pushMatrix();
translate(600, 200); //Mover al centro del círculo
rotate(angle); //Aplicar rotación
translate(-600, -200); //Volver al origen
image(circlePattern, 0, 0); 
popMatrix();
}
