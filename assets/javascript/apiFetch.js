// ====================================================================================
// ====================================================================================
// API Keys & Codes

// Deezer API (a music catalog)
//  https://developers.deezer.com/api Link to the documentation


// Tronald Dump (API with all the dumb things that He has ever said)
// https://docs.tronalddump.io/#quotes Link to Documentation


// Giphy API (Using it for the attack animations that we will have)
// https://developers.giphy.com/docs/api/endpoint#search Link to Documentation

function callGiphyCareBear() {

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
  
      for(let i = 0; i < results.length; i++) {
        const gifDiv = document.createElement("div");
        const gifImg = document.createElement("img");
  
        if (i === 2 || i === 5 || i === 6 || i === 7 || i === 15 || 
            i === 16 || i === 18 || i === 25 || i === 39 || i === 43 || 
            i === 66 || i === 69) {
          gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
          gifDiv.append(gifImg);
          console.log(gifDiv);
          document.querySelector(".giphy").append(gifDiv);
        }
  
        // gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
        // gifDiv.append(gifImg);
        // console.log(gifDiv);
        // document.querySelector(".giphy").append(gifDiv);
      }
    })
  }
  
  callGiphyCareBear();
  
  


  // ====================================================================================
  function callGiphyCareSpaceBear() {
    let gif = "care bear"
  
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
  
      for(let i = 0; i < results.length; i++) {
        const gifDiv = document.createElement("div");
        const gifImg = document.createElement("img");
  
        if (i === 4 || i === 8 || i === 13 || i === 26 || i === 28 ||
            i === 35 || i === 41 || i === 46 || i === 50 || i === 57 ||
            i === 64 || i === 90) {
          gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
          gifDiv.append(gifImg);
          console.log(gifDiv);
          document.querySelector(".giphy").append(gifDiv);
        }
  
        // gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
        // gifDiv.append(gifImg);
        // console.log(gifDiv);
        // document.querySelector(".giphy").append(gifDiv);
      }
    })
  }
  
  callGiphyCareSpaceBear();