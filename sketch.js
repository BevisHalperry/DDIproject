var OverViewSquarePrimary;
var SoundMakers = [];
var Mics = [];
var Recorders = [];
var SoundFiles = [];
var numOfSoundMakers = 4;
var timeoutID;
var clickStatus = 0;

function setup() {
  createCanvas(windowWidth, windowHeight)

  colorMode(HSB);
  backgroundColor = color(35);
  background(color(backgroundColor));
  strokeWeight(4);
  stroke(44,5,90);
  strokeJoin(MITER);
  strokeCap(SQUARE);


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
  OverViewSquarePrimary.display();
  Instructions();
}

function draw() {

}

function mousePressed(){
  clickStatus++;
  SoundMakersRecord();
  DisplaySoundMakers();
  Instructions();
}

function mouseReleased(){
  SoundMakersStop();
  DisplaySoundMakers();
  OverViewSquareUpdate();
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

function OverViewSquareUpdate() {
  for (var i=0; i<SoundMakers.length; i++){
    if (SoundMakers[i].poll() == 0) {
      OverViewSquarePrimary.drawLines("NE");
    }
    if (SoundMakers[i].poll() == 1) {
      OverViewSquarePrimary.drawLines("N");
    }
    if (SoundMakers[i].poll() == 2) {
      OverViewSquarePrimary.drawLines("E");
    }
    if (SoundMakers[i].poll() == 3) {
      OverViewSquarePrimary.drawLines("SE");
    }
  }
}

function Instructions(){
  var padding = width/20;
  noStroke();
  textSize(28);
  var textX = 0;
  var textY = height/2-1.8*padding;
  var textX2 = width;
  var textY2 = padding*3;
  fill(255);
  textAlign(CENTER);
  if (clickStatus == 0){
    text("To Begin, press and hold one of the 4 boxes above.",textX,textY,textX2,textY2);
  }
  if (clickStatus == 1){
    fill(35);
    rect(0,height/2-1.8*padding,width,padding);
    fill(255);
    text("Well done! Now make some noises into the microphone.",textX,textY,textX2,textY2);
  }
  if (clickStatus == 3){
    fill(35);
    rect(0,height/2-1.8*padding,width,padding);
    fill(255);
    text("When you let go of the the box, the sound will render and loop",textX,textY,textX2,textY2);
  }
  if (clickStatus == 5){
    fill(35);
    rect(0,height/2-1.8*padding,width,padding);
    fill(255);
    text("and as you do, the corrosponding texture and colour can be seen in the overview box below",textX,textY,textX2,textY2);
  }
  if (clickStatus == 7){
    textSize(50);
    fill(35);
    rect(0,height/2-1.8*padding,width,padding);
    fill(255);
    text("enjoy the demo by @bevishalperry",textX,textY,textX2,textY2);
  }
  stroke(44,5,90);
  strokeWeight(4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
