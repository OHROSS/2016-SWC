// Declaring two variables below

  var canvas = document.getElementById('canvas');
  var drawingPad = canvas.getContext('2d');
  drawingPad.fillStyle = "#FF0000";
  drawingPad.fillRect(190, 190, 40, 40);
  drawingPad.fillStyle = "#FF0100";
  drawingPad.fillRect(230, 230, 80, 80);
  drawingPad.fillStyle = "#FF0360";
  drawingPad.fillRect(310, 310, 160, 160);
  // drawingPad fill Rect (x,y,width,height)
