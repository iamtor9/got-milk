//game variables
let lock = false
let hp = 100
let maxhp = 100
let atk = 1
let def = 1
let exp = 0

let putinhealth = 70
let reaganhealth = 60
let kimhealth = 40
let hillaryhealth = 50
let borishealth = 55
let duthealth = 35
let mikehealth = 75
let trump2health = 150


  document.addEventListener("click", function (event){
    console.log(event);
    if (event.target === document.querySelector(".character1")) {
      document.getElementById("stickfigure").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear2").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear3").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear4").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear5").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear6").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear7").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("battlebear8").src = "./assets/images/carebears/grumpy-bear.png";
      // document.getElementById("battlebear9").src = "./assets/images/carebears/grumpy-bear.png";
      // document.getElementById("battlebear10").src = "./assets/images/carebears/grumpy-bear.png";
      document.getElementById("profile").setAttribute("class", "icon1");
      atk = 7;
      def = 2;
      document.getElementById("pdef").innerHTML = "Defense: " + def;
      document.getElementById("patk").innerHTML = "Attack: " + atk;
  }
  });

  document.addEventListener("click", function (event){
    console.log(event);
    if (event.target === document.querySelector(".character2")) {
      document.getElementById("stickfigure").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear2").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear3").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear4").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear5").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear6").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear7").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("battlebear8").src = "./assets/images/carebears/lovealot-bear.png";
      // document.getElementById("battlebear9").src = "./assets/images/carebears/lovealot-bear.png";
      // document.getElementById("battlebear10").src = "./assets/images/carebears/lovealot-bear.png";
      document.getElementById("profile").setAttribute("class", "icon2");
      atk = 2;
      def = 7;
      document.getElementById("pdef").innerHTML = "Defense: " + def;
      document.getElementById("patk").innerHTML = "Attack: " + atk;
  }
  });

  document.addEventListener("click", function (event){
    console.log(event);
    if (event.target === document.querySelector(".character3")) {
      document.getElementById("stickfigure").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear2").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear3").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear4").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear5").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear6").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear7").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("battlebear8").src = "./assets/images/carebears/funshine-bear.png";
      // document.getElementById("battlebear9").src = "./assets/images/carebears/funshine-bear.png";
      // document.getElementById("battlebear10").src = "./assets/images/carebears/funshine-bear.png";
      document.getElementById("profile").setAttribute("class", "icon3");
      atk = 5;
      def = 4;
      document.getElementById("pdef").innerHTML = "Defense: " + def;
      document.getElementById("patk").innerHTML = "Attack: " + atk;
  }
  });

  document.addEventListener("click", function (event){
    console.log(event);
    if (event.target === document.querySelector(".character4")) {
      document.getElementById("stickfigure").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear2").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear3").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear4").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear5").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear6").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear7").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("battlebear8").src = "./assets/images/carebears/friend-bear.png";
      // document.getElementById("battlebear9").src = "./assets/images/carebears/friend-bear.png";
      // document.getElementById("battlebear10").src = "./assets/images/carebears/friend-bear.png";
      document.getElementById("profile").setAttribute("class", "icon4");
      atk = 4;
      def = 5;
      document.getElementById("pdef").innerHTML = "Defense: " + def;
      document.getElementById("patk").innerHTML = "Attack: " + atk;
  }
  });

  document.addEventListener("click", function (event){
    console.log(event);
    if (event.target === document.querySelector(".character5")) {
      document.getElementById("stickfigure").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear2").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear3").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear4").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear5").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear6").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear7").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("battlebear8").src = "./assets/images/carebears/cheer-bear.png";
      // document.getElementById("battlebear9").src = "./assets/images/carebears/cheer-bear.png";
      // document.getElementById("battlebear10").src = "./assets/images/carebears/cheer-bear.png";
      document.getElementById("profile").setAttribute("class", "icon5");
      atk = 3;
      def = 6;
      document.getElementById("pdef").innerHTML = "Defense: " + def;
      document.getElementById("patk").innerHTML = "Attack: " + atk;
  }
  });


// ==============================
// IF WE REALLY WANT TO add back in the JS used for exp and battling, we can insert it right here(Daniel's Portion)
// ==============================


//Function to show controls
function showcontrols() {
  document.getElementById("controls").style.display = "block";
  lock = true;
};
//Function to hide controls
function hidecontrols() {
  document.getElementById("controls").style.display = "none";
  lock = false;
};

//Function to disable reactivation of trumps textbox
function TrumpFunction() {
  document.getElementById("trumptextbox").style.display = "none";
  trumpbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

//Function to disable reactivation of obamas textbox
function ObamaFunction() {
  document.getElementById("obamatextbox").style.display = "none";
  obamabox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function LincolnFunction() {
  document.getElementById("lincolntextbox").style.display = "none";
  lincolnbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

//Function to disable reactivation of putins textbox
function PutinFunction() {
  document.getElementById("putintextbox").style.display = "none";
  putinbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

//Function to disable reactivation of Reagans textbox
function ReaganFunction() {
  document.getElementById("reagantextbox").style.display = "none";
  reaganbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function KimFunction() {
  document.getElementById("kimtextbox").style.display = "none";
  kimbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function HillaryFunction() {
  document.getElementById("hillarytextbox").style.display = "none";
  hillarybox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function BorisFunction() {
  document.getElementById("boristextbox").style.display = "none";
  borisbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function DutFunction() {
  document.getElementById("duttextbox").style.display = "none";
  dutbox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function MikeFunction() {
  document.getElementById("miketextbox").style.display = "none";
  mikebox = false;
  lock = false;
  exp = exp + 1;
  genWin();
};

function Trump2Function() {
  document.getElementById("trump2textbox").style.display = "none";
  trump2box = false;
  lock = false;
  exp = exp + 1;
  genWin();
  window.location.replace("../got-milk/EndScreen/HTML/win.html");
};

//Function to fight putin
function putinfight() {
  putinhealth = putinhealth - Math.floor(Math.random() * 30) - (atk*3);

  // Can be found in battle.js
  callGifAttack();


  hp = hp - Math.floor(Math.random() * (30 - (def*2)));
};

//Function to fight reagan
function reaganfight() {
  reaganhealth = reaganhealth - Math.floor(Math.random() * 27) - (atk*3);

  // Can be found in battle.js
  callGifAttack();
  
  
  hp = hp - Math.floor(Math.random() * (36-(def*2)));
  };

//Function to fight kim
function kimfight() {
  kimhealth = kimhealth - Math.floor(Math.random() * 45) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (24-(def*2)));
  };

  //Function to fight hillary
function hillaryfight() {
  hillaryhealth = hillaryhealth - Math.floor(Math.random() * 39) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (27-(def*2)));
  };

  //Function to fight boris
function borisfight() {
  borishealth = borishealth - Math.floor(Math.random() * 42) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (33-(def*2)));
  };
  //Function to fight dut
function dutfight() {
  duthealth = duthealth - Math.floor(Math.random() * 48) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (21-(def*2)));
  };
  //Function to fight mike
function mikefight() {
  mikehealth = mikehealth - Math.floor(Math.random() * 30) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (36-(def*2)));
  };
  //Function to fight trump2
function trump2fight() {
  trump2health = trump2health - Math.floor(Math.random() * 30) - (atk*3);
  callGifAttack();
    
    
  hp = hp - Math.floor(Math.random() * (55-(def*2)));
  };

// JavaScript function that wraps controls
const stickFigure = $(".stick");
$(document).ready(function () {
  // Keyboard move controls
  $(document).keyup(function (e) {

    if (lock === false) {
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
let reaganbox = true;
let kimbox = true;
let hillarybox = true;
let borisbox = true;
let dutbox = true;
let mikebox = true;
let trump2box = true;
let lincolnbox = true;

//Constantly record and update player coordinates every 25 ms
setInterval(function(){   
//Players horizontal coordinate
var left = document.getElementById("stickfigure").offsetLeft;
//console.log(left)
//Players vertical coordinate
var top = document.getElementById("stickfigure").offsetTop;
//console.log(top)
var player = document.getElementById("stickfigure");


document.getElementById("php").innerHTML = hp + "/" + maxhp;
document.getElementById("pdef").innerHTML = "Defense: " + def;
document.getElementById("patk").innerHTML = "Attack: " + atk;

if (hp === 0) {
  window.location.replace("../got-milk/EndScreen/HTML/battle.html");
};

if (worldsector === 11) {
  worldsector = 10;
};


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
    document.getElementById("putinert").style.display = "none";
  };

}
//Interaction for level 4
else if (left === 1013 && top === 640 && worldsector === 4 && reaganbox === true) {
  document.getElementById("reagantextbox").style.display = "block";
  document.getElementById("reagan").style.display = "none";
  document.getElementById("health2").innerHTML = hp;
  document.getElementById("reaganhealth").innerHTML = reaganhealth;
  lock = true

  if (reaganhealth <= 0) {
    document.getElementById("reaganhealth").style.display = "none";
    document.getElementById("endbuttonfight2").style.display = "block";
    document.getElementById("attack2").style.display = "none";
    document.getElementById("reaganert").style.display = "none";
  };

}
//Interaction for level 5
else if (left === 813 && top === 534 && worldsector === 5 && kimbox === true) {
  document.getElementById("kimtextbox").style.display = "block";
  document.getElementById("kim").style.display = "none";
  document.getElementById("health3").innerHTML = hp;
  document.getElementById("kimhealth").innerHTML = kimhealth;
  lock = true

  if (kimhealth <= 0) {
    document.getElementById("kimhealth").style.display = "none";
    document.getElementById("endbuttonfight3").style.display = "block";
    document.getElementById("attack3").style.display = "none";
    document.getElementById("kimert").style.display = "none";
  };

}
//Interaction for level 6
else if (left === 1315 && top === 215 && worldsector === 6 && hillarybox === true) {
  document.getElementById("hillarytextbox").style.display = "block";
  document.getElementById("hillary").style.display = "none";
  document.getElementById("health4").innerHTML = hp;
  document.getElementById("hillaryhealth").innerHTML = hillaryhealth;
  lock = true

  if (hillaryhealth <= 0) {
    document.getElementById("hillaryhealth").style.display = "none";
    document.getElementById("endbuttonfight4").style.display = "block";
    document.getElementById("attack4").style.display = "none";
    document.getElementById("hillaryert").style.display = "none";
  };

}
//Interaction for level 7
else if (left === 1013 && top === 215 && worldsector === 7 && borisbox === true) {
  document.getElementById("boristextbox").style.display = "block";
  document.getElementById("boris").style.display = "none";
  document.getElementById("health5").innerHTML = hp;
  document.getElementById("borishealth").innerHTML = borishealth;
  lock = true

  if (borishealth <= 0) {
    document.getElementById("borishealth").style.display = "none";
    document.getElementById("endbuttonfight5").style.display = "block";
    document.getElementById("attack5").style.display = "none";
    document.getElementById("borisert").style.display = "none";
  };

}
//Interaction for level 8
else if (left === 1113 && top === 428 && worldsector === 8 && lincolnbox === true) {
  document.getElementById("lincolntextbox").style.display = "block";
  document.getElementById("lincoln").style.display = "none";
  lock = true;
}
//Interaction for level 9
else if (left === 712 && top === 322 && worldsector === 9 && dutbox === true) {
  document.getElementById("duttextbox").style.display = "block";
  document.getElementById("dut").style.display = "none";
  document.getElementById("health6").innerHTML = hp;
  document.getElementById("duthealth").innerHTML = duthealth;
  lock = true

  if (duthealth <= 0) {
    document.getElementById("duthealth").style.display = "none";
    document.getElementById("endbuttonfight6").style.display = "block";
    document.getElementById("attack6").style.display = "none";
    document.getElementById("dutert").style.display = "none";
  };

}
//Interaction for level 10
else if (left === 712 && top === 428 && worldsector === 10 && mikebox === true) {
  document.getElementById("miketextbox").style.display = "block";
  document.getElementById("mike").style.display = "none";
  document.getElementById("health7").innerHTML = hp;
  document.getElementById("mikehealth").innerHTML = mikehealth;
  lock = true

  if (mikehealth <= 0) {
    document.getElementById("mikehealth").style.display = "none";
    document.getElementById("endbuttonfight7").style.display = "block";
    document.getElementById("attack7").style.display = "none";
    document.getElementById("mikert").style.display = "none";
  };

}

else if (left === 1315 && top === 428 && worldsector === 10 && trump2box === true) {
  document.getElementById("trump2textbox").style.display = "block";
  document.getElementById("trump2").style.display = "none";
  document.getElementById("health8").innerHTML = hp;
  document.getElementById("trump2health").innerHTML = trump2health;
  lock = true

  if (trump2health <= 0) {
    document.getElementById("trump2health").style.display = "none";
    document.getElementById("endbuttonfight8").style.display = "block";
    document.getElementById("attack8").style.display = "none";
    document.getElementById("final").style.display = "none";
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
}
//Walls for level 7
else if (left === 210 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 109.6+"px";
}
else if (left === 311 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 410.8+"px";
}
else if (left === 511 && top >= 108 && top <= 641 && worldsector === 7) {
  player.style.left = 410.8+"px";
}
else if (left === 611 && top >= 108 && top <= 641 && worldsector === 7) {
  player.style.left = 712+"px";
}
else if (left === 813 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 712+"px";
}
else if (left === 913 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 1013.2+"px";
}
else if (left === 1113 && top >= 108 && top <= 641 && worldsector === 7) {
  player.style.left = 1013.2+"px";
}
else if (left === 1214 && top >= 108 && top <= 641 && worldsector === 7) {
  player.style.left = 1314.4+"px";
}
else if (left === 1415 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 1314.4+"px";
}
else if (left === 1515 && top >= 214 && top <= 748 && worldsector === 7) {
  player.style.left = 1615.6+"px";
}
//Walls for level 8
else if (left >= 108 && left <= 312 && top === 428 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 711 && left <= 1014 && top >= 321 && top <= 535 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 108 && top === 109 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 108 && top === 747 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left === 511 && top === 322 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left === 511 && top === 534 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 108 && left <= 512 && top === 640 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 108 && left <= 512 && top === 215 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 1213 && left <= 1616 && top === 215 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 1213 && left <= 1616 && top === 640 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 1213 && left <= 1316 && top === 322 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
else if (left >= 1213 && left <= 1316 && top === 534 && worldsector === 8) {
  player.style.left = 1615.6+"px";
  worldsector = 7;
  hp = hp-10;
}
//Walls for level 9
else if (left >= 108 && left <= 1516 && top === 215 && worldsector === 9) {
hp = 0;
}
else if (left >= 108 && left <= 1516 && top === 428 && worldsector === 9) {
hp = 0;
}
else if (left >= 108 && left <= 1516 && top === 640 && worldsector === 9) {
hp = 0;
}
//Walls for level 10
else if (left === 511 && top >= 108 && top <= 323 && worldsector === 10) {
  player.style.left = 410.8+"px";
  }
  else if (left === 511 && top >= 533 && top <= 748 && worldsector === 10) {
    player.style.left = 410.8+"px";
    }
    else if (left === 611 && top >= 108 && top <= 323 && worldsector === 10) {
      player.style.left = 712+"px";
      }
      else if (left === 611 && top >= 533 && top <= 748 && worldsector === 10) {
        player.style.left = 712+"px";
        }
        else if (left === 1615 && top >= 108 && top <= 748 && worldsector === 10) {
          player.style.left = 1515.2+"px";
          }
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
  //Pole IMG
  const pole = document.createElement("img");
  pole.setAttribute("src", "./assets/images/neutrals/poles.png");
  pole.setAttribute("class", "hide");
  //Pole IMG
  const ufo = document.createElement("img");
  ufo.setAttribute("src", "./assets/images/neutrals/ufo.png");
  ufo.setAttribute("class", "hide");
  //Tombstone IMG
  const tombstone = document.createElement("img");
  tombstone.setAttribute("src", "./assets/images/neutrals/tombstone.png");
  tombstone.setAttribute("class", "hide");
  //Pillar IMG
  const pillar = document.createElement("img");
  pillar.setAttribute("src", "./assets/images/neutrals/pillar.png");
  pillar.setAttribute("class", "hide");
//Trump IMG
  const trump = document.createElement("img");
  trump.setAttribute("src", "./assets/images/presidents/trump.png");
  trump.setAttribute("class", "politician");
  trump.setAttribute("Id", "trump");
  //Trump2 IMG
  const trump2 = document.createElement("img");
  trump2.setAttribute("src", "./assets/images/presidents/trump2.png");
  trump2.setAttribute("class", "hide");
  trump2.setAttribute("Id", "trump2");
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
//Reagan IMG
  const reagan = document.createElement("img");
  reagan.setAttribute("src", "./assets/images/presidents/reagan.png");
  reagan.setAttribute("class", "hide");
  reagan.setAttribute("Id", "reagan");
//Kim IMG
  const kim = document.createElement("img");
  kim.setAttribute("src", "./assets/images/presidents/kim.png");
  kim.setAttribute("class", "hide");
  kim.setAttribute("Id", "kim");
  //Hillary IMG
  const hillary = document.createElement("img");
  hillary.setAttribute("src", "./assets/images/presidents/hillary.png");
  hillary.setAttribute("class", "hide");
  hillary.setAttribute("Id", "hillary");
  //Dut IMG
  const dut = document.createElement("img");
  dut.setAttribute("src", "./assets/images/presidents/dut.png");
  dut.setAttribute("class", "hide");
  dut.setAttribute("Id", "dut");
  //Mike IMG
  const mike = document.createElement("img");
  mike.setAttribute("src", "./assets/images/presidents/mike.png");
  mike.setAttribute("class", "hide");
  mike.setAttribute("Id", "mike");
  //Boris IMG
  const boris = document.createElement("img");
  boris.setAttribute("src", "./assets/images/presidents/boris.png");
  boris.setAttribute("class", "hide");
  boris.setAttribute("Id", "boris");
  //Lincoln IMG
  const lincoln = document.createElement("img");
  lincoln.setAttribute("src", "./assets/images/presidents/lincoln.png");
  lincoln.setAttribute("class", "hide");
  lincoln.setAttribute("Id", "lincoln");
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
  //Generates a Trump2
  if(i === 81) {
    tile.append(trump2);
  };
  //Generates a Mike
  if(i === 75) {
    tile.append(mike);
  };
   //Generates a Dut
   if(i === 58) {
    tile.append(dut);
  };
  //Generates a Boris
  if(i === 44) {
    tile.append(boris);
  };
  //Generates a Lincoln
  if(i === 79) {
    tile.append(lincoln);
  };
  //Generates a Obama
  if(i === 58) {
    tile.append(obama);
  };
  //Generates a Putin
  if(i === 78) {
    tile.append(putin);
  };
  //Generates a Reagan
  if(i === 112) {
    tile.append(reagan);
  };
  //Generates a Kim
  if(i === 93) {
    tile.append(kim);
  };
  //Generates a Hillary
  if(i === 47) {
    tile.append(hillary);
  };
//Generates a border on the left side of the world
  if(i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119) {
  tile.append(brock);
  };
//Generates taxi's for the third world
if(i >= 19 && i <= 33 || i >= 103 && i <= 118) {
  tile.append(taxi);
  };
//Generates skulls for the fourth world
if(i >= 58 && i <= 63 || i >= 76 && i <= 80 || i >= 102 && i <= 110 || i >= 125 && i<= 127 || i === 75 || i === 92 || i === 93) {
  tile.append(skull);
  };
//Generates fish for the fifth world
if(i >= 18 && i <= 20 || i >= 24 && i <= 26 || i >= 30 && i <= 32 || i >= 55 && i <=57 || i >= 61 && i <= 63 || 
    i >= 69 && i <= 84 || i >= 89 && i <= 91 || i >= 95 && i <= 97 || i >= 120 && i <= 122 || i >= 126 && i <= 128 || i >= 132 && i <= 134 || 

        i === 36 || i === 39 || i === 42 || i === 45 || i === 48 || i === 67 || i === 101 || i === 104 || i === 107 || i === 110 || i === 113 || i === 116){
  tile.append(fish);
  };
  //Generates lava for the sixth world
if(i >= 69 && i <= 84 ||
    i === 19 || i === 20 || i === 25 || i === 26 || i === 31 || i === 32 || i === 56 || i === 57 || i === 62 || i === 63 || 
    i === 86 || i === 92 || i === 98 || i === 120 || i === 126 || i === 132) {
  tile.append(lava);
  };
    //Generates poles for the seventh world
if(i === 36 || i === 53 || i === 70 || i === 87 || i === 104 || i === 121 || i === 37 || i === 54 || i === 71 || i === 88 || i === 105 || i === 122 || i === 22 || i === 39 || i === 56 || i === 73 || i === 90 || i === 107 || i === 23 || i === 40 || i === 57 || i === 74 || i === 91 || i === 108 || i === 42 || i === 59 || i === 76 || i === 93 || i === 110 || i === 127 || i === 43 || i === 60 || i === 77 || i === 94 || i === 111 || i === 128 || i === 28 || i === 45 || i === 62 || i === 79 || i === 96 || i === 113 || i === 29 || i === 46 || i === 63 || i === 80 || i === 97 || i === 114 || i === 48 || i === 65 || i === 82 || i === 99 || i === 116 || i === 133 || i === 49 || i === 66 || i === 83 || i === 100 || i === 117 || i === 134   ) {
tile.append(pole);
};
  //Generates ufos for the eighth world
  if(i === 0 || i === 136 || i === 17 || i === 34 || i === 51 || i === 68 || i === 85 || i === 102 || i === 119 || i === 52 || i === 53 || i === 54 || i === 55 || i === 72 || i === 86 || i === 87 || i === 88 || i === 89 || i === 73 || i === 40 || i === 41 ||i === 42 || i === 43 || i === 44 || i === 45 ||i === 57 || i === 74 || i === 91 || i == 108 || i === 109 || i === 110 || i === 111 || i === 112 || i === 113 || i === 96 || i === 79 || i === 62 || i === 80 || i === 81 || i === 65 || i === 66 || i === 67 || i === 82 || i === 83 || i === 84 || i === 99 || i === 100 || i === 101) {
  tile.append(ufo);
  };
  //Generates tombstones for the ninth world
  if(i >= 35 && i <= 49 || i >= 69 && i <= 83 || i >= 103 && i <= 117) {
  tile.append(tombstone);
    };
  //Generates pillar for the final world
  if(i === 33 || i === 50 || i === 67 || i === 84 || i === 101 || i === 118 || i === 135 || i === 22 || i === 23 || i === 39 || i === 40 || i === 56 || i === 57 || i === 90 || i === 91  || i === 107 || i === 108 || i === 124 || i === 125) {
    tile.append(pillar);
      };  
    

  function myFunction() {
    setInterval(function(){
      if (hp < 0){hp = 0};
      
      if(worldsector === 2){
        brock.style.display="none";
        img.setAttribute("src", "./assets/images/tiles/grass.png");
        neutral.setAttribute("src", "./assets/images/tiles/rock.png");
        trump.setAttribute("class", "hide");
        obama.setAttribute("class", "obama");
        taxi.setAttribute("class", "hide");
        putin.setAttribute("class", "hide");
        neutral.setAttribute("class", "rock");
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
        reagan.setAttribute("class", "hide");

      }
      else if(worldsector === 4){
        img.setAttribute("src", "./assets/images/tiles/dessert2.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/skull.png");
        neutral.setAttribute("class", "skull");
        skull.setAttribute("class", "skull");
        taxi.setAttribute("class", "hide");
        fish.setAttribute("class", "hide");
        putin.setAttribute("class", "hide");
        reagan.setAttribute("class", "reagan");
        kim.setAttribute("class", "hide");
      }
      else if(worldsector === 5){
        img.setAttribute("src", "./assets/images/tiles/water.png");
        neutral.setAttribute("src", "./assets/images/neutrals/fish.png");
        neutral.setAttribute("class", "fish");
        skull.setAttribute("class", "hide");
        fish.setAttribute("class", "fish");
        lava.setAttribute("class", "hide");
        reagan.setAttribute("class", "hide");
        kim.setAttribute("class", "kim");
        hillary.setAttribute("class", "hide");
      }
      else if(worldsector === 6){
        img.setAttribute("src", "./assets/images/tiles/lava.png");
        neutral.setAttribute("src", "./assets/images/tiles/fulllava.png");
        neutral.setAttribute("class", "fulllava");
        fish.setAttribute("class", "hide");
        lava.setAttribute("class", "fulllava");
        kim.setAttribute("class", "hide");
        hillary.setAttribute("class", "hillary");
        pole.setAttribute("class", "hide");
        boris.setAttribute("class", "hide");
      }
      else if(worldsector === 7){
        img.setAttribute("src", "./assets/images/tiles/dirt.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/poles.png");
        neutral.setAttribute("class", "pole");
        pole.setAttribute("class", "pole");
        lava.setAttribute("class", "hide");
        ufo.setAttribute("class", "hide");
        hillary.setAttribute("class", "hide");
        boris.setAttribute("class", "boris");
        lincoln.setAttribute("class", "hide");
      }
      else if(worldsector === 8){
        img.setAttribute("src", "./assets/images/tiles/space.jpg");
        neutral.setAttribute("class", "hide");
        pole.setAttribute("class", "hide");
        ufo.setAttribute("class", "ufo");
        tombstone.setAttribute("class", "hide");
        dut.setAttribute("class", "hide");
        boris.setAttribute("class", "hide");
        lincoln.setAttribute("class", "politician");
      }
      else if(worldsector === 9){
        img.setAttribute("src", "./assets/images/tiles/moss.png");
        neutral.setAttribute("src", "./assets/images/neutrals/tombstone.png");
        neutral.setAttribute("class", "pole");
        tombstone.setAttribute("class", "pole");
        ufo.setAttribute("class", "hide");
        trump2.setAttribute("class", "hide");
        pillar.setAttribute("class", "hide");
        mike.setAttribute("class", "hide");
        dut.setAttribute("class", "politician");
        lincoln.setAttribute("class", "hide");
      }
      else if(worldsector === 10){
        img.setAttribute("src", "./assets/images/tiles/checker.jpg");
        neutral.setAttribute("src", "./assets/images/neutrals/pillar.png");
        neutral.setAttribute("class", "pillar");
        tombstone.setAttribute("class", "hide");
        trump2.setAttribute("class", "politician");
        mike.setAttribute("class", "mike");
        pillar.setAttribute("class", "pole");
        dut.setAttribute("class", "hide");
      };
    }, 10);
  }
  myFunction();

    tile.append(img);
    document.querySelector(".grid-container").append(tile);
  };
};

tileSet();

//Menu Script ---------------------------------------------------------------------------------------------
// Get the modal
let modal = document.getElementById("characterModal");

// Get the button that opens the modal
let btn = document.getElementById("characterBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
  lock = true;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  lock = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    lock = false;
  }
}
