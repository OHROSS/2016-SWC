var ctx1 = document.getElementById("RandomWalk1").getContext('2d');
var ctx2 = document.getElementById("RandomWalk2").getContext('2d');


var beginX = 0;
var beginY = 0;



  var clearScreen1 = function(can) {
  can.fillStyle = "hsla(0,10%,100%,0.6)";
  can.fillRect(0,0,600,600)

    };

var drawDot1 = function () {
  ctx1.rotate(90*Math.PI/180);
  clearScreen1(ctx1);
  var size = 100;
  var hue = Math.random();

  function blank() {
    hue = hue + 10 * Math.random();
  };
  setInterval(blank, 100);
  ctx1.fillStyle = 'hsl(' + hue + ', 60%, 80%)';


  ctx1.strokeStyle = ''
  ctx1.beginPath();
  ctx1.arc(beginX,beginY,beginX,beginY,4*Math.PI);
  beginX = beginX + 50;
  if(beginX > 590) {
    beginX = 0;
    beginY = beginY + 50;

  }
  if (beginY > 600) {
    beginY = 0;

  }
  ctx1.fill();
  };

var drawDot2 = function () {
  ctx2.rotate(30*Math.PI/180);
  clearScreen1(ctx2);
  var size = 100;
  var hue = Math.random();

  function blank() {
    hue = hue + 10 * Math.random();
  };
  setInterval(blank, 100);
  ctx2.fillStyle = 'hsl(' + hue + ', 60%, 80%)';


  ctx2.strokeStyle = ''
  ctx2.beginPath();
  ctx2.arc(beginX,beginY,beginX,beginY,4*Math.PI);
  beginX = beginX + 50;
  if(beginX > 590) {
    beginX = 0;
    beginY = beginY + 50;

  }
  if (beginY > 600) {
    beginY = 0;

  }
  ctx2.fill();
  };


setInterval(drawDot1, 50);
setInterval(drawDot2, 50);
 
