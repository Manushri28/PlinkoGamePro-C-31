const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  for(var k = 0; k<=width; k=k+80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 40; j<=width; j=j+1){
    plinkos.push(new Plinkos(j, 0, 10, 10))
  }

  for(var h = 15; h<=width-50; h=h+1){
    plinkos.push(new Plinkos(h, 100, 10, 10))
  }

  for(var s = 40; s<=width; s=s+1){
    plinkos.push(new Plinkos(s, 200, 10, 10))
  }

  for(var b = 15; b<=width-50; b=b+1){
    plinkos.push(new Plinkos(b, 300, 10, 10))
  }
  
  Engine.run(engine);

}

function draw() {
  background(0);  
  
  ground.display();

  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
  }


  for(var j=40; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var h=40; h < plinkos.length; h++){
    plinkos[h].display();
  }
  for(var s=40; s < plinkos.length; s++){
    plinkos[s].display();
  }
  for(var b=40; b < plinkos.length; b++){
    plinkos[b].display();
  }

  if(frameCount % 60 === 0){
  particles.push(new Particles(240, width/2+10, 10, 10))
  }
  for(var g = 0; g < particles.length; g++){
    particles[g].display();
  }

  drawSprites();
}

