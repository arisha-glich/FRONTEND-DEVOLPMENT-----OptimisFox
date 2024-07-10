
function uniqueObjects(arr) {
    const unique = {};//initial object empty
    const result = [];//array passed 

    arr.forEach(obj => {
        if (!unique[obj.id]) {
            unique[obj.id] = true;
            result.push(obj);
        }
    });

    return result;
}
const input = [
    {id: 1, name: "abubakar", role: "engineering manager"},
    {id: 2, name: "maham", role: "developer"},
    {id: 3, name: "shawal", role: "developer"},
    {id: 1, name: "abubakar", role: "engineering manager"}
];

console.log(uniqueObjects(input));



/*
Question # 2 Define a function named longestWord that takes string and returns  longest word. For example:
input : "This is Optimusfox js internship class"
output : "Optimusfox"*/

function longestWord(string){
    let words = string.split(" ");
    let longest = words[0];
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
            
        }
    }
    return longest;
}
console.log(longestWord("This is Optimusfox js internshipp22 class"))


