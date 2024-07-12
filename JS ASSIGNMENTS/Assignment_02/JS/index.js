/*const students = [ { name: "Alice", grade: 90 }, 
{ name: "Bob", grade: 80 }, 
 { name: "Charlie", grade: 95 }, 
{ name: "Dave", grade: 85 } ]; 
 

Problem # 1: Use the "concat" method to combine the "students" array with an additional array of objects representing new students who joined the class mid-semester. 
The new students are:const newStudents = [ { name: "Eve", grade: 88 }, { name: "Frank", grade: 92 } ];*/

const students = [ { name: "Alice", grade: 90 }, 
    { name: "Bob", grade: 80 }, 
     { name: "Charlie", grade: 95 }, 
    { name: "Dave", grade: 85 } ]; 
const newStudents = [ { name: "Eve", grade: 88 }, { name: "Frank", grade: 92 } ];
const newarray= students.concat(newStudents);
console.log(newarray);
 




/*Problem # 2: Use the "entries" method to create an iterator over the "students"
Object.entries is used itretate the object in form of [KEY, PAIR]*/ 
    students.forEach(element => {
    const arr= Object.entries(element)
    console.log(arr)
        
    });





/*Problem # 3: Use the "every" method to check if all students have a passing grade (i.e. grade >= 70).*?*/
const student3 = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 }
  ];
  
  const allPassing = student3.every(student3 => student3.grade >= 70);
  
  console.log("Do all students have passing grades?", allPassing);
  






/*
Problem # 4: Use the "fill" method to replace all student grades with a grade of 100.*?
*/
const student4 = students.map(student => ({ ...student, grade: 100 }));
console.log(student4);






//Problem #5: Use the filter method to create a new array containing only the students who have a grade above 90.
const studentsAbove90 = students.filter(student => student.grade > 90);
console.log(studentsAbove90);





//Problem #6: Use the find method to find the first student with a name of "Charlie" and log their grade to the console.
const charlie = students.find(student => student.name === "Charlie");
if (charlie) {
    console.log(charlie.grade);
}





//Problem #7: Use the findIndex method to find the index of the first student with a grade of 85
const index = students.findIndex(student => student.grade === 85);







//Problem #8: Use the flat method to flatten an array of arrays.
const nestedArray = [[1, 2], [3, 4, 5], [6]];
const flatArray = nestedArray.flat();
console.log(flatArray);






//Problem #9: Use the flatMap method to map over the students array and create a new array of objects with a passing property.

const studentsWithPassing = students.flatMap(student => ({
    ...student,
    passing: student.grade >= 70
}));
console.log(studentsWithPassing);







//Problem #10: Use the forEach method to log the name of each student to the console.
students.forEach(student => {
    console.log(student.name)
    
});





//Problem #11: Use the from method to create a new array from a string.
const string = "hello world";
const arrayFromString = Array.from(string);
console.log(arrayFromString);





//Problem #12: Use the includes method to check if the students array includes a student with a name of "Eve"
const hasEve = students.some(student => student.name === "Eve");
console.log(hasEve);






//Problem #13: Use the indexOf method to find the index of the first student with a name of "Bob".
const bob= students.indexOf(student => student.name === 'Bob')
console.log(bob);





//Problem #14: Use the map method to create a new array containing only the grades of the students.
const grades = students.map(student => student.grade);
console.log(grades);





//Problem #15: Use the push method to add a new student to the end of the students array.
const newarray3 ={ name: "Arisha", grade: 200 }
 students.push(newarray3)
console.log(students)





//Problem #16: Use the pop method to remove the last student from the students array.
const newarray5= students.pop()
console.log('this array is poped out:' ,newarray5)





//Problem #17: Use the reverse method to reverse the order of the students array.
const arraystud = students.reverse()
console.log(arraystud)





//Problem #18: Use the shift method to remove the first student from the students array.
const shiftedStudent = students.shift();
console.log(students);
console.log(shiftedStudent);





//Problem #19: Use the reduce method to calculate the average grade of the students.
const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(averageGrade);





      




