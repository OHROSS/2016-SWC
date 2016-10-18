var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

drawingPad.beginPath();
drawingPad.moveTo(0,450);
drawingPad.lineTo(230,0);
drawingPad.lineTo(400,375);
drawingPad.lineTo(350,375);
drawingPad.lineTo(230,100);
drawingPad.lineTo(40,500);
drawingPad.lineTo(0,450);
drawingPad.strokeStyle="black";
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.moveTo(230,0);
drawingPad.lineTo(290,0);
drawingPad.lineTo(500,450);
drawingPad.lineTo(190,450);
drawingPad.lineTo(220,375);
drawingPad.lineTo(350,375);
drawingPad.strokeStyle="black";
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.moveTo(450,500);
drawingPad.lineTo(500,450);
drawingPad.lineTo(190,450);
drawingPad.lineTo(281,220);
drawingPad.strokeStyle="black";
drawingPad.stroke();
