var waitimg,playimg,nextbutton,playbutton,nextbutton1,aboutimg,startimg
var gameState="wait"

function preload(){
waitimg= loadImage("assets/wait.gif")
aboutimg= loadImage("assets/brainFactsscreen.gif")
startimg=loadImage("assets/getSetGo.gif")

}


function setup(){
createCanvas(windowWidth-50,windowHeight-50)

nextbutton=createImg("assets/arrow.gif")
nextbutton.position(width-300,height-200)

nextbutton1=createImg("assets/arrow.gif")
nextbutton1.position(width-300,height-200)
nextbutton1.hide()

nextbutton2=createImg("assets/arrow.gif")
nextbutton2.position(width-300,height-200)
nextbutton2.hide()




}


function draw(){
if (gameState=="wait"){
    background(waitimg)
    nextbutton2.hide()
    nextbutton1.hide()


}

nextbutton.mousePressed(()=>{
    gameState="about"
})

nextbutton1.mousePressed(()=>{
    gameState="start"
})


nextbutton2.mousePressed(()=>{
    gameState="play"
})

if (gameState==="about")
{
    background(aboutimg)
    nextbutton.hide()
    nextbutton1.show()
    nextbutton2.hide()

}

if (gameState==="start")
{
    background(startimg)
    nextbutton.hide()
    nextbutton1.hide()
    nextbutton2.show()


}

if (gameState==="play")
{
    background("yellow")
    nextbutton.hide()
    nextbutton1.hide()
    nextbutton2.hide()


}


}
