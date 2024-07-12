//METHOD 1
console.log(this); // In a browser, this will log the Window object


//METHOD 2
function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode, this will log the global object (Window in browsers)


//METHOD 3
//method context
const personss = {
name: 'Alice',
greet: function() {
  console.log(this.name);
}
};
personss.greet(); // Logs "Alice"

//METHOD 4
//use in constructor
function Peerson(name) {
    this.name = name;
  }
  
  const alice = new Peerson('Arisha Nawaz');
  console.log(alice.name); // Logs "Arisha Nawaz"


//use of call and apply
//almost same but apply takes arrugment in form of array and call take arrgument in form simple(fixed)form
  function greet(greeting) {
    console.log(greeting + ', ' + this.name);
  }
  
  const person = { name: 'Alice' };
  
  greet.call(person, 'Hello'); // Logs "Hello, Alice"
  greet.apply(person, ['Hi']); // Logs "Hi, Alice"
  
  

