const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var bird, slingShot;
var backgroundImg, platform;
var gameState = "onSling";
var bg = "sprites/daytime.jpg";
var score = 0;


function preload(){
    getTime();
    backgroundImg = loadImage(bg);
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(530,235,40,40);
    box2 = new Box(560,230,40,40);
    box3 = new Box(590,235,40,40);
    box4 = new Box(620,235,40,40);
    box5 = new Box(650,235,40,40);
    box6 = new Box(560,195,40,40);
    box7 = new Box(590,195,40,40);
    box8 = new Box(620,195,40,40);
    box9 = new Box(590,135,40,40);
    bird = new Bird(110,30);
    platform = new Ground(600,280,400,10);
    slingshot = new SlingShot(bird.body,{x:90, y:80});
}

function draw(){
    background(backgroundImg);
    textSize(30);
    console.log(score);
    text("score", + score, 600,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    

    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    platform.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    //box5.score();
    //box6.score();
  //  box7.score();
   // box8.score();
    box9.score();

    

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       //slingshot.attach(bird.body);
    }
}


async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON = await response.json();
     var datetime = responseJSON.datetime;
     var hour = datetime.slice(11,13);
     if(hour >= 16){
        bg = "sprites/night.jpg";
    }
    else{
     bg = "sprites/daytime";   
    }
     backgroundImg = loadImage(daytime);
     console.log(responseJSON);
    
    }