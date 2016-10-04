// Declaring two variables below

  var canvas1 = document.getElementById('canvas');
  var canvas2 = document.getElementById('canvas');
  var canvas3 = document.getElementById('canvas');
  var drawingPad1 = canvas.getContext('2d');
  var drawingPad2 = canvas.getContext('2d');
  var drawingPad3 = canvas.getContext('2d');
  drawingPad1.fillStyle = "#FF0000";
  drawingPad2.fillStyle = "#FF0100";
  drawingPad3.fillStyle = "#FF0360";
  // drawingPad fill Rect (x,y,width,height)

  drawingPad1.fillRect(190, 190, 40, 40);
  drawingPad2.fillRect(230, 230, 80, 80);
  drawingPad3.fillRect(310, 310, 160, 160);
