/* Question # 1 :Define a function named multiply that takes two numbers as parameters and returns their product. 
Write code to test this function with different input values.*/

function multiply(a, b)
{
    return a*b;
}
let a=4;
let b=4;
console.log(multiply(a,b))
//OUTPUT "16"



/*Question # 2 Write a function called greeting that takes a name as a parameter and returns a string that says "Hello, [name]!".
 Use template literals to construct the string. Write code to test this function with different input values. */

function greeting(name){
   return `Hello, ${name}!`;
}
console.log(greeting("Arisha"))
//OUTPUT "HELLO ARISHA"




/*Question # 3 Create an arrow function that takes an array of numbers and returns the sum of those numbers. 
Write code to test this function with different input arrays. */

const sumArray = (numbers) => {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5])); 
//OUTPUT "15"





/* Question # 4 Define a function called calculateBMI that takes a person's weight (in kilograms) and height (in meters) as parameters and returns their Body Mass Index (BMI). The formula for BMI is weight / (height * height).
 Write code to test this function with different input values. */

 function calculateBMI(weight, height){
    return weight/(height*height);

 }
 console.log(calculateBMI(70, 1.75));
 //OUTPUT "22.857142857142858"





 /*Question # 5 Write an arrow function that takes a string as a parameter and returns the length of that string.
  Write code to test this function with different input values. */
  const string_lenght =(string1) =>
    { return string1.length}
console.log(string_lenght("arishanawaz"))
//OUTPUT "1"





/*Question # 6 Define a function named reverseString that takes a string as a parameter and returns the reverse of that string. 
Write code to test this function with different input values. */

function reverseString(string1) {
    return string1.split('').reduce((reversed, character) => character + reversed, '');
}

console.log(reverseString("hello")); 
// Output: "olleh"





/* Question # 7 Write an arrow function that takes an object representing a person's name (with properties first and last) and returns a string that says "Hello, [first] [last]!".
 Use template literals to construct the string. Write code to test this function with different input values.
 */
const hello = (person)=>{
    return `Hello, ${person.first} ${person.last}!`
}
console.log(hello({first: "Arishan", last: "Awaz"}));




/*Question # 8 Define a function called capitalize that takes a string as a parameter and returns the same string with the first letter capitalized. 
Write code to test this function with different input values. */
function capitalize(string1){
    return string1.toUpperCase()
}
console.log(capitalize("arisha"))
//OUTPUT "ARISHA"




/*Question # 9 Write an arrow function that takes an array of strings and returns a new array with all the strings capitalized. Use the map method to apply the capitalization to each element. 
Write code to test this function with different input arrays. */
const capitalizeArray = (array1) => {
    return array1.map((string1) => string1.toUpperCase());
}
console.log(capitalizeArray(['hello', 'arisha', 'how', 'are', 'you']));
//OUTPUT ['HELLO', 'ARISHA', 'HOW', 'ARE', 'YOU']





/*Question # 10 Define a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (i.e., it reads the same forwards and backwards) and false otherwise. 
Write code to test this function with different input value */

function isPalindrome(string){
    return string.split('').reverse().join('') === string;
}
console.log(isPalindrome("arisha"));
//OUTPUT "FALSE"