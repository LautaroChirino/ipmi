class Juego {
  constructor() {
    this.personaje = new Personaje;
    this.troncos = [];
    this.estado = 0;
  }

  actualizar() {
    if (this.estado === 0) {
      this.dibujarPantallaInicio();
    } else if (this.estado === 1) {
      image(imgPastoArriba, 0, 0, 640, 480);
      image(imgPastoAbajo, 0, 0, 640, 480);
      fill(26, 200, 237);
      rect(0, rioInicio, 640, 320);

      let personajeSobreTronco = false;

      for (let t of this.troncos) {
        t.actualizar();
        t.dibujar();

        if (this.personaje.encimaDe(t)) {
          personajeSobreTronco = true;
          this.personaje.moverConTronco(t);
        }
      }

      this.personaje.actualizar();

      if (!quieroSalir) {
        this.dibujarInstructivo();
      }

      if (this.personaje.estaEnElAgua() && !personajeSobreTronco) {
        this.estado = 2;
      }

      if (this.personaje.posY < rioInicio - 30) {
        this.estado = 3;
      }
    } else if (this.estado === 2) {
      this.dibujarPantallaPerdiste();
    } else if (this.estado === 3) {
      this.dibujarPantallaGanaste();
    } else if (this.estado === 4) {
      this.dibujarCreditos();
    }
  }

  iniciarJuego() {
    this.estado = 1;
    let carriles = 8;
    let carrilesTam = 40;

    for (let i = 0; i < 12; i++) {
      let carril = i % carriles;
      let y = rioInicio + carril * carrilesTam + (carrilesTam - 40) / 2;

      let ancho;
      let tipo = random(["simple", "doble"]);

      if (tipo === "simple") {
        ancho = 100;
      } else {
        ancho = 180;
      }

      let velocidad = 2;

      if (i % 2 == 1) {
        velocidad = -velocidad;
      }

      this.troncos.push(new Troncos(random(width), y, ancho, 40, velocidad, tipo));
    }
  }

  reinicio() {
    yaSono = false;
    this.estado = 0;
    this.personaje = new Personaje();
    this.troncos = [];
  }

  press() {
    if (this.estado === 0) {
      if (botonJugarFuncional.clickeado()) {
        this.iniciarJuego();
      }
    }
    if (this.estado === 2 || this.estado === 3) {
      if (botonReiniciar.clickeado()) {
        this.reinicio();
      }
      if (botonCreditos.clickeado()) {
        this.estado = 4;
      }
    }
    if (botonSalirInst.clickeado()) {
      quieroSalir = true;
    }
    if (this.estado === 4) {
      if (botonMenu.clickeado()) {
        this.reinicio();
        this.estado = 0;
      }
    }
  }

  dibujarPantallaInicio() {
    background(0, 50, 0);

    image(titulo, 150, 5, 350, 350);

    image(botonJugar, 180, 260, 300, 300);

    botonJugarFuncional.display();
  }

  dibujarPantallaPerdiste() {
    if (!sonidoPerdiste.isPlaying() && !yaSono) {
      sonidoPerdiste.play();
      yaSono = true;
    }

    background(100, 0, 0);

    fill(255, 50, 50);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2 - 60);

    fill(255);
    textSize(24);
    text("Te caíste al agua...", width / 2, height / 2 - 10);

    botonReiniciar.display();
    fill(0);
    textSize(28);
    text("REINICIAR", botonReiniciar.posX + botonReiniciar.ancho / 2, botonReiniciar.posY + botonReiniciar.alto / 2);

    botonCreditos.display();
    fill(0);
    textSize(20);
    text("CREDITOS", botonCreditos.posX + botonCreditos.ancho / 2, botonCreditos.posY + botonCreditos.alto / 2);
  }

  dibujarPantallaGanaste() {
    if (!sonidoGanaste.isPlaying() && !yaSono) {
      sonidoGanaste.play();
      yaSono = true;
    }

    background(0, 100, 0);

    fill(50, 255, 50);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("¡GANASTE!", width / 2, height / 2 - 60);

    fill(255);
    textSize(24);
    text("¡Cruzaste el río exitosamente!", width / 2, height / 2 - 10);

    botonReiniciar.display();
    fill(0);
    textSize(28);
    text("REINICIAR", botonReiniciar.posX + botonReiniciar.ancho / 2, botonReiniciar.posY + botonReiniciar.alto / 2);

    botonCreditos.display();
    fill(0);
    textSize(20);
    text("CREDITOS", botonCreditos.posX + botonCreditos.ancho / 2, botonCreditos.posY + botonCreditos.alto / 2);
  }

  dibujarInstructivo() {
    image(imgInstructivo, 135, 77, 380, 325);
    botonSalirInst.display();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("X", botonSalirInst.posX + botonSalirInst.ancho / 2, botonSalirInst.posY + botonSalirInst.alto / 2);
  }

  dibujarCreditos() {
    image(imgCreditos, 0, 0, 640, 480);
    botonMenu.display();
    fill(0);
    textSize(20);
    text("VOLVER A MENU", botonMenu.posX + botonMenu.ancho / 2, botonMenu.posY + botonMenu.alto / 2);
    
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
