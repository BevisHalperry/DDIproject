function OverViewSquare(){

  this.display = function(){
    console.log("yo");
    var padding = (width/20);
    fill(0);
    rect(padding,((height/2)+padding),width-(2*padding),height-(padding));
  }

  this.update = function(){

  }

}
