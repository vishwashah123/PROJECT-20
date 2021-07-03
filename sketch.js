
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    cat1Img=loadImage("images/cat1.png")
    cat2Img=loadImage("images/cat2.png","images/cat3.png")
    cat3Img=loadImage("images/cat4.png")

    mouse1Img=loadImage("images/mouse1.png")
    mouse2Img=loadImage("images/mouse2.png","images/mouse3.png")
    mouse3Img=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("sleeping",cat1Img)
    cat.scale=0.2
    mouse=createSprite(200,600)
    mouse.addAnimation("standing",mouse1Img)
    mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.velocityX=0 
    cat.addAnimation("lastimage",cat3Img)
    cat.x=300
    cat.scale=0.2
    cat.changeAnimation("lastimage")
    mouse.addAnimation("lastimage1",mouse3Img)
    mouse.scale=0.2
    mouse.changeAnimation("lastimage1")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("running",cat2Img)
    cat.changeAnimation("running")

    mouse.addAnimation("teasing",mouse2Img)
    mouse.frameDelay=25
    mouse.changeAnimation("teasing")
}

}
