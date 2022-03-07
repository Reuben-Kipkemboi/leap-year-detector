// form validation

let button = document.getElementById("btn")

function validate() {
    if (myYear == "" || myYear == null || myYear.length !== 4) {
        alert("Kindly use the correct year format!");
    } else {
        return true;
    }
}

function checkLeapYear() {
    let year = document.getElementById("year");
    let myYear = year.value;
    myYear = parseInt(myYear);
    console.log(myYear)

    if ((myYear % 4 === 0) && myYear % 100 !== 0 || (myYear % 400 === 0)) {
        alert(myYear + " " + "is a leap Year");
    } else {
        alert(myYear + " " + "is not a leap Year");
    }
}
btn.addEventListener('click', function (e) {
    e.preventDefault();


    // validate();
    checkLeapYear();
});
