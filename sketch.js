var OverViewSquarePrimary;
var SoundMakers = [];
var Mics = [];
var Recorders = [];
var SoundFiles = [];
var numOfSoundMakers = 4;
var timeoutID;


function setup() {
  createCanvas(windowWidth, windowHeight)
  backgroundColor = color(255,0,255);
  textAlign(CENTER);
  //Initiate primary objects
  OverViewSquarePrimary = new OverViewSquare();
  for (var i=0; i<numOfSoundMakers; i++) {
    SoundMakers.push(new SoundMaker(i));
    console.log("added soundmaker:" + i);
  }
  for (var i=0; i<numOfSoundMakers; i++) {
    console.log("initialise soundmaker:" + i);
    SoundMakers[i].init()
  }
  DisplaySoundMakers();
  OverViewSquarePrimary.display;
}

function draw() {

}

function mousePressed(){
  SoundMakersRecord();
  DisplaySoundMakers();
}

function mouseReleased(){
  SoundMakersStop();
  DisplaySoundMakers();
  PlaySounds();
}

function delayedPlaySounds(){
  console.log("timeing out yo");
  timeoutID = window.setTimeout(PlaySounds(), 5000);
}

function SoundMakersStop() {
  for (var i=0; i<SoundMakers.length; i++){
    SoundMakers[i].stopping();
  }
}

function SoundMakersRecord() {
  for (var i=0; i<SoundMakers.length; i++){
    SoundMakers[i].recording();
  }
}

function PlaySounds() {
  for (var i=0; i<SoundMakers.length; i++){
    SoundMakers[i].playing();
  }
}

function DisplaySoundMakers() {
  for (var i=0; i<SoundMakers.length; i++){
    SoundMakers[i].display();
  //  console.log("soundmaker " + i + " displayed")
  }
}
