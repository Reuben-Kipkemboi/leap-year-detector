// var input = [];
// // var items = prompt("Enter your Items:"); 
//  function addInput(items){
//      input.push(items);
//      console.log("Your Items:" + input.join(","));
//  }
//  addInput();


// a program that takes two numbers - one to count to
// for(var i =5; i<=30; i+=5){
//     console.log(i)
// }


// for(var i =7; i<=50; i+=7){
//     console.log(i)
// }

// var friends =["Jane", "sandra", "peter"];
//  for (i= friends[0]; i<=friends.length; i++){
//  console.log("HEllo at:" + " " + friends);
//  }

//  var friends =["Jane", "sandra", "Peter"]; 
//  for (i = [0]; i<friends.length; i++){
//  console.log("HEllo at:" + " " + friends);
// }


let button = document.getElementById("btn")
function checkLeapYear (){
    let year = document.getElementById("year");
    let myYear=year.value;
    myYear = parseInt(myYear);
    console.log(myYear)
    
    if((myYear % 4 ===0) && myYear%100 !==0 || (myYear % 400 ===0))
    {
        alert(myYear + " " + "is a leap Year");
    }
    else{
        alert(myYear + " " + "is not a leap Year");
    }
}
btn.addEventListener('click', function (e) {
    e.preventDefault();
    checkLeapYear();
});
