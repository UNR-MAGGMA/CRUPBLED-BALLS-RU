const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;
var paperImg;
var radius = 70;

function preload(){
binImg = loadImage("dustbingreen.png");
paperImg = loadImage("paper.png");

}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction: 0,
		density:1.2
	}

	ball = Bodies.circle(310,100,radius/2.6,ball_options);
    World.add(world,ball);

    ground = new Ground();
    

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(255);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    
    binPart1.display();
    binPart2.display();
    binPart3.display(); 

    imageMode(CENTER);
	// use image() command to add paper image to the ball.
	image(paperImg,ball.position.x,ball.position.y,radius,radius)
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball,ball.position,{x:130,y:-145});
    }
}
