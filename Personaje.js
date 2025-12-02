class Personaje {
  constructor() {
    this.posX = 280;
    this.posY = 440;
    this.tam = 40;
    this.velocidad = 40;
  }

  actualizar() {
    this.dibujar();
  }

  dibujar() {
    image(imgYanay, this.posX, this.posY, 80, this.tam);
  }

  encimaDe(tronco) {
    return (this.posX + this.tam > tronco.posX && this.posX < tronco.posX + tronco.ancho &&
      this.posY + this.tam > tronco.posY && this.posY < tronco.posY + 40);
  }

  moverConTronco(tronco) {
    this.posX += tronco.velocidad;
  }

  estaEnElAgua() {
    return (this.posY > rioInicio - 30 && this.posY < rioFinal - 50);
  }


  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverIzquierda() {
    this.posX -= this.velocidad;
  }

  moverDerecha() {
    this.posX += this.velocidad;
  }

  moverArriba() {
    this.posY -= this.velocidad;
  }

  moverAbajo() {
    this.posY += this.velocidad;
  }
}
