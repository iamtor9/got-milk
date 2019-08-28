//game variables
lock = false
hp = 100
atk = 1
def = 1
exp = 0

putinhealth = 50

//Function to disable reactivation of trumps textbox
function TrumpFunction() {
  document.getElementById("trumptextbox").style.display = "none";
  trumpbox = false;
  lock = false;
};

//Function to disable reactivation of obamas textbox
function ObamaFunction() {
  document.getElementById("obamatextbox").style.display = "none";
  obamabox = false;
  lock = false;
};

//Function to disable reactivation of putins textbox
function PutinFunction() {
  document.getElementById("putintextbox").style.display = "none";
  putinbox = false;
  lock = false;
  exp = exp + 50;
};

//Function to fight putin
function putinfight() {
putinhealth = putinhealth - Math.floor(Math.random() * 10) - atk;

hp = hp - Math.floor(Math.random() * 10);
};

// JavaScript function that wraps controls
var stickFigure = $(".stick");
$(document).ready(function() {
  // Keyboard move controls
  $(document).keyup(function(e) {

if (lock === false){
      move(e);
};

  });
});

function move(e) {
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
  }



//global variable to determine what sector of the world the player is in
let worldsector = 1;
//Variables for text boxes. True means they can be activated.
let trumpbox = true;
let obamabox = true;
let putinbox = true;

//Constantly record and update player coordinates every 50 ms
setInterval(function(){   
//Players horizontal coordinate
var left = document.getElementById("stickfigure").offsetLeft;
console.log(left)
//Players vertical coordinate
var top = document.getElementById("stickfigure").offsetTop;
console.log(top)
var player = document.getElementById("stickfigure");

document.getElementById("php").innerHTML = "Health: " + hp;
document.getElementById("pexp").innerHTML = "EXP: " + exp;


//Moves the player over to the next section
if (left > 1650) {
         worldsector = worldsector+1;
         player.style.left = 9.2+"px";
         console.log(worldsector);
}
else if (left < 8 && worldsector >= 2) {
         player.style.left = 1615.6+"px";
         worldsector = worldsector-1;
         console.log(worldsector);
}
else if (top > 748) {
  player.style.top = 746.5+"px";
}
else if (top < 108) {
  player.style.top = 109.3+"px";
}
else if (left < 108 && worldsector === 1) {
  player.style.left = 109.6+"px";
}
//Interaction for level 1
else if (left === 712 && top === 428 && worldsector === 1 && trumpbox === true) {
  document.getElementById("trumptextbox").style.display = "block";
  document.getElementById("trump").style.display = "none";
  lock = true;
}
//Interaction for level 2
else if (left === 712 && top === 322 && worldsector === 2 && obamabox === true) {
  document.getElementById("obamatextbox").style.display = "block";
  document.getElementById("obama").style.display = "none";
  lock = true;
}
//Interaction for level 3
else if (left === 1013 && top === 428 && worldsector === 3 && putinbox === true) {
  document.getElementById("putintextbox").style.display = "block";
  document.getElementById("putin").style.display = "none";
  document.getElementById("health").innerHTML = hp;
  document.getElementById("putinhealth").innerHTML = putinhealth;
  lock = true

  if (putinhealth <= 0) {
    document.getElementById("putinhealth").style.display = "none";
    document.getElementById("endbuttonfight").style.display = "block";
    document.getElementById("attack").style.display = "none";
  };

}
//Walls for level 3
else if (left > 108 && top === 640 && worldsector === 3) {
  player.style.top = 534.1+"px";
}
else if (left > 108 && top < 120 && worldsector === 3) {
  player.style.top = 215.5+"px";
}
//Walls for level 4
else if (left < 616 && top === 640 && worldsector === 4) {
  player.style.top = 534.1+"px";
}
else if (left > 812 && left < 1219 && top === 322 && worldsector === 4) {
  player.style.top = 215.5+"px";
}
else if (left > 812 && left < 1219 && top === 428 && worldsector === 4) {
  player.style.top = 534.1+"px";
}
else if (left === 712 && top > 321 && worldsector === 4) {
  player.style.left = 611.6+"px";
}
else if (left === 817 && top === 640 && worldsector === 4) {
  player.style.left = 916.8+"px";
}
else if (left === 817 && top === 534 && worldsector === 4) {
  player.style.left = 916.8+"px";
}
else if (left === 817 && top === 747 && worldsector === 4) {
  player.style.left = 916.8+"px";
}
else if (left === 611 && top === 747 && worldsector === 4) {
  player.style.top = 534.1+"px";
}
else if (left === 813 && top > 533 && worldsector === 4) {
  player.style.left = 912.8+"px";
}
//Walls for level 5
else if (left === 109 && top === 109 && worldsector === 5) {
  player.style.left = 9.2+"px";
}
else if (left === 311 && top === 109 && worldsector === 5) {
  player.style.left = 9.2+"px";
}
else if (left === 712 && top === 109 && worldsector === 5) {
  player.style.left = 611.6+"px";
}
else if (left === 913 && top === 109 && worldsector === 5) {
  player.style.left = 611.6+"px";
}
else if (left === 1315 && top === 109 && worldsector === 5) {
  player.style.left = 1214+"px";
}
else if (left === 1515 && top === 109 && worldsector === 5) {
  player.style.left = 1214+"px";
}
else if (left === 210 && top === 215 && worldsector === 5) {
  player.style.left = 109.6+"px";
}
else if (left === 511 && top === 215 && worldsector === 5) {
  player.style.left = 410.8+"px";
}
else if (left === 813 && top === 215 && worldsector === 5) {
  player.style.left = 712+"px";
}
else if (left === 1113 && top === 215 && worldsector === 5) {
  player.style.left = 1013.2+"px";
}
else if (left === 1415 && top === 215 && worldsector === 5) {
  player.style.left = 1314.5+"px";
}
else if (left === 411 && top === 322 && worldsector === 5) {
  player.style.left = 310.4+"px";
}
else if (left === 611 && top === 322 && worldsector === 5) {
  player.style.left = 310.4+"px";
}
else if (left === 1013 && top === 322 && worldsector === 5) {
  player.style.left = 912.8+"px";
}
else if (left === 1214 && top === 322 && worldsector === 5) {
  player.style.left = 912.8+"px";
}
else if (left === 1615 && top === 322 && worldsector === 5) {
  player.style.left = 1515.2+"px";
}
else if (left > 108 && top === 428 && worldsector === 5) {
  player.style.left = 9.2+"px";
}
else if (left === 411 && top === 534 && worldsector === 5) {
  player.style.left = 310.4+"px";
}
else if (left === 611 && top === 534 && worldsector === 5) {
  player.style.left = 310.4+"px";
}
else if (left === 1013 && top === 534 && worldsector === 5) {
  player.style.left = 912.8+"px";
}
else if (left === 1214 && top === 534 && worldsector === 5) {
  player.style.left = 912.8+"px";
}
else if (left === 1615 && top === 534 && worldsector === 5) {
  player.style.left = 1515.2+"px";
}
else if (left === 210 && top === 640 && worldsector === 5) {
  player.style.left = 109.6+"px";
}
else if (left === 511 && top === 640 && worldsector === 5) {
  player.style.left = 410.8+"px";
}
else if (left === 813 && top === 640 && worldsector === 5) {
  player.style.left = 712+"px";
}
else if (left === 1113 && top === 640 && worldsector === 5) {
  player.style.left = 1013.2+"px";
}
else if (left === 1415 && top === 640 && worldsector === 5) {
  player.style.left = 1314.4+"px";
}
else if (left === 109 && top === 747 && worldsector === 5) {
  player.style.left = 9.2+"px";
}
else if (left === 311 && top === 747 && worldsector === 5) {
  player.style.left = 9.2+"px";
}
else if (left === 712 && top === 747 && worldsector === 5) {
  player.style.left = 611.6+"px";
}
else if (left === 913 && top === 747 && worldsector === 5) {
  player.style.left = 611.6+"px";
}
else if (left === 1315 && top === 747 && worldsector === 5) {
  player.style.left = 1214+"px";
}
else if (left === 1515 && top === 747 && worldsector === 5) {
  player.style.left = 1214+"px";
}
//Walls for level 6
else if (left === 210 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 311 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 813 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 913 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1415 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1515 && top === 109 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 511 && top === 322 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 611 && top === 322 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1113 && top === 322 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1214 && top === 322 && worldsector === 6) {
  hp = hp-2;
}
else if (left > 108 && top === 428 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 109 && top === 534 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 712 && top === 534 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1315 && top === 534 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 109 && top === 747 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 712 && top === 747 && worldsector === 6) {
  hp = hp-2;
}
else if (left === 1315 && top === 747 && worldsector === 6) {
  hp = hp-2;
};
                  }, 25);

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
  const trump = document.createElement("img");
  trump.setAttribute("src", "./assets/images/presidents/trump.png");
  trump.setAttribute("class", "politician");
  trump.setAttribute("Id", "trump");
//Obama IMG
  const obama = document.createElement("img");
  obama.setAttribute("src", "./assets/images/presidents/obama.png");
  obama.setAttribute("class", "hide");
  obama.setAttribute("Id", "obama");
  //Putin IMG
  const putin = document.createElement("img");
  putin.setAttribute("src", "./assets/images/presidents/putin.png");
  putin.setAttribute("class", "hide");
  putin.setAttribute("Id", "putin");
//Generates a rock border on the top of the world
  if(i < 17) {
    tile.append(neutral);
  };
//Generates a rock border on the bottom of the world
  if(i > 135) {
    tile.append(neutral);
  };
  //Generates a Trump
  if(i === 75) {
    tile.append(trump);
  };
  //Generates a Obama
  if(i === 58) {
    tile.append(obama);
  };
  //Generates a Putin
  if(i === 78) {
    tile.append(putin);
  };
//Generates a border on the left side of the world
  if(i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119) {
  tile.append(brock);
  };
//Generates taxi's for the third world
if(i === 19 || i === 20 || i === 21 || i === 22 || i === 23 || i === 24 || i === 25 || i === 26 || i === 27 || i === 28 || i === 29 || i === 30 || i === 31 || i === 32 || i === 33 || i === 103 || i === 104 || i === 105 || i === 106 || i === 107 || i === 108 || i === 109 || i === 110 || i === 111 || i === 112 || i === 113 || i === 114 || i === 115 || i === 116 || i === 117 || i === 118) {
  tile.append(taxi);
  };
//Generates skulls for the fourth world
if(i === 102 || i === 103 || i === 104 || i === 105 || i === 106 || i === 107 || i === 108 || i === 109 || i === 125 || i === 126 || i === 92 || i === 75 || i === 58 || i === 59 || i === 60 || i === 61 || i === 62 || i === 63 || i === 76 || i === 77 || i === 78 || i === 79 || i === 80 || i === 93 || i === 110 || i === 127) {
  tile.append(skull);
  };
//Generates fish for the fifth world
if(i === 69 || i === 70 || i === 71 || i === 72 || i === 73 || i === 74 || i === 75 || i === 76 || i === 77 || i === 78 || i === 79 || i === 80 || i === 81 || i === 82 || i === 83 || i === 84 || i === 18 || i === 19 || i === 20 || i === 36 || i === 55 || i === 56 || i === 57 || i === 39 ||i === 24 || i === 25 || i === 42 || i === 26 || i === 61 || i === 62 || i === 63 || i === 45 ||i === 30 || i === 31 || i === 48 || i === 32 || i === 67 || i === 120 || i === 121 || i === 122 || i === 104 || i === 126 || i === 127 || i === 128 || i === 110 || i === 132 || i === 133 || i === 134 || i === 116 || i === 89 || i === 90 || i === 91 || i === 107 || i === 95 || i === 96 || i === 97 || i === 113 || i === 101 ){
  tile.append(fish);
  };
  //Generates lava for the sixth world
if(i === 69 || i === 70 || i === 71 || i === 72 || i === 73 || i === 74 || i === 75 || i === 76 || i === 77 || i === 78 || i === 79 || i === 80 || i === 81 || i === 82 || i === 83 || i === 84 || i === 20 || i === 19 || i === 56 || i === 57 || i === 26 || i === 25 || i === 62 || i === 63 ||i === 32 || i === 31 || i === 120 || i === 86 || i === 126 || i === 92 || i === 132 || i === 98) {
  tile.append(lava);
  };
  function myFunction() {
    setInterval(function(){
      if(worldsector === 2){
        brock.style.display="none";
        img.setAttribute("src", "./assets/images/tiles/grass.png");
        neutral.setAttribute("src", "./assets/images/tiles/rock.png");
        trump.setAttribute("class", "hide");
        obama.setAttribute("class", "obama");
        taxi.setAttribute("class", "hide");
        putin.setAttribute("class", "hide");
      }
      else if(worldsector === 1){
        brock.style.display="";
        obama.setAttribute("class", "hide");
        trump.setAttribute("class", "politician");
      }
      else if(worldsector === 3){
        img.setAttribute("src", "./assets/images/tiles/road.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/taxi.png");
        neutral.setAttribute("class", "taxi");
        taxi.setAttribute("class", "taxi");
        skull.setAttribute("class", "hide");
        obama.setAttribute("class", "hide");
        putin.setAttribute("class", "putin");

      }
      else if(worldsector === 4){
        img.setAttribute("src", "./assets/images/tiles/dessert2.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/skull.png");
        neutral.setAttribute("class", "skull");
        skull.setAttribute("class", "skull");
        taxi.setAttribute("class", "hide");
        fish.setAttribute("class", "hide");
        putin.setAttribute("class", "hide");
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
    }, 10);
  }
  myFunction();

  //let rng = Math.floor(Math.random() * 41);

  //let neutralGenerator = rng
  //if(neutralGenerator === 15 && neutralGenerator !== 17) {
    //tile.append(neutral);
  //};

  //let trumpGenerator = rng
  //if(trumpGenerator === 17 && trumpGenerator !== 15) {
    //tile.append(trump);
  //};

  tile.append(img);
  document.querySelector(".grid-container").append(tile);
};
};

tileSet();