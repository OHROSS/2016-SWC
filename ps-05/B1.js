var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

drawingPad.beginPath();
drawingPad.moveTo(0,0);
for( var y=0; y < 500; y++){
  drawingPad.beginPath();
  drawingPad.moveTo(0,0);
  drawingPad.lineTo(500,y);
  drawingPad.strokeStyle="black";
  drawingPad.stroke();
}
