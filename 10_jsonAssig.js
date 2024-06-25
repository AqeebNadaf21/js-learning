// const employee = `{
//   "name": "Aleix Melon",
//   "id": "E00245",
//   "role": ["Dev", "DBA"],
//   "age": 23,
//   "doj": "11-12-2019",
//   "married": false,
//   "address": {
//     "flatNum": "32, Laham St.",
//     "city": "InnsBruck",
//     "city": "Austria"
//   },
//   "referred-by": "E0012"
// }`

// console.log(typeof employee);
// console.log(employee);

// // const employee = JSON.parse(employee);
// // console.log(employee.role);

// // const employee = JSON.parse(jsonString);
// // console.log(employee.role);
// // console.log(employee.name.split(' ')[1]);
// // console.log(employee.doj.split('-')[0]);



const employee = {
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "flatNum": "32, Laham St.",
      "city": "InnsBruck",
      "country": "Austria"
    },
    "referred-by": "E0012"
  };

  console.log(typeof employee);

  console.log(employee);
  
  console.log(`Role -> ${employee.role[0]}`);
  
  const [firstName, lastName] = employee.name.split(" ");
  console.log(`Last Name -> ${lastName}`);
  
  const [day, month, year] = employee.doj.split("-");
  console.log(`Joining Year -> ${year}`);


