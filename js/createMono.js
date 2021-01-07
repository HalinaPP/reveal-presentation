var canvasImage = document.getElementById("ex3");
var cEx3 = canvasImage.getContext("2d");
var img = new Image();

img.onload = function() {
   //draw the image to the canvas
   cEx3.drawImage(img,0,0);
   //get the canvas data
   var data = cEx3.getImageData(0,0,canvasImage.width,canvasImage.height);
   //invert each pixel
   for(n=0; n<data.width*data.height; n++) {
      var index = n*4;
      var r = data.data[index];
      var g = data.data[index+1];
      var b = data.data[index+2];
      var v = r*0.21+g*0.71+b*0.07;
      // weighted average
      data.data[index]   = v;
      data.data[index+1] = v;
      data.data[index+2] = v;
      //don't touch the alpha
 }
    //set the data back
    cEx3.putImageData(data,0,0);
 }
 img.src = "./images/colors.jpg";
