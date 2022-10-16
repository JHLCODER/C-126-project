song = "";
song1 = "";
leftWristX = "";
leftWristY ="";
rightWristX = "";
rightWristY = "";

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
   }

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    image(video, 0, 0, 600, 500);
}

 function modelLoaded(){
    console.log('PoseNet is Initialized');
 }

 function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = "+ leftWristX+"LeftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = "+ rightWristX+"RightWristY = "+ rightWristY);
 }
}