function SoundMaker(tempIndex) {

  this.index = tempIndex;
  this.padding = (width/20);
  this.colour0 = color(352,100,61);
  this.colour1 = color(17,86,92);
  this.colour2 = color(39,78,88);
  this.colour3 = color(350,100,23);
  this.colour0norm = color(352,100,61);
  this.colour1norm = color(17,86,92);
  this.colour2norm = color(39,78,88);
  this.colour3norm = color(350,100,23);
  this.colour0alt = color(352,100,41);
  this.colour1alt = color(17,86,72);
  this.colour2alt = color(39,78,68);
  this.colour3alt = color(350,100,03);
  this.state = false

  this.init = function() {
    Mics.push(new p5.AudioIn());
    console.log("soundmaker "+ this.index+" mic initialised");
    Recorders.push(new p5.SoundRecorder());
    console.log("soundmaker "+ this.index + " recorder initialised");
    Mics[this.index].start();
    Recorders[this.index].setInput(Mics[this.index]);
    console.log("soundmaker " + this.index + " connection initialised");
    SoundFiles.push(new p5.SoundFile());
    console.log("soundmaker " + this.index + " file initialised");
  }

  this.display = function(){
    var index = this.index;
//    console.log(index);
    if (index == 0) {
    this.drawSquare(1,1,this.colour0);
    }
    if (index == 1) {
    this.drawSquare(1,2,this.colour1);
    }
    if (index == 2) {
    this.drawSquare(2,1,this.colour2);
    }
    if (index == 3) {
      this.drawSquare(2,2,this.colour3);
    }
  }

  this.drawSquare = function(tempGridX,tempGridY,tempColour){
    var colour = tempColour;
    fill(colour);
    var padding = this.padding;
    var gridX = tempGridX;
    var gridY = tempGridY;
  //  console.log(gridX,gridY)
    if (gridX == 1 && gridY == 1) {
      rect(padding,padding,((width/2)-padding),((height/4)-(padding)));
      strokeWeight(20);
      line(padding,(height/4)-padding,width/2,padding);
      strokeWeight(4);
      }
    if (gridX == 1 && gridY == 2) {
      rect((width/2),padding,((width/2)-padding),((height/4)-(padding)));
      var offsetX = (width/2);
      for (var j=30; j<(width-padding-offsetX); j+=30) {
         line((offsetX+j),((height/4)-(padding)),(offsetX+j),padding);
       }
    }
    if (gridX == 2 && gridY == 1) {
      rect(padding,((height/4)-(padding)),((width/2)-padding),((height/4)-(2*padding)));
      var offsetY = (height/4-padding)+20;
      for (var i=10; i<(height/2)-2*padding-offsetY-70; i+=30) {
         line(padding,offsetY+i,(width/2),offsetY+i);
       }
    }
    if (gridX == 2 && gridY == 2) {
      rect((width/2),((height/4)-(padding)),((width/2)-padding),((height/4)-(2*padding)));
      strokeWeight(20);
      line(width/2,(height/4)-padding,width-padding,height/2-3*padding);
      strokeWeight(4);
    }
  }


// checking if certain soundmaker is being pressed
  this.poll = function(){
    var padding = this.padding;
      if (mouseX > padding && mouseX < ((width/2)-padding)) {
        if (mouseY > padding && mouseY < ((height/4)-(padding))) {
          return 0;
        }
      }
      if (mouseX > (width/2) && mouseX < (width-padding)) {
        if (mouseY > padding && mouseY < ((height/4)-(padding))) {
          return 1;
        }
      }
      if (mouseX > padding && mouseX < ((width/2)-padding)) {
        if (mouseY > ((height/4)-(padding)) && mouseY < ((height/2)-(padding))){
          return 2;
        }
      }
      if (mouseX > (width/2) && mouseX < (width-padding)) {
        if (mouseY > ((height/4)-(padding)) && mouseY < ((height/2)-(padding))){
          return 3;
        }
      }
    }

  this.recording = function(){
    if (this.poll() == 0 && Mics[0].enabled) {
      Recorders[0].record(SoundFiles[0]);
      this.colour0 = this.colour0alt;
      this.state = true;
      console.log("recording");
    }
    if (this.poll() == 1 && Mics[1].enabled) {
      Recorders[1].record(SoundFiles[1]);
      this.colour1 = this.colour1alt;
      this.state = true;
    }
    if (this.poll() == 2 && Mics[2].enabled) {
      Recorders[2].record(SoundFiles[2]);
      this.colour2 = this.colour2alt;
      this.state = true;
    }
    if (this.poll() == 3 && Mics[3].enabled) {
      Recorders[3].record(SoundFiles[3]);
      this.colour3 = this.colour3alt;
      this.state = true;
    }
  }

  this.stopping = function(){
    if (this.poll() == 0 && this.state === true) {
      Recorders[0].stop;
      this.colour0 = this.colour0norm;
      this.state = false;
    }
    if (this.poll() == 1 && this.state === true) {
      Recorders[1].stop;
      this.colour1 = this.colour1norm;
      this.state = false;
    }
    if (this.poll() == 2 && this.state === true) {
      Recorders[2].stop;
      this.colour2 = this.colour2norm;
      this.state = false;
    }
    if (this.poll() == 3 && this.state === true) {
      Recorders[3].stop;
      this.colour3 = this.colour3norm;
      this.state = false;
    }
  }

  this.playing = function(){
    SoundFiles[this.index].loop();
    console.log("playing");
  }



  }
