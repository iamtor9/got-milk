// JavaScript function that wraps everything
$(document).ready(function() {

    var stickFigure = $(".stick");


    // Keyboard move controls
    $(document).keyup(function(e) {
      switch (e.which) {

      // Move Buttons (Keyboard Down)
      case 40:
        stickFigure.animate({ top: "+=106.2px" }, 150);
        break;

        // Move Buttons (Keyboard Right)
      case 39:
        stickFigure.animate({ left: "+=100.4px" }, 150);
        break;

        // Move Buttons (Keyboard Up)
      case 38:
        stickFigure.animate({ top: "-=106.2px" }, 150);
        break;

        // Move Buttons (Keyboard Left)
      case 37:
        stickFigure.animate({ left: "-=100.4px" }, 150);
        break;

      default:
        break;
      }
    });
  });