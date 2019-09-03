const careBear = ["Funshine Bear","Grumpy Bear","Lots-o-Love Bear","Friend Bear","Cheer Bear"]


function renderButtons() {

    document.getElementById("wrestler-buttons").innerHTML = "";

        for (let i = 0; i < careBears.length; i++) {

            const a = document.createElement("button");
            
            a.setAttribute("data-person" , careBear[i]);
            
            a.innerHTML = careBears[i];
            
            document.getElementById("careBears-buttons").append(a);
        }
      
}

renderButtons();
