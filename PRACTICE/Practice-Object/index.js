//METHOD 01
// Creating an object using object literal syntax
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  console.log(person.firstName); // Output: John
  console.log(person.age); // Output: 30
  console.log(person.fullName()); // Output: John Doe
  
  


  //METHOD 2
  // Constructor function for creating Person objects
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
  }
  
  // Creating objects using the constructor function
  const person1 = new Person('Jane', 'Smith', 25);
  const person2 = new Person('Michael', 'Johnson', 35);
  
  console.log(person1.firstName); // Output: Jane
  console.log(person2.age); // Output: 35
  console.log(person1.fullName()); // Output: Jane Smith
  


