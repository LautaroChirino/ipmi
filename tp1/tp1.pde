PImage mifoto; 

void setup() {
size(800,400); // 
mifoto = loadImage("mifoto.jpg"); 
}

void draw() {
background(214,157,41); 
image(mifoto, 0, 0, 400, 400); 

//Fondo
fill(209,109,2);
stroke(0);
rect(400, 0, 200, 400);
  
// Cuerpo 
fill(0, 100, 0); 
ellipse(600,250, 200, 100); 
fill(0, 100, 0); 
rect(450, 250, 500, 400,50);
noStroke();

//Sombra cuerpo
fill(38,64,43);
rect(470,320,100,200);
rect(670,320,100,200);
rect(500,290,60,190);
rect(520,280,20,190);
rect(690,290,60,190);
rect(710,280,20,190);

///Brazo
fill(0, 100, 0);
ellipse(450,400, 100, 300); 
fill(38,64,43); 
ellipse(430,400,70,300);

//Cuello
fill(255,220,200);
rect(550,200,90,100);
fill(255,220,200);
ellipse(600,300,100,100);

//Sombra Cuello
fill(224,201,177);
arc(600,230,80,100,0,PI);

//Pelo 2
fill(39,30,5);
ellipse(655,125,70,80);

//Mechones
fill(39,30,5);
arc(520, 140, 80, 60,0,PI); 
arc(515, 145, 80, 60,0,PI); 
arc(505, 160, 60, 60,0,PI);
arc(550, 170, 60, 60,0,PI);
ellipse(525,170,70,70);

// Cara (elipse)
fill(255, 220, 200); 
ellipse(600, 150, 140, 190); 
// Nariz
fill(255, 200, 180); 
ellipse(610, 170, 29, 45); 
fill(255, 200, 180); 
ellipse(615, 190, 30, 30); 

//Pelo detras
fill(39,30,5);
ellipse(525,120,80,90);

//Oreja
fill(255, 220, 200); 
ellipse(525, 150, 40, 60); 
fill(255, 200, 180); 
ellipse(530, 150, 20, 30);
fill(255, 200, 180); 
ellipse(525, 155, 25, 20);

//boca
fill(255, 200, 180);
ellipse(610, 220, 45, 20); 

//ojos
fill(255); 
ellipse(570, 150, 36, 15); 
ellipse(640, 150, 36, 15); 

//Pupilas
fill(88,64,0); 
ellipse(570, 150, 15, 15); 
ellipse(640, 150, 15, 15); 

//Iris
fill(0); 
ellipse(570, 150, 8, 8); 
ellipse(640, 150, 8, 8); 

//cejas
fill(39,30,5);
rect(548,120,40,10);
fill(39,30,5);
rect(620,120,40,10);

//Anteojos
noFill();
stroke(0);
rect(548,130,50,40,50);
noFill();
stroke(0);
rect(620,130,50,40,50);

//Puente
fill(0);
rect(595,140,30,10);

//Pelo
fill(39,30,5);
noStroke();
arc(600, 100, 140, 130, PI, TWO_PI, OPEN); 

//Mechon 1
fill(39,30,5);
noStroke();
arc(650,100,70,70,0,PI);

//Mechon 2
fill(39,30,5);
noStroke();
arc(550,100,70,70,0,PI);

//Mechon 3
fill(39,30,5);
ellipse(550,90,70,70);

//mechon 3)
fill(39,30,5);
ellipse(550,80,90,70);

//Cierre
noFill();
stroke(219,194,0);
arc(600, 290, 140, 130,0, PI);
fill(219,194,0);
rect(600,350,10,40);
} 
