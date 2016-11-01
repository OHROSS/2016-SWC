var ctx = document.getElementById('canvas').getContext('2d');
var draw = function(x,y){
  ctx.fillRect(x,y,10,10);
};

var mouseMoveHandler = function(event){
  draw(event.pageX,event.pageY)
  $('#mouseInfo').text(event.pageX);
};


document.addEventListener('mousemove', mouseMoveHandler);
