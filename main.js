cocossd_status = "";

TheInputText = "";
function setup(){
 canvas = createCanvas(303, 303);

 canvas.position(480, 480);

 video = createCapture(VIDEO);

 video.size(303, 303);

 video.hide();


}

function start(){

objectDetector = ml5.objectDetector("cocossd", modelloaded);

document.getElementById("status").innerHTML = "The Status is Detecting Objects";

}

function modelloaded(){
    console.log("The Canvas Model is Loaded!!!")

  cocossd_status = true;
}

function draw(){

image(video, 0, 0, 303, 303);
    
    } 