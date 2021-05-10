
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground
var block1
var  gamestate="on"
var polygon,polygonimg;
var slingshot
function preload(){
//polygonimg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(600,height,1200,20)
ground1=new Ground(700,250,300,10)
block1=new Block(300,370,50,50)
block2=new Block(350,370,50,50)
block3=new Block(400,370,50,50)
block4=new Block(325,320,50,50)
block5=new Block(375,320,50,50)
block6=new Block(350,270,50,50)
block7=new Block(700,220,50,50)
block8=new Block(650,220,50,50)
block9=new Block(750,220,50,50)
block10=new Block(675,170,50,50)
block11=new Block(725,170,50,50)
block12=new Block(700,120,50,50)
polygon=new Polygon(200,150,40)
slingshot= new Slingshot(polygon.body,{x:170,y:150})
  //  World.add(world.polygon)
}

function draw(){
    background(255)
ground.display()
ground1.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
polygon.display()
slingshot.display()
//image(polygonimg,polygon.position.x,polygon.position.y,40,40)
    //drawSprites();
}
function mouseDragged(){
    if(gamestate==="on"){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
slingshot.fly();
gamestate="off"
}
















































