var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var OHROSS = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

OHROSS.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}

//OHROSS.drawArm = function(ctx, left) {};

//OHROSS.drawLeg = function(ctx, left) {};


OHROSS.drawTop = function(ctx) {
  // draw a round head:
  // ctx.beginPath();
  // ctx.arc(horizontalCenter, 120, 120, 0, circleDegrees);
  // ctx.fill();
  drawImage('finalhead.jpg', ctx, 0, 0);
};

OHROSS.drawMiddle = function(ctx) {
  //OHROSS.drawArm(ctx, true);
  //OHROSS.drawArm(ctx, false);
  // draw the rest of the body...
  drawImage('torso1.jpg', ctx, 0, 270);
};

OHROSS.drawBottom = function(ctx) {
  //OHROSS.drawLeg(ctx, true);
  //OHROSS.drawLeg(ctx, false);
  drawImage('legs.JPG', ctx, 0, 540);
};

OHROSS.drawCorpse = function(ctx) {
  OHROSS.drawTop(ctx);
  OHROSS.drawMiddle(ctx);
  OHROSS.drawBottom(ctx);
  OHROSS.drawGrid(ctx);
};

window.OHROSS = OHROSS;
