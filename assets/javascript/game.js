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
var player = document.getElementById("stickfigure");
if (top < 113){
  console.log("too far")
      player.style.top = 114.3+"px";
};
                  }, 50);

function tileSet() {
for(let i = 0; i < 153; i++) {
  const tile = document.createElement("div");
  tile.classList.add("grid-item");
  console.log(tile);

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/images/grass.png");
  img.setAttribute("class", "grass");
  console.log(img);

  const neutral = document.createElement("img");
  neutral.setAttribute("src", "./assets/images/rock.png");
  neutral.setAttribute("class", "rock");
  console.log(neutral);

  const enemy = document.createElement("img");
  enemy.setAttribute("src", "./assets/images/trump.png");
  enemy.setAttribute("class", "politician");
  console.log(enemy);

  if(i < 17) {
    tile.append(neutral);
  }

  if(i === 0 || i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119 || i === 136) {
  tile.append(neutral);
}

  let rng = Math.floor(Math.random() * 41);

  let neutralGenerator = rng
  if(neutralGenerator === 15 && neutralGenerator !== 17) {
    tile.append(neutral);
  }

  let enemyGenerator = rng
  if(enemyGenerator === 17 && enemyGenerator !== 15) {
    tile.append(enemy);
  }

  tile.append(img);
  document.querySelector(".grid-container").append(tile);
}
}

tileSet();


