console.log("=== Vehicle Details ===");
class Vehicle {

    // Data Members Or Properties or Attributes or States
    constructor(brand, model, year, color, fuelType){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelType = fuelType;
    }

    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: ${this.brand}, ${this.model}, ${this.year}, ${this.color}, ${this.fuelType}`);
    }
}

const car1 = new Vehicle("Toyota", "Corolla", 2023, "Silver", "Petrol");
car1.details();
const car2 = new Vehicle("Honda", "Civic", 2022, "Red", "Hybrid");
car2.details();
const car3 = new Vehicle("Ford", "Mustang", 2021, "Black", "Petrol");
car3.details();
const car4 = new Vehicle("Tesla", "Model 3", 2020, "White", "Electric");
car4.details();
const car5 = new Vehicle("BMW", "X5", 2019, "Blue", "Diesel");
car5.details();


console.log("====================================================================================");


console.log("=== College Details ===");
class College {

    // Data Members Or Properties or Attributes or States
    constructor(name, location, courses, establishedYear) {
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.establishedYear = establishedYear;
      }


    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: ${this.name}, ${this.location}, ${this.courses}, ${this.establishedYear}`);
    }
}

const college1 = new College("MIT", "Cambridge, MA", ["Computer Science", "Engineering", "Physics"], 1861);
college1.details();
const college2 = new College("Stanford University", "Stanford, CA", ["Business", "Engineering", "Humanities"], 1885);
college2.details();
const college3 = new College("Harvard University", "Cambridge, MA", ["Law", "Medicine", "Arts & Sciences"], 1636);
college3.details();
const college4 = new College("Oxford University", "Oxford, UK", ["History", "Philosophy", "Literature"], 1096);
college4.details();



