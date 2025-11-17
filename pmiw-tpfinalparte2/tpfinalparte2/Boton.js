class Boton {
  constructor(posX, posY, ancho, alto, colorNormal, colorHover) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.colorNormal = colorNormal;
    this.colorHover = colorHover;
  }

  display() {
    noStroke();
    
    if (this.estaSobre()) {
      fill(this.colorHover);
    } else {
      fill(this.colorNormal);
    }

    rect(this.posX, this.posY, this.ancho, this.alto, 5);
  }

  estaSobre() {
    return (mouseX > this.posX && mouseX < this.posX + this.ancho && mouseY > this.posY && mouseY < this.posY + this.alto);
  }

  clickeado() {
    return this.estaSobre() && mouseIsPressed;
  }
}
