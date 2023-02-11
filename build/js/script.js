const form = {
    newDate: () => document.querySelector('.today-date'),
    date : () => new Date(),
    day: () => form.date().getDate(),
    month: () => form.date().getMonth() + 1,
    year: () => form.date().getFullYear(),
    currentDate: () => `${form.day()}/${form.month()}/${form.year()}`
}

// console.log(form.currentDate()); // today!

document.addEventListener("DOMContentLoaded", () => {
    getCurrentDate()
})

function getCurrentDate() {
    document.querySelector(".date-today").innerHTML += 
        `
        <div class="current-date">
            ${form.currentDate()}
        </div>
        `
}
