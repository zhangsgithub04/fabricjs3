// Wait for the fabric library to load
  document.addEventListener("DOMContentLoaded", function() {

    // Initialize canvas with Fabric.js
    var canvas = new fabric.Canvas('myCanvas');
/*
    // Create a rectangle object
    var rect = new fabric.Rect({
      left: 100, // Distance from left of canvas
      top: 100, // Distance from top of canvas
      fill: 'red',
      width: 200,
      height: 100
    });

    // Add the rectangle to the canvas
    canvas.add(rect);
  */

  

    
fabric.BitmapText.fromURL('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', function (text) {
  canvas.add(text);
}, {
  text: 'Example text'
});
   
  });
   
