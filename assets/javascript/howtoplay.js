//Global variables
var array = [];
var age;

//Create a function
function submitInfo() {
    document.getElementById("age").innerHTML = "";
    console.log("button was clicked");
    age = document.getElementById("age").value;
    array.push(age);
}
document.querySelector("#submit").addEventListener("click", function () {
    event.preventDefault(); //not sure why but if I remove this then the audio doesn't work
    localforage.clear().then(submitInfo()); //cleared localforage here so it only saves age once
    //make an object to put the array
    let dataIn = {
        age: age,
    }
    localforage.getItem("saved").then(function (result) {
        if (!result) {
        result = [];
        }
        result.push(dataIn);
        localforage.setItem("saved", result)
        .then(function () {
            console.log(result);   
    });
    });


});