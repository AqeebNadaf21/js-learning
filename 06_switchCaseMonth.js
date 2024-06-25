// Assignment 01: File→ 06_switchCaseMonth.js
// Create Normal Function with name →monthOfYear( ) with one arg → month. Inside this write a switch
// case and pass month in switch
// 1. Given a month number then log the name of the month
// 1 —- January
// 2 —-- February
// …………………..
// 12 —-- December
// Don;t forget to add the default case.
//  Invoke function monthOfYear(0 ) for monthOfYear( 2), monthOfYear( 5), monthOfYear(12 ),
// monthOfYear( 15 ), monthOfYear( 100) , monthOfYear( null) , monthOfYear( undefined) 
console.log("===== Create Normal Function with name →monthOfYear( ) with one arg → month =====");
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
        console.log(`Invalid input ${month}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);