// JavaScript function that wraps controls
$(document).ready(function() {

  var stickFigure = $(".stick");

//   $(this).keypress(e=>
//     e.which==38?
//     alert('hi.'):null
// );



// ====================================================================================
// ====================================================================================
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


// ====================================================================================
// ====================================================================================
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

// ====================================================================================
// ====================================================================================
// This is dynamically creates the map for the character to move on
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


// ====================================================================================
// ====================================================================================
// API Keys & Codes

// Deezer API (a music catalog)
//  https://developers.deezer.com/api Link to the documentation



// Tronald Dump (API with all the dumb things that He has ever said)
// https://docs.tronalddump.io/#quotes Link to Documentation




// Giphy API (Using it for the attack animations that we will have)
// https://developers.giphy.com/docs/api/endpoint#search Link to Documentation
function callGiphy() {

  // ====================================================================================
  // We're letting carebear to be = to gif rn because we haven't set up variables to equal alot of characters atm
  let gif = "carebear"
  // ====================================================================================

  const APIKey = "SF5z5yrS08Hg6RXmKUUTuAVDOH4j0GqG";
  let amount = 100;
  // We want to create a const that is equal to the query that we are going to reference
  const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + APIKey + "&limit=" + amount;
  console.log(queryURL, "FULL LINK TO URL");

  fetch(queryURL).then(function(response) {
    return response.json();
  }).then(function(responseJSON) {
    const results = responseJSON.data;
    console.log(results);

    // We need to find the right kind of carebear animation, so we need a for loop for these things
    const gifContainer = document.createElement("div");
    gifContainer.setAttribute("class", "flex");

    for( let i = 0; i < results.length; i++) {
      const gifDiv = docuemnt.createElement("div");
      const gifImg = document.createElement("img");

      gifImg.setAttribute("src", results[i].images.fixed_height_still.url);

    }


  })
}

callGiphy();
