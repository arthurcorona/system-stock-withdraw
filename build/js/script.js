const form = {
    newDate: () => document.querySelector('.today-date'),
    date : () => new Date(),
    day: () => form.date().getDate(),
    month: () => form.date().getMonth() + 1,
    year: () => form.date().getFullYear(),
    currentDate: () => `${form.day()}/${form.month()}/${form.year()}`,

    clientInput: () => document.getElementsByClassName("client-input").value,
    volumesInput: () => document.getElementsByClassName("vol-input").value,
    submitButton: () => document.getElementById("submit-button"),
    allInputs: () => document.querySelectorAll("input"),



}

const items = 
    {
        client: "name",
        volumes: 0,
        date: new Date().toLocaleDateString()
    }

document.addEventListener("DOMContentLoaded", () => {
    getCurrentDate()
})

// put the date in HTML
function getCurrentDate() {
    document.querySelector(".date-today").innerHTML += 
        `
        <div class="current-date">
            ${form.currentDate()}
        </div>
        `
}

//create the order in database
function createOrderInDB() {
    db.collection('withdraw').doc().update({
        client: form.clientInput(),
        vol: form.volumesInput()
      }).then(() => {
        document.location.reload(true)
      }).catch(error => {
        console.log(error);
    })
}

//validate inputs/button

let inputs = form.allInputs()
let submitButton = form.submitButton()

function checkInputs(inputs) {

  let filled = true;

  inputs.forEach(function(input) {

    if(input.value === "") {
        filled = false;
    }

  })
  return filled;
}

inputs.forEach(function(input) {
  
  input.addEventListener("keyup", function() {

    if(checkInputs(inputs)) {
      submitButton.disabled = false;
    }
    else {
      submitButton.disabled = true;
    }
  })
})

function writeOrderInHTML() {
    
}  

