var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    surface1 = createSprite(100, 770,180,20)
    surface2 = createSprite(300, 770,180,20)
    surface3 = createSprite(500, 770,180,20)
    surface4 = createSprite(700, 770,180,20)


    //create box sprite and give velocity
    box = createSprite(random(20,750))
    box.scale = 0.3
    box.velocityY = 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.velocityY=0;
    }
    if(box.isTouching(surface2)){
        box.velocityY=0;
    }
    if(box.isTouching(surface3)){
        box.velocityY=0;
    }
    if(box.isTouching(surface4)){
        box.velocityY=0;
    }

    drawSprites()
}
