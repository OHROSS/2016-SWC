// Declaring two variables below

var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

drawingPad.beginPath();
for (var x=0; x<=333; x++){
  for(var y=0; y<=333; y++){
    drawingPad.moveTo(x,y);
    drawingPad.lineTo(x,y+1);
    drawingPad.strokeStyle="white";
    drawingPad.stroke();

  }

}

  // drawingPad fill Rect (x,y,width,height)
  //hsla(x,y%,z, a) x - number between 0 and 360,y is 0 - 100 (0 means greyscale), z is 0-100 (o means dark, 100 means light), a is 0 to 1 (0 is transparent, 1 is solid)
