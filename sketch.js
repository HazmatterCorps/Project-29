const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block01;
var rock, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    stand1 = new Ground(760,520,170,10);
    stand2 = new Ground(960,420,170,10);

    block01 = new BlockA(700,300,20,30);
    block02 = new BlockA(720,300,20,30);
    block03 = new BlockA(740,300,20,30);
    block04 = new BlockA(760,300,20,30);
    block05 = new BlockA(780,300,20,30);
    block06 = new BlockA(800,300,20,30);
    block07 = new BlockA(820,300,20,30);
    block08 = new BlockA(900,270,20,30);
    block09 = new BlockA(920,270,20,30);
    block10 = new BlockA(940,270,20,30);
    block11 = new BlockA(960,270,20,30);
    block12 = new BlockA(980,270,20,30);
    block13 = new BlockA(1000,270,20,30);
    block14 = new BlockA(1020,270,20,30);
    block15 = new BlockB(720,270,20,30);
    block16 = new BlockB(740,270,20,30);
    block17 = new BlockB(760,270,20,30);
    block18 = new BlockB(780,270,20,30);
    block19 = new BlockB(800,270,20,30);
    block20 = new BlockB(920,240,20,30);
    block21 = new BlockB(940,240,20,30);
    block22 = new BlockB(960,240,20,30);
    block23 = new BlockB(980,240,20,30);
    block24 = new BlockB(1000,240,20,30);
    block25 = new BlockC(740,240,20,30);
    block26 = new BlockC(760,240,20,30);
    block27 = new BlockC(780,240,20,30);
    block28 = new BlockC(940,210,20,30);
    block29 = new BlockC(960,210,20,30);
    block30 = new BlockC(980,210,20,30);
    block31 = new BlockD(760,210,20,30);
    block32 = new BlockD(960,180,20,30);

    rock = new Rock(200,300);


    slingshot = new SlingShot(rock.body,{x:200, y:300});
}

function draw(){
    background("gray");
    Engine.update(engine);
    strokeWeight(1);
    fill("white");
    stroke("black");
    textSize(30);

    text("Drag The Hexagonal Stone And Release It To Launch It Towards The Blocks", 90, 50);
    
    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();
    block08.display();
    block09.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();


    ground.display();
    
 
    rock.display();

    stand1.display();
    stand2.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}