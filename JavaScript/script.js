// form validation

let button = document.getElementById("btn");

function validate(){
    let year = document.getElementById("year")
    if(year.value == "" || year.value == null || year.value.length !=4){
        alert("Please enter the correct year format");
    }else{
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
let form = document.getElementById('year');
btn.addEventListener('click', function (event) {
    event.preventDefault();  
    validate();
    checkLeapYear();
});
