const month = "April";

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//In case of switch we need to apply break at the end if each case other wise it will execute all the below cases
// except default.

switch (month) {
    case "Januray":
        console.log(`The month is: ${month}`);
        break;
    case "Feb":
        console.log(`The month is: ${month}`);
        break;
    case "March":
        console.log(`The month is: ${month}`);
        break;
    case "April":
        console.log(`The month is: ${month}`);
        break;
    default:
        console.log("You entered the month");
        break;
}