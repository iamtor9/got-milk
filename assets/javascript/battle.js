// ==========================================
// ==========================================
// This is the original idea Daniel used for the object-array for the exp bars
let imgURL = {
    zeroExp: "https://i.ibb.co/CVDM471/0-7-Exp-copy.png",
    oneExp: "https://i.ibb.co/cc0D9yM/1-7-Exp-copy.png",
    twoExp: "https://i.ibb.co/LPggxW2/2-7-Exp-copy.png",
    threeExp: "https://i.ibb.co/xsPJqcb/4-7-Exp-copy.png",
    fourExp: "https://i.ibb.co/Wtmb5Jz/5-7-Exp-copy.png",
    fiveExp: "https://i.ibb.co/FwRS1hj/6-7-Exp-copy.png",
}
// ==========================================
// ==========================================





// WHAT THE GAME IS ACTUALLY USING
// ==============================================================================================================================
// ==============================================================================================================================

const imgUrlArray = ["https://i.ibb.co/CVDM471/0-7-Exp-copy.png", "https://i.ibb.co/cc0D9yM/1-7-Exp-copy.png",
    "https://i.ibb.co/LPggxW2/2-7-Exp-copy.png", "https://i.ibb.co/xsPJqcb/4-7-Exp-copy.png",
    "https://i.ibb.co/Wtmb5Jz/5-7-Exp-copy.png", "https://i.ibb.co/FwRS1hj/6-7-Exp-copy.png"];

// This is meant to be a counter for the index number for the array above
let expTracker = 0;
let imgUrlChooser = imgUrlArray[expTracker];

// This just sets the starting exp bar to being at zero
document.querySelector(".expBar").setAttribute("src", imgUrlChooser);
// console.log(imgUrlChooser);
// console.log(expTracker);


// ====================================================================================
// This function changes the png of the exp bar
function expChange() {
    expTracker++;
    imgUrlChooser = imgUrlArray[expTracker];
    console.log(imgUrlChooser);
    console.log(expTracker);
};
// expChange();
// ==========================================




// ====================================================================================
// function for the general Winning result NOT INCLUDING (leveling up)
function genWin() {
    // ======================
    // This portion is meant to change the exp bar image and counter

    console.log(document.querySelector(".expBar"));
    expChange();
    console.log(imgUrlChooser);
    console.log(expTracker);
    document.querySelector(".expBar").setAttribute("src", imgUrlChooser);
    console.log(document.querySelector(".expBar"));
    // ======================


    // ======================
    // Found in apiFetch.js and it basically is calling to see if the img being sent to the api to be analyzed
    // Then it will be spat back out into the function found in game.js called levelChecker()
    colorDetect();
    // ======================
}
// ==========================================





// ====================================================================================
// This is a Timeout function that checks to see if the exp bar is a full rainbow
function levelChecker(img) {
    // console.log(img);

    setTimeout(function () {
        console.log(img)
        if (img.tags.length === 7 &&
            img.tags[0].label === "Green" &&
            img.tags[1].label === "Cyan" &&
            img.tags[2].label === "Purple" &&
            img.tags[3].label === "Red" &&
            img.tags[4].label === "Orange" &&
            img.tags[5].label === "Yellow" &&
            img.tags[6].label === "Blue") {
            console.log("hey you leveled up!");
            // console.log(document.querySelector("#levelUpBox"));
            // document.querySelector("#levelUpBox").removeAttribute("class", "boxDisappear");
            document.querySelector("#levelUpBox").setAttribute("class", "boxAppear");
            maxhp = maxhp + 20;
            hp = maxhp;
            // ======================
            // This resets the tracker number back to zero
            expTracker = 0;
            // Then we have to basically restate the imgUrlChooser Variable again
            imgUrlChooser = imgUrlArray[expTracker]
            // ======================

            console.log(imgUrlChooser);
            document.querySelector(".expBar").setAttribute("src", imgUrlChooser)
            console.log(document.querySelector("#levelUpBox"));

        }
    }, 100);

    setTimeout(function () {
        hideLevelUpBox();

        // This resets the exp bar back to gray
        ;

    }, 3500);
}
// levelChecker();
// ==========================================





// ====================================================================================
// This is a function that will hide the pop box that tells the user that they leveled up
function hideLevelUpBox() {
    document.querySelector("#levelUpBox").removeAttribute("class", "boxAppear");
    document.querySelector("#levelUpBox").setAttribute("class", "boxDisappear");
    console.log(document.querySelector("#levelUpBox"));
};
// ==========================================