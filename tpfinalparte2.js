let juego;
let yaSono = false;
let quieroSalir = false;
let sonidoClick;
let sonidoPerdiste;
let sonidoGanaste;
let imgPastoArriba;
let imgPastoAbajo;
let rioInicio = 40;
let rioFinal = 400;
let titulo;
let botonJugar;
let botonJugarFuncional;
let botonReiniciar;
let imgTroncoSimple;
let imgTroncoDoble;
let imgYanay;
let imgCreditos;
let imgInstructivo;

function preload() {
  soundFormats("mp3");
  sonidoClick = loadSound("./data/click.mp3");
  sonidoPerdiste = loadSound("./data/perdiste.mp3");
  sonidoGanaste = loadSound("./data/ganaste.mp3");
  titulo = loadImage("data/titulo.png");
  botonJugar = loadImage("data/botonJugar.png");
  imgPastoArriba = loadImage("data/pastoArriba.png");
  imgPastoAbajo = loadImage("data/pastoAbajo.png");
  imgTroncoSimple = loadImage("data/troncoSimple.png");
  imgTroncoDoble = loadImage("data/troncoDoble.png");
  imgYanay = loadImage("data/yanay.png");
  imgInstructivo = loadImage("data/instructivo.png");
  imgCreditos = loadImage("data/creditos.png");
}

function setup() {
  createCanvas(640, 480);

  botonJugarFuncional = new Boton(230, 363, 200, 100, color(0, 0), color(0, 0));
  botonReiniciar = new Boton(width/2 - 140, height/2 + 50, 280, 100, color(255, 165, 0), color(204, 133, 0));
  botonCreditos = new Boton(width/2 - 100, height/2 + 165, 200, 50, color(255, 165, 0), color(204, 133, 0));
  botonSalirInst = new Boton(465, 85, 35, 35, color(255, 50, 50), color(255, 0, 0));
  botonMenu = new Boton(390, 390, 200, 50, color(255, 165, 0), color(204, 133, 0));

  juego = new Juego;
}

function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.press();
  sonidoClick.play();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}
