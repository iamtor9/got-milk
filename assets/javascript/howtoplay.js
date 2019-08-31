//Global variables
const userAge = "";

function submitInfo() {
    userAge = document.getElementById("userAge").value
  };
  
  
  console.log(userAge);
  //add click listener on submitbutton
  document.querySelector("#submitButton").addEventListener("click", function () {
    submitInfo();
    //make an object to put the array
    let dataIn = {
      userAge: userAge,
    }
    console.log(document.getElementById("submitButton"));
    console.log(dataIn);
    //const value = document.querySelector(".form-control").value;
    localforage.getItem("saved").then(function (result) {
      console.log(result);
      if (!result) {
        result = [];
      }
      result.push(dataIn);
  
      localforage.setItem("saved", result)
        .then(function () {
          console.log(result);
        //   displayTableRusults();   
        });
    });
  })
//   function displayTableRusults(){
//     localforage.getItem("saved").then(function (result) {
//       console.log(result);
//       if (!result) {
//         result = [];
//       }
  
//       localforage.setItem("saved", result)
//         .then(function () {
//           console.log(result);
//           for(var i=0; i<result.length;i++){
//             console.log(result[i]);
// 
            // const currentDate = moment().format("mm/dd/yyyy");
            // const userAge = moment().diff(userDOB, 'years');
    //   
            // const currentTime = moment().format('HH:mm');
            // const firstTrainConverted = moment(result[i].firstTrainTime, "HH:mm").subtract(1, "day");
            // // Difference between the times
            // var dif = moment().diff(moment(firstTrainConverted), "minutes");
            // console.log("diff: " +dif)
            // // Leftover minutes
            // var leftover = dif % result[i].frequencyMins;
            // console.log("left over: "+leftover);
            // // Minutes away
            // var minsaway = result[i].frequencyMins - leftover;
            // console.log("mins away: " +minsaway);
            // // Next Train
            // var nexttrain = moment().add(minsaway, "m").format("hh:mm A");
            // console.log("next train: " +nexttrain);
//   
//             
            //displaying data on to the table
            // var table = document.getElementById("trainInfoTable");
            // var row = table.insertRow(0);
            // var cell1  = row.insertCell(0);
            // var cell2  = row.insertCell(1);
            // var cell3  = row.insertCell(2);
            // var cell4  = row.insertCell(3);
            // var cell5 = row.insertCell(4);
            // cell1.innerHTML = result[i].trainName;
            // cell2.innerHTML = result[i].destination;
            // cell3.innerHTML = result[i].frequencyMins;
            // cell4.innerHTML = nexttrain;
            // cell5.innerHTML = minsaway;
    //   
//           }   
//         });
//     });
//   };
//    
//   //displayTableRusults();