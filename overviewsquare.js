function OverViewSquare(){

  this.padding = (width/20);

  this.display = function(){
    console.log("yo");
    var padding = this.padding;
    fill(color(44,5,90));
    rect(padding,((height/2)+padding),width-(2*padding),(height/3+(3*padding)));
  }

  this.drawLines = function(tempLineDirection){
    var padding = this.padding;
    var lineDirection = tempLineDirection;
    if (lineDirection == "NE") {
      stroke(color(352,100,61))
      strokeWeight(20);
      line(padding,height-padding,width-padding,height/2+padding);
      strokeWeight(4);
      stroke(44,5,90);
    }
    if (lineDirection == "E") {
      var offsetY = (height/2+padding);
      stroke(color(39,78,88));
      for (var i=20; i<(height-(offsetY+60)); i+=30) {
         line(padding,offsetY+i,(width-padding),offsetY+i);
       }
       stroke(44,5,90);
    }
    if (lineDirection == "SE") {
      stroke(color(350,100,23));
      strokeWeight(20);
      line(padding,(height/2+padding),width-padding,height-padding);
      strokeWeight(4);
      stroke(44,5,90);
    }
    if (lineDirection == "N") {
      var offsetX = padding;
      stroke(color(17,86,92));
      for (var j=30; j<(width-offsetX-60); j+=30) {
         line((offsetX+j),((height/2)+(padding)),(offsetX+j),height-padding*2);
       }
       stroke(44,5,90);
    }
  }

}
