var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');


for( var y=0; y < 333; y++){
  drawingPad.beginPath();
  drawingPad.moveTo(167,0);
  drawingPad.lineTo(500,y);
  drawingPad.strokeStyle="black";
  drawingPad.stroke();
}

for( var x=0; x < 333; x++){
  drawingPad.beginPath();
  drawingPad.moveTo(0,167);
  drawingPad.lineTo(x,500);
  drawingPad.strokeStyle="black";
  drawingPad.stroke();
}
