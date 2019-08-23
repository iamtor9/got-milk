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
  
        if (results[i].id === "yyrxrArcC32H6" || results[i].id === "3ZZaR4gZOClWHRaswH" || 
            results[i].id === "WaVzsw5V12VoI" || results[i].id === "IJTCcELAbVgHK" ||
            results[i].id === "11z8mwhw0jxQiI" || results[i].id === "cmxSur7kFJKvYC2g8H" ||
            results[i].id === "Tzyme1YtTEVkQ" || results[i].id === "FTJqnhiSNf1BK" ||
            results[i].id === "XFpxLVkoVeMI9wnW7Y" || results[i].id === "WncGVVRo3CynC" ||
            results[i].id === "hAl4rb3WFcheE" || results[i].id === "w572ZzzpJAGqY" ||
            results[i].id === "3oKIPaIpoSWWcVhsv6") {
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
  
  // callGiphyCareBear();
  
  


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
  
        // if (results[i].id === "yyrxrArcC32H6" || results[i].id === "3ZZaR4gZOClWHRaswH" || 
        //     results[i].id === "WaVzsw5V12VoI" || results[i].id === "IJTCcELAbVgHK" ||
        //     results[i].id === "11z8mwhw0jxQiI" || results[i].id === "cmxSur7kFJKvYC2g8H" ||
        //     results[i].id === "Tzyme1YtTEVkQ" || results[i].id === "FTJqnhiSNf1BK" ||
        //     results[i].id === "XFpxLVkoVeMI9wnW7Y" || results[i].id === "WncGVVRo3CynC" ||
        //     results[i].id === "hAl4rb3WFcheE" || results[i].id === "w572ZzzpJAGqY" ||
        //     results[i].id === "3oKIPaIpoSWWcVhsv6") {
        //   gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
        //   gifDiv.append(gifImg);
        //   console.log(gifDiv);
        //   document.querySelector(".giphy").append(gifDiv);
        // }
  
        gifImg.setAttribute("src", results[i].images.fixed_height.url);
  
        gifDiv.append(gifImg);
        console.log(gifDiv);
        document.querySelector(".giphy").append(gifDiv);
      }
    })
  }
  
  callGiphyCareSpaceBear();





function callGiphyTronald() {
  // We are gonna need to change this to fit the documentation
  let gif = "care bear"

  // Dont need an API key
  let subject = "obama";
  // We want to create a const that is equal to the query that we are going to reference
  const header = "accept: application/hal+json"
  const queryURL = "https://api.tronalddump.io/search/quote?query=" + subject;
  console.log(queryURL, "FULL LINK TO URL");

  fetch(queryURL, {
    "method": "GET",
    "headers": {
      // "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
      // "x-rapidapi-key": "b9267a6a9amshfb545e24443f3ccp1fffcajsn9e0cf027b636",
      "accept": "application/hal+json"}}).then(function(response) {
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

// callGiphyTronald();