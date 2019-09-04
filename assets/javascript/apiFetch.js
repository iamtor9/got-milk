// ====================================================================================
// ====================================================================================
// API Keys & Codes

// Deezer API (a music catalog)
//  https://developers.deezer.com/api Link to the documentation
// Audio get


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

  fetch(queryURL).then(function (response) {
    return response.json();
  }).then(function (responseJSON) {
    const results = responseJSON.data;
    console.log(results);

    // We need to find the right kind of carebear animation, so we need a for loop for these things
    const gifContainer = document.createElement("div");
    gifContainer.setAttribute("class", "flex");

    for (let i = 0; i < results.length; i++) {
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
  let axiosID = "'/user?ID=12345"
  // We want to create a const that is equal to the query that we are going to reference
  const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + APIKey + "&limit=" + amount + axiosID;
  console.log(queryURL, "FULL LINK TO URL");

  // ==========================================================================================
  // ==========================================================================================
  // This is using axios to do the fetch request
  axios.get(queryURL)
    .then(function (response) {
      // This is handling the success of the GET request
      console.log(response);
      // It's data.data b/c the first Data is how Axios organized the information that you got fron the website
        // and then the second data is how Giphy organizes the information from it's own website
      const results = response.data.data;
      console.log(results);

      // We need to find the right kind of carebear animation, so we need a for loop for these things
      const gifContainer = document.createElement("div");
      gifContainer.setAttribute("class", "flex");

      for (let i = 0; i < results.length; i++) {
        const gifDiv = document.createElement("div");
        const gifImg = document.createElement("img");

        if (results[i].id === "cm8ly9wi5eQ0g" || results[i].id === "l0G16t8rkBvnljSta" ||
          results[i].id === "T9wQWimOZa1tS" || results[i].id === "XcsODeRzHVfFe" ||
          results[i].id === "v7L4uQWY8Ntvi" || results[i].id === "IMjiylQuLlhba" ||
          results[i].id === "1k1yidAauPocM" || results[i].id === "iW6RoMatcmQ12" ||
          results[i].id === "tnivTK2URZm7e" || results[i].id === "6S2oHojYRiQWA" ||
          results[i].id === "l2JegbZTHiwXgRM1a") {
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
    .catch(function (error) {
      // This is handling what the error message will be if unsuccessful
      console.log(error);
    })

}

// callGiphyCareSpaceBear();

// ====================================================================================



function callGifAttack() {
  // first lets set our giphy's into an array so that we can call it later
  const totalGifArray = [];

  // Do this loop 2 times
  for (let i = 0; i < 2; i++) {
    const APIKey = "SF5z5yrS08Hg6RXmKUUTuAVDOH4j0GqG";
    let amount = 100;
    let gif;
    // console.log(totalGifArray);

    // if statements to differentiate between the carebear choices
    if (i === 0) {
      gif = "carebear"
    }
    else if (i === 1) {
      gif = "care bear"
    }
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + APIKey + "&limit=" + amount;
    console.log(queryURL);


    axios.get(queryURL)
    .then(function(response) {

      const results = response.data.data;
      // console.log(r)
      // console.log(results);

      // const gifContainer = document.createElement("div");
      //   gifContainer.setAttribute("class", "flex");

      for (let i = 0; i < results.length; i++) {
        // ======THIS WAS TO TEST SOMETHING =======
        // const gifDiv = document.createElement("div");
        //   const gifImg = document.createElement("img");
        // ========================================


        if (// this is the ones for carebear
          results[i].id === "yyrxrArcC32H6" || results[i].id === "3ZZaR4gZOClWHRaswH" ||
          results[i].id === "WaVzsw5V12VoI" || results[i].id === "IJTCcELAbVgHK" ||
          results[i].id === "11z8mwhw0jxQiI" || results[i].id === "cmxSur7kFJKvYC2g8H" ||
          results[i].id === "Tzyme1YtTEVkQ" || results[i].id === "FTJqnhiSNf1BK" ||
          results[i].id === "XFpxLVkoVeMI9wnW7Y" || results[i].id === "WncGVVRo3CynC" ||
          results[i].id === "hAl4rb3WFcheE" || results[i].id === "w572ZzzpJAGqY" ||
          results[i].id === "3oKIPaIpoSWWcVhsv6" ||
          // this is the ones for care +" " + bear
          results[i].id === "cm8ly9wi5eQ0g" || results[i].id === "l0G16t8rkBvnljSta" ||
          results[i].id === "T9wQWimOZa1tS" || results[i].id === "XcsODeRzHVfFe" ||
          results[i].id === "v7L4uQWY8Ntvi" || results[i].id === "IMjiylQuLlhba" ||
          results[i].id === "1k1yidAauPocM" || results[i].id === "iW6RoMatcmQ12" ||
          results[i].id === "tnivTK2URZm7e" || results[i].id === "6S2oHojYRiQWA" ||
          results[i].id === "l2JegbZTHiwXgRM1a") {

          let newGif = results[i].images.fixed_height.url
          // console.log(String(newGif));


          // ======OTHER CODE FOR THAT TEST=======
          // gifImg.setAttribute("src", newGif);

          // gifDiv.append(gifImg);
          // console.log(gifDiv);
          // document.querySelector(".giphy").append(gifDiv);
          // =====================================


          totalGifArray.push(newGif);
        }
      }
      // This is it so that it only calls the function showGif Once
      if (i === 1) {
        showGif();
      }

    })
    .catch(function(error) {
      console.log(error)
    })

    // fetch(queryURL).then(function (response) {
    //   return response.json();
    // }).then(function (responseJSON) {
    //   const results = responseJSON.data;
    //   // console.log(r)
    //   // console.log(results);

    //   // const gifContainer = document.createElement("div");
    //   //   gifContainer.setAttribute("class", "flex");

    //   for (let i = 0; i < results.length; i++) {
    //     // ======THIS WAS TO TEST SOMETHING =======
    //     // const gifDiv = document.createElement("div");
    //     //   const gifImg = document.createElement("img");
    //     // ========================================


    //     if (// this is the ones for carebear
    //       results[i].id === "yyrxrArcC32H6" || results[i].id === "3ZZaR4gZOClWHRaswH" ||
    //       results[i].id === "WaVzsw5V12VoI" || results[i].id === "IJTCcELAbVgHK" ||
    //       results[i].id === "11z8mwhw0jxQiI" || results[i].id === "cmxSur7kFJKvYC2g8H" ||
    //       results[i].id === "Tzyme1YtTEVkQ" || results[i].id === "FTJqnhiSNf1BK" ||
    //       results[i].id === "XFpxLVkoVeMI9wnW7Y" || results[i].id === "WncGVVRo3CynC" ||
    //       results[i].id === "hAl4rb3WFcheE" || results[i].id === "w572ZzzpJAGqY" ||
    //       results[i].id === "3oKIPaIpoSWWcVhsv6" ||
    //       // this is the ones for care +" " + bear
    //       results[i].id === "cm8ly9wi5eQ0g" || results[i].id === "l0G16t8rkBvnljSta" ||
    //       results[i].id === "T9wQWimOZa1tS" || results[i].id === "XcsODeRzHVfFe" ||
    //       results[i].id === "v7L4uQWY8Ntvi" || results[i].id === "IMjiylQuLlhba" ||
    //       results[i].id === "1k1yidAauPocM" || results[i].id === "iW6RoMatcmQ12" ||
    //       results[i].id === "tnivTK2URZm7e" || results[i].id === "6S2oHojYRiQWA" ||
    //       results[i].id === "l2JegbZTHiwXgRM1a") {

    //       let newGif = results[i].images.fixed_height.url
    //       // console.log(String(newGif));


    //       // ======OTHER CODE FOR THAT TEST=======
    //       // gifImg.setAttribute("src", newGif);

    //       // gifDiv.append(gifImg);
    //       // console.log(gifDiv);
    //       // document.querySelector(".giphy").append(gifDiv);
    //       // =====================================


    //       totalGifArray.push(newGif);
    //     }
    //   }
    //   // This is it so that it only calls the function showGif Once
    //   if (i === 1) {
    //     showGif();
    //   }

    // })
  }

  // console.log(totalGifArray);

  function showGif() {
    // This stuff is to choose the gif that we want
    const gifChoice = Math.floor(Math.random() * 30);
    console.log(gifChoice);
    console.log(totalGifArray);


    // Testing console logs
    // ============================================
    // console.log(totalGifArray[gifChoice]);
    // console.log(totalGifArray);
    // console.log(totalGifArray[3]);

    // let array = ["haha", "yup", "always"];
    // console.log(array[Math.floor(Math.random() * 3)])
    // ============================================


    const gifDiv = document.createElement("div");
    const gifImg = document.createElement("img");

    gifImg.setAttribute("src", totalGifArray[gifChoice]);
    console.log(totalGifArray[gifChoice]);
    gifDiv.setAttribute("class", "DynamicGif");

    gifDiv.append(gifImg);
    console.log(gifDiv);
    document.querySelector(".giphy").append(gifDiv);

    setTimeout(function () {
      const giphyClass = document.querySelector(".giphy");
      giphyClass.removeChild(gifDiv);
    }, 3000);


    // Trying to have a manual switch off function
    // ============================================================
    // document.addEventListener("keyup", function(event) {
    //   const giphyClass = document.querySelector(".giphy");
    //   console.log(event);
    //   if(event === "Enter") {
    //     giphyClass.removeChild(gifDiv);
    //   }
    // })
  }

  // function deleteGif() {
  //   const giphyClass = document.querySelector(".giphy");
  //   giphyClass.removeChild(document.querySelectorAll(".DynamicGif"));
  // }

}
// callGifAttack();



function colorDetect() {

  // fetch("https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=simple&sort=relevance&url=http%3A%2F%2Fapicloud.me%2Fassets%2Fcolortag%2Fimage1.jpg", {

  let expBar = document.querySelector(".expBar");
  console.log(expBar);
  let queryURL = "https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=simple&sort=relevance&url=" + expBar.getAttribute("src");
  console.log(queryURL);
  console.log(expBar.getAttribute("src"));

  // AXIOS JS GET FETCH
  // =====================================================================================================================================
  // =====================================================================================================================================

  axios.get(queryURL, {
    "headers": {
      "x-rapidapi-host": "apicloud-colortag.p.rapidapi.com",
      "x-rapidapi-key": "b9267a6a9amshfb545e24443f3ccp1fffcajsn9e0cf027b636"
    }
  })
  .then(function(response) {
    console.log(response);
    console.log(response.data.tags[0].label);

    let img = response.data
    levelChecker(img);
  })
  .catch(function(error) {
    console.log(error);
  })




  // VANILLA JAVASCRIPT FETCH
  // =====================================================================================================================================
  // =====================================================================================================================================
  // fetch(queryURL, {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "apicloud-colortag.p.rapidapi.com",
  //     "x-rapidapi-key": "b9267a6a9amshfb545e24443f3ccp1fffcajsn9e0cf027b636"
  //   }
  // }).then(function (response) {
  //   return response.json();
  // }).then(function (img) {
  //   console.log(img);
  //   console.log(img.tags[0].label);
  //   levelChecker(img);
  // })
  //   .catch(function err() {
  //     console.log(err);
  //   })
}
// colorDetect();




// This is the original snippet from Rapid API.com that Daniel Modified in order to get it working
// ================================================================================================
// ================================================================================================
// fetch("https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=simple&sort=relevance&url=http%3A%2F%2Fapicloud.me%2Fassets%2Fcolortag%2Fimage1.jpg", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apicloud-colortag.p.mashape.com/tag-url.json",
// 		"x-rapidapi-key": "b9267a6a9amshfb545e24443f3ccp1fffcajsn9e0cf027b636"
// 	}
// })
// .then(response => {
//   return response.json();
// 	console.log(response);
// }).then(function(newresponse) {
//   console.log(newresponse);
// })
// .catch(err => {
// 	console.log(err);
// });

// ================================================================================================
// ================================================================================================