//Patrón 
createCirclePattern();
}

void createCirclePattern() {
circlePattern = createGraphics(width, height);
circlePattern.beginDraw();
circlePattern.noStroke();
circlePattern.background(0, 0); // Fondo transparente

//Patrón de rectangulos
for (int x = 400; x < width; x += rectSize * 2) {
for (int y = 0; y < height; y += rectSize) {
if (((x / (rectSize * 2)) + (y / rectSize)) % 2 == 0) {
circlePattern.fill(toggleColors ? 255 : 0); // Blanco o negro según toggle
} else {
circlePattern.fill(toggleColors ? 0 : 255); // Color opuesto
}
circlePattern.rect(x, y, rectSize * 2, rectSize); // Ancho el doble del alto
}
}
circlePattern.endDraw();

//Circulo
PGraphics maskGraphic = createGraphics(width, height);
maskGraphic.beginDraw();
maskGraphic.background(0); // Fondo negro (transparente al aplicar la máscara)
maskGraphic.fill(255); // Círculo blanco para la máscara
maskGraphic.ellipse(600, 200, circleRadius * 2, circleRadius * 2);
maskGraphic.endDraw();

//Incorporar circulo
circlePattern.mask(maskGraphic);
patternNeedsUpdate = false; // Patrón actualizado
}

void draw() {
background(255); // Fondo blanco
if (mifoto != null) {
image(mifoto, 0, 0, 400, 400);
}

noStroke();
for (int x = 400; x < width; x += rectSize * 2) {
for (int y = 0; y < height; y += rectSize) {
if (mouseX >= x && mouseX < x + rectSize * 2 && mouseY >= y && mouseY < y + rectSize) {
fill(random(255), random(255), random(255)); // Color aleatorio al pasar el cursor
} else {
if (((x / (rectSize * 2)) + (y / rectSize)) % 2 == 0) {
fill(toggleColors ? 0 : 255);
} else {
fill(toggleColors ? 255 : 0);
        }
}
rect(x, y, rectSize * 2, rectSize); // Ancho el doble del alto
}
}

//Interactividad: Modifica el tamaño del patrón y el círculo según el movimiento del mouse
int newRectSize = max(1, int(map(constrain(mouseX, 400, width), 400, width, 5, 20)));
float newCircleRadius = map(constrain(mouseY, 0, height), 0, height, 100, 200);

//Verifica si el patrón se tiene que actualizar
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

//Actualiza el ángulo de rotación
rotationAngle = updateCircleRotation(rotationAngle);

//Dibuja el patrón circular con rotación
drawRotatedCircle(rotationAngle);

//Botón interactivo
drawButton();
}

void drawButton() {
float buttonX = width - 50;
float buttonY = 50;
float buttonRadius = 30;

//Detecta uso del mouse
float dist = dist(mouseX, mouseY, buttonX, buttonY);
if (dist <= buttonRadius) {
fill(255, 100, 100);
} else {
fill(200);
}
ellipse(buttonX, buttonY, buttonRadius * 2, buttonRadius * 2);
}

void mousePressed() {
//Detecta clic en el botón
float buttonX = width - 50;
float buttonY = 50;
float buttonRadius = 30;
float dist = dist(mouseX, mouseY, buttonX, buttonY);
if (dist <= buttonRadius) {
toggleColors = !toggleColors; // Alternar colores
patternNeedsUpdate = true;
}
}

void keyPressed() {
//Alterna colores con cualquier tecla
toggleColors = !toggleColors;
patternNeedsUpdate = true;
}

float updateCircleRotation(float currentAngle) {
float speed = 0.01; // ~0.5 segundos por rotación a 60 fps
return currentAngle + speed;
}

void drawRotatedCircle(float angle) {
pushMatrix();
translate(600, 200); // Mover al centro del círculo
rotate(angle); // Aplicar rotación
translate(-600, -200); // Volver al origen
image(circlePattern, 0, 0);
popMatrix();
}
