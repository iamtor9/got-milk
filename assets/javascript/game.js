// JavaScript Vanilla function that wraps controls
window.addEventListener("load", (function() {
  charMovement();
  console.log("Onload, activate charmovement JS Vanilla");
}));

// This Variable is for the player
// Confused at what the class stick is referring to since it only appears here - How does it function? ~~ Daniel
var stickFigure = $(".stick");

//global variable to determine what sector of the world the player is in
let worldsector = 1;
console.log(worldsector, "world Sector");
// Function to test to see if the world sector ineger is being altered
function worldSector() {
  console.log(worldsector, "WORLDSECTOR TEST")
};
worldSector();






const testFunc = function testingThisFunction(i) {
  console.log("Yo this is a test" + i);
  // return console.log(i);
};














// This function is seperated so that we can disable it at some other point in time
// We have it first so we refer to it
function charMovement() {
  // changed to down so players can hold down the movement buttons to move quickly
  document.addEventListener("keydown", function(e) {
    var left = document.getElementById("stickfigure").offsetLeft;
    console.log(left)
    //Players vertical coordinate
    var top = document.getElementById("stickfigure").offsetTop;
    console.log(top)
    var player = document.getElementById("stickfigure");


    switch (e.which) {
      case 87: // Move Buttons (Keyboard Up)
        if(top === 109) {
          stickFigure.animate({ top: "-=0px" }, 1);
        }
        else { 
          // basic up movement
          stickFigure.animate({ top: "-=106.2px" }, 1);
        }
        for(let i = 0; i<4; i++) {
          testFunc(i);
        }
      break;



      case 65: // Move Buttons (Keyboard Left)
      // This is the left border only for the first sector
        if(left <= 115 && worldsector === 1) {
          stickFigure.animate({ left: "-=0px" }, 1);
        }
        else { // basic left movement
          stickFigure.animate({ left: "-=100.4px" }, 1);
        }

        // ==========================================
        // This is moving backwards between world sectors
        // when you this this pixel threshold
        if (left <= 13 && worldsector >= 2) {
          // move player to the right by this many pixels
          stickFigure.animate({left: "+1620px"}, 1);
          // decrease the worldSector number
          worldsector = worldsector-1;
          console.log(worldsector, "World Sector Number");
          console.log(worldSector());
        }
      break;



      case 83: // Move Buttons (Keyboard Down)
      // This is the border for the bottom
      if(top === 747) { 
        stickFigure.animate({ top: "+=0px" }, 1);
      }
      else { // basic down movement 
        stickFigure.animate({ top: "+=106.2px" }, 1);
      }
      break;



      case 68: // Move Buttons (Keyboard Right)
        // basic right movement
          stickFigure.animate({ left: "+=100.4px" }, 1);

        // ==========================================
        // This is for moving forwards between world sectors
        // when you pass this threshold,
          if (left > 1519) {
            // increase worldsector number
            worldsector = worldsector+1;
            // and move player back this many pixels to the left
            stickFigure.animate({ left: "-=1708px"}, 1);
            console.log(worldsector, "World Sector Number");
            console.log(worldSector());
          }
      break;



      default:
      break;

    }


  //Moves the player over to the next section
  // if (left > 1519) {
  //         worldsector = worldsector+1;
  //         player.style.left = 9.2+"px";
  //         console.log(worldsector);
  // }
  // else if (left < 8 && worldsector >= 2) {
  //         player.style.left = 1615.6+"px";
  //         worldsector = worldsector-1;
  //         console.log(worldsector);
  // }

  // Impassables
  // if (top >= 747) {
  //   player.style.top = 746.5+"px";
  //   // stickFigure.animate({ top: "+747px"}, 1);
  //   console.log("this happened");
  // }
  // if (top < 108) {
  //   player.style.top = 109.3+"px";
  // }

  // ==========================================
  // ==========================================
  // I dont know what these are for ~~ Daniel 
  // if (left < 108 && worldsector === 1) {
  //   player.style.left = 109.6+"px";
  // }
  //Walls for level 3
//   if (left >= 112 && top <= 109  && worldsector === 3) {
//     moveTop = noMoveTop;
//     // player.style.top = 534.1+"px";
//   }
//   if (left > 108 && top <= 220 && worldsector === 3) {
//       moveTop = noMoveTop    
//       // player.style.top = 215.5+"px";
//   }

//   //Walls for level 4
//   if (left < 612 && top === 640 && worldsector === 4) {
//     player.style.top = 534.1+"px";
//   }
//   if (left === 712 && top > 320 && worldsector === 4) {
//     player.style.left = 611.6+"px";
//   }
//   if (left > 812 && left < 1215 && top === 322 && worldsector === 4) {
//     player.style.top = 215.5+"px";
//   }
//   //Walls for level 5
//   if (left === 109 && top === 109 && worldsector === 5) {
//     player.style.top = 109.3+"px";
//     player.style.left = 9.2+"px";
//   };
  })
}

// ========================================================================================================================================
// ========================================================================================================================================
// //global variable to determine what sector of the world the player is in
// let worldsector = 1;
// console.log(worldsector);

//Constantly record and update player coordinates every 50 ms
// setInterval(function(){   
// //Players horizontal coordinate
// var left = document.getElementById("stickfigure").offsetLeft;
// console.log(left)
// //Players vertical coordinate
// var top = document.getElementById("stickfigure").offsetTop;
// console.log(top)
// var player = document.getElementById("stickfigure");


// //Moves the player over to the next section
// if (left > 1650) {
//          worldsector = worldsector+1;
//          player.style.left = 9.2+"px";
//          console.log(worldsector);
// }
// else if (left < 8 && worldsector >= 2) {
//          player.style.left = 1615.6+"px";
//          worldsector = worldsector-1;
//          console.log(worldsector);
// }
// else if (top > 748) {
//   player.style.top = 746.5+"px";
// }
// else if (top < 108) {
//   player.style.top = 109.3+"px";
// }
// else if (left < 108 && worldsector === 1) {
//   player.style.left = 109.6+"px";
// }
// //Walls for level 3
// else if (left > 108 && top === 640 && worldsector === 3) {
//   player.style.top = 534.1+"px";
// }
// else if (left > 108 && top < 120 && worldsector === 3) {
//   player.style.top = 215.5+"px";
// }
// //Walls for level 4
// else if (left < 612 && top === 640 && worldsector === 4) {
//   player.style.top = 534.1+"px";
// }
// else if (left === 712 && top > 320 && worldsector === 4) {
//   player.style.left = 611.6+"px";
// }
// else if (left > 812 && left < 1215 && top === 322 && worldsector === 4) {
//   player.style.top = 215.5+"px";
// }
// //Walls for level 5
// else if (left === 109 && top === 109 && worldsector === 5) {
//   player.style.top = 109.3+"px";
//   player.style.left = 9.2+"px";
// };
//                   }, 50);



// ========================================================================================================================================
// ========================================================================================================================================
// This is dynamically creates the map for the character to move on

function tileSet() {
for(let i = 0; i < 153; i++) {
  const tile = document.createElement("div");
  tile.classList.add("grid-item");
//Grass Tile IMG
  const img = document.createElement("img");
  img.setAttribute("src", "./assets/images/tiles/grass.png");
  img.setAttribute("class", "grass");
//Mount Rushmore IMG
  const neutral = document.createElement("img");
  neutral.setAttribute("src", "./assets/images/tiles/rock.png");
  neutral.setAttribute("class", "rock");
//Border Rock IMG
  const brock = document.createElement("img");
  brock.setAttribute("src", "./assets/images/tiles/rock.png");
  brock.setAttribute("class", "brock");
//Taxi IMG
  const taxi = document.createElement("img");
  taxi.setAttribute("src", "./assets/images/neutrals/taxi.png");
  taxi.setAttribute("class", "hide");
//Skull IMG
  const skull = document.createElement("img");
  skull.setAttribute("src", "./assets/images/neutrals/skull.png");
  skull.setAttribute("class", "hide");
//Fish IMG
  const fish = document.createElement("img");
  fish.setAttribute("src", "./assets/images/neutrals/fish.png");
  fish.setAttribute("class", "hide");
//Lava IMG
  const lava = document.createElement("img");
  lava.setAttribute("src", "./assets/images/tiles/fulllava.png");
  lava.setAttribute("class", "hide");
//Trump IMG
  const enemy = document.createElement("img");
  enemy.setAttribute("src", "./assets/images/presidents/trump.png");
  enemy.setAttribute("class", "politician");

// ==========================================
//Generates a rock border on the top of the world
//   and at the border on the bottom of the world
  if(i < 17 || i > 135) {
    tile.append(neutral);
  };
// ==========================================
//Generates a border on the left side of the world
  if(i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119)  {
  tile.append(brock);
  };
// ==========================================
//Generates taxi's for the third world
  // if(i > 18 && i < 34 || i > 102 && i < 119) {
  //   tile.append(taxi);
  //   };
// ==========================================
//Generates skulls for the fourth world
  // if(i > 101 && i < 110 || i > 57 && i < 64) {
  //   tile.append(skull);
  // };

  // if(i === 75 || i === 92 || i === 126) {
  //   tile.append(skull);
  // };
// ==========================================
//Generates fish for the sixth
  // if(i > 17 && i < 21 || i > 23 && i < 27 || i > 29 && i < 33 || i > 54 && i < 58 || 
  //    i > 60 && i < 64 || i > 68 && i < 85 || i > 88 && i < 92 || i > 94 && i < 98 || 
  //    i > 119 && i < 123 || i > 125 && i < 129 || i > 131 && i < 135) {
  //   tile.append(fish);
  // };

  // if(i === 36 || i === 39 || i === 42 || i === 45 || i === 48 || i === 67 || i === 101 || 
  //    i === 104 || i === 107 || i === 110 || i === 113 || i === 116) {
  //   tile.append(fish);
  // };
// ==========================================
//Generates lava for the sixth world
  // if(i > 68 && i < 85) {
  //   tile.append(lava);
  // };

  // if(i === 19 || i === 20 || i === 25 || i === 26 || i === 31 || i === 32 || i === 56 || i === 57 || 
  //   i === 62 || i === 63 || i === 86 || i === 92 || i === 98 || i === 120 || i === 126 || i === 132) {
  //   tile.append(lava);
  // };

// ========================================================================================================================================
// ========================================================================================================================================
  
  function myFunction() {
    setInterval(function(){
      // console.log("this is always tracking? YES IT IS - thats how the images are always changing regarless of the appended items from the function tileSet()");

      if(worldsector === 2){
        brock.style.display="none";
        img.setAttribute("src", "./assets/images/tiles/grass.png");
        neutral.setAttribute("src", "./assets/images/tiles/rock.png");
        neutral.setAttribute("class", "rock");
        taxi.setAttribute("class", "hide");
      }
      else if(worldsector === 1){
        brock.style.display="";
      }
      else if(worldsector === 3){
        img.setAttribute("src", "./assets/images/tiles/road.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/taxi.png");
        neutral.setAttribute("class", "taxi");
        taxi.setAttribute("class", "taxi");
        skull.setAttribute("class", "hide");

      }
      else if(worldsector === 4){
        img.setAttribute("src", "./assets/images/tiles/dessert2.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/skull.png");
        neutral.setAttribute("class", "skull");
        skull.setAttribute("class", "skull");
        taxi.setAttribute("class", "hide");
        fish.setAttribute("class", "hide");
      }
      else if(worldsector === 5){
        img.setAttribute("src", "./assets/images/tiles/water.png");
        neutral.setAttribute("src", "./assets/images/neutrals/fish.png");
        neutral.setAttribute("class", "fish");
        skull.setAttribute("class", "hide");
        fish.setAttribute("class", "fish");
        lava.setAttribute("class", "hide");
      }
      else if(worldsector === 6){
        img.setAttribute("src", "./assets/images/tiles/lava.png");
        neutral.setAttribute("src", "./assets/images/tiles/fulllava.png");
        neutral.setAttribute("class", "fulllava");
        fish.setAttribute("class", "hide");
        lava.setAttribute("class", "fulllava");
      };
    }, 50);
  }
  myFunction();


  let rng = Math.floor(Math.random() * 31);

  //let neutralGenerator = rng
  //if(neutralGenerator === 15 && neutralGenerator !== 17) {
    //tile.append(neutral);
  //};

  let enemyGenerator = rng
  if(i > 17 && i < 135 && i !== 17 && i !== 34 && i !== 51 && i !== 68 && i !== 85 && i !== 102 && i !== 119) {
    if(enemyGenerator === 17 && enemyGenerator !== 15) {
      tile.append(enemy);
    }
  };

  tile.append(img);
  document.querySelector(".grid-container").append(tile);
};
};

tileSet();




// ========================================================================================================================================
// ========================================================================================================================================

// function enemyGenerator() {
//   const tile = document.createElement("div");
//   tile.classList.add("grid-item");

//   if(worldsector === 1) {
//     for(let i = 0; i < 153; i++) {
//       const enemy = document.createElement("img");
//       enemy.setAttribute("src", "./assets/images/presidents/trump.png");
//       enemy.setAttribute("class", "politician");

//       if(i > 17 && i < 135) {
//         let rng = Math.floor(Math.random() * 41);
//         console.log(rng);
//         if(rng === 17) {
//           tile.append(enemy);
//         }
//       }
//     }
//   }
// }
// enemyGenerator();