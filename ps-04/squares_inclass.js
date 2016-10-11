// Declaring two variables below

var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');
drawingPad.fillStyle = "#FFffff";
drawingPad.fillRect(190, 190, 40, 40);
drawingPad.fillStyle = "#FFffff";
drawingPad.fillRect(310, 310, 160, 160);

for (var x =0; x<=9; x++){
  for(var y=0; y<=9; y++){
    drawingPad.strokestyle="#ffffff";
    drawingPad.strokeRect(x*50, y*50, 48, 48);

  }

}

  // drawingPad fill Rect (x,y,width,height)
  //hsla(x,y%,z, a) x - number between 0 and 360,y is 0 - 100 (0 means greyscale), z is 0-100 (o means dark, 100 means light), a is 0 to 1 (0 is transparent, 1 is solid)
