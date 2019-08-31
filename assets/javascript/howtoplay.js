//Global variables
const age="8";

//Create a function
function submitInfo() {
    console.log("button was clicked");
    age = document.getElementById("age").value;
}
document.querySelector("#submit").addEventListener("click", function () {
    event.preventDefault();
    submitInfo();
    //make an object to put the array
    let dataIn = {
        age: age,
    }
});
//     console.log(document.getElementById("submit"));
//     console.log(dataIn);
//     //const value = document.querySelector(".form-control").value;
//     localforage.getItem("saved").then(function (result) {
//       console.log(result);
//       if (!result) {
//         result = [];
//       }
//       result.push(dataIn);
  
//       localforage.setItem("saved", result)
//         .then(function () {
//           //console.log("saved");
       
//           console.log(result);
//           displayTableRusults();   
//         });
//     });
    
   
//   })