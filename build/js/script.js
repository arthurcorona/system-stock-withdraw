const form = {
    newDate: () => document.querySelector('.today-date'),

}

document.addEventListener("DOMContentLoaded", () => {
    todayDate()
    teste()
})

function todayDate() {
    newDate = new Date()
    const day = String(newDate.getDate())
    const month = String(newDate.getMonth())
    const year = newDate.getFullYear() 
    
    const data = `${day}/${month}/${year}`
    console.log(todayDate());
}


function teste() {
    console.log("teste");
}