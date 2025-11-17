class Troncos {
  constructor(posX, posY, ancho, alto, velocidad, tipo) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = velocidad;
    this.tipo = tipo;
    this.img;
    
    if (tipo === "simple") {
      this.img = imgTroncoSimple;
    } else if (tipo === "doble") {
      this.img = imgTroncoDoble;
    }
  }
  
  dibujar() {
    image(this.img, this.posX, this.posY, this.ancho, this.alto);
  }
  
  actualizar() {
    this.posX += this.velocidad;
    
    if(this.velocidad > 0 && this.posX > width) {
      this.posX = -this.ancho;     
    }
    
    if(this.velocidad < 0 && this.posX + this.ancho < 0) {
      this.posX = width;
    }
  }
}
