var c = document.querySelector("#c");
  //initial
  var w = c.width = 1000,
  h = c.height = 500,
  ctxr = c.getContext('2d'),

  //parameters
  total = w,
  accelleration = .05,

  //afterinitial calculations
  size = w/total,
  occupation = w/total,
  repaintColor = 'rgba(0, 0, 0, .04)'
  colors = [],
  dots = [],
  dotsVel = [];

//setting the colors' hue
//and y level for all dots
var portion = 360/total;
for(var i = 0; i < total; ++i){
colors[i] = portion * i;

dots[i] = h;
dotsVel[i] = 10;
}
const section = document.querySelector('.ex2-container');

function anim(){
  if(!section.hasAttribute('hidden')){
    window.requestAnimationFrame(anim);
  }
  ctxr.fillStyle = repaintColor;
  ctxr.fillRect(0, 0, w, h);

  for(var i = 0; i < total; ++i){
    var currentY = dots[i] - 1;
    dots[i] += dotsVel[i] += accelleration;

    ctxr.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
    ctxr.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

    if(dots[i] > h && Math.random() < .01){
      dots[i] = dotsVel[i] = 0;
    }
  }
}
section.addEventListener('click', anim);
