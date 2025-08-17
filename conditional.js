// // if block

// var age = 18;
// if ((age = 18)) {
//   console.log("done");
// }
// // if||else

// var city = "pune";
// if ((city = "mumbai")) {
//   console.log("I am living in pune");
// } else {
//   console.log("I am not living in pune");
// }

// // if else if ladder

// var marks = 50;
// if (marks > 60) {
//   console.log("A");
// } else if (marks > 70) {
//   console.log("B");
// } else if (marks > 75) {
//   console.log("c");
// } else {
//   console.log("D");
// }

// // switch case

// var days = 10;
// switch (days) {
//   case 1:
//     console.log("monday");
//     break;

//   case 2:
//     console.log("tuesday");
//     break;

//   case 3:
//     console.log("wednesday");
//     break;

//   case 4:
//     console.log("thursday");
//     break;

//   case 5:
//     console.log("friday");
//     break;

//   case 6:
//     console.log("saturday");
//     break;

//   case 7:
//     console.log("sunday");
//     break;

//   default:
//     console.log("invalid day");
//     break;
// }


var unit=100;
var amount=(unit*10)/100;
var bill=amount+unit;

if(unit<10||unit>300)
{
    console.log("invalid");
    
}
else if(unit>=10&&unit<=100)
{
    console.log("valid amount");
    
}
else if(unit>100&&unit<=200)
{
    console.log("average amount");
    
}
else if(unit>200&&unit<=300)
{
    console.log("high amount");
    
}
else
    {
    console.log("error");
}