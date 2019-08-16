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
      stickFigure.animate({ top: "+=106.2px" }, 1);
      break;

      // Move Buttons (Keyboard Right)
    case 68:
      stickFigure.animate({ left: "+=100.4px" }, 1);
      break;

      // Move Buttons (Keyboard Up)
    case 87:
      stickFigure.animate({ top: "-=106.2px" }, 1);
      break;

      // Move Buttons (Keyboard Left)
    case 65:
      stickFigure.animate({ left: "-=100.4px" }, 1);
      break;

    default:
      break;
    }
  });
});

//global variable to determine what sector of the world the player is in
let worldsector = 1;
console.log(worldsector);

//Constantly record and update player coordinates every 50 ms
setInterval(function(){   
//Players horizontal coordinate
var left = document.getElementById("stickfigure").offsetLeft;

//Players vertical coordinate
var top = document.getElementById("stickfigure").offsetTop;
var player = document.getElementById("stickfigure");

//Moves the player over to the next section
if (left > 1617) {
         worldsector = worldsector+1;
         player.style.left = 9.2+"px";
         console.log(worldsector);
}
else if (left < 9.2 && worldsector >= 2) {
         player.style.left = 1615.6+"px";
         worldsector = worldsector-1;
         console.log(worldsector);
}
else if (left < 108 && worldsector === 1) {
  player.style.left = 109.6+"px";
};

                  }, 50);

function tileSet() {
for(let i = 0; i < 153; i++) {
  const tile = document.createElement("div");
  tile.classList.add("grid-item");

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/images/grass.png");
  img.setAttribute("class", "grass");

  const neutral = document.createElement("img");
  neutral.setAttribute("src", "./assets/images/rock.png");
  neutral.setAttribute("class", "rock");

  const enemy = document.createElement("img");
  enemy.setAttribute("src", "./assets/images/trump.png");
  enemy.setAttribute("class", "politician");

  if(i < 17) {
    tile.append(neutral);
  };

  if(i > 135) {
    tile.append(neutral);
  };

  if(i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119) {
  tile.append(neutral);
};

  let rng = Math.floor(Math.random() * 41);

  let neutralGenerator = rng
  if(neutralGenerator === 15 && neutralGenerator !== 17) {
    tile.append(neutral);
  };

  let enemyGenerator = rng
  if(enemyGenerator === 17 && enemyGenerator !== 15) {
    tile.append(enemy);
  };

  tile.append(img);
  document.querySelector(".grid-container").append(tile);
};
};

tileSet();


