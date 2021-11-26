function preload(){

}
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(600,220);
    video= createCapture(VIDEO);
    video.size(550,550);
    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses)

}

function modeLoaded(){
    console.log ("poseNet is working")

}

function draw(){
background('#808080');
}
function gotPoses(results){
   if(results.length >0){
       console.log (results);
   } 
}
