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
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 20; j<=width; j=j+50){
    plinkos.push(new Plinkos(j, 70));
  }

  for(var h = 40; h<=width-20; h=h+50){
    plinkos.push(new Plinkos(h, 170));
  }

  for(var s = 20; s<=width; s=s+50){
    plinkos.push(new Plinkos(s, 270));
  }

  for(var b = 40; b<=width-20; b=b+50){
    plinkos.push(new Plinkos(b, 370));
  }
  
  Engine.run(engine);

}

function draw() {
  background(0);  
  
  ground.display();

  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
  }


  for(var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  }


  if(frameCount % 60 === 0){
  particles.push(new Particles(random(20, 450), -10, 10, 10))
  }
  for(var g = 0; g < particles.length; g++){
    particles[g].display();
  }

  drawSprites();
}

