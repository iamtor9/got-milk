// JavaScript function that wraps controls
$(document).ready(function() {

    var stickFigure = $(".stick");

    $(this).keypress(e=>
      e.which==38?
      alert('hi.'):null
  );


    // Keyboard move controls
    $(document).keyup(function(e) {
      switch (e.which) {

      // Move Buttons (Keyboard Down)
      case 83:
        stickFigure.animate({ top: "+=106.2px" }, 150);
        break;

        // Move Buttons (Keyboard Right)
      case 68:
        stickFigure.animate({ left: "+=100.4px" }, 150);
        break;

        // Move Buttons (Keyboard Up)
      case 87:
        stickFigure.animate({ top: "-=106.2px" }, 150);
        break;

        // Move Buttons (Keyboard Left)
      case 65:
        stickFigure.animate({ left: "-=100.4px" }, 150);
        break;

      default:
        break;
      }
    });
  });

//Constantly record and update player coordinates every 50 ms
setInterval(function(){ 
var left = document.getElementById("stickfigure").offsetLeft;
console.log(left);
var top = document.getElementById("stickfigure").offsetTop;
console.log(top); 
                  }, 50);

