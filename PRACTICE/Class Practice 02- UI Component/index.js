/*Create a user object with your first name and last name.
Write a function ( not compulsory ) to determine the avatar color based on the first letter of your first name.
Apply the function to set and print the avatar color for your user. */

//FOR FIRST NAME
const user = {
    firstName: "Arisha",
    lastName: "Nawaz"
};
function getAvatarColor(firstName) {
    // Mapping of letters to colors
    const colorMap = {
        'A': '#687399', 'G': '#687399', 'M': '#687399', 'S': '#687399', 'Y': '#687399',
        'B': '#6DAEB0', 'H': '#6DAEB0', 'N': '#6DAEB0', 'T': '#6DAEB0', 'Z': '#6DAEB0',
        'C': '#FFDCA8', 'I': '#FFDCA8', 'O': '#FFDCA8', 'U': '#FFDCA8',
        'D': '#FAA578', 'J': '#FAA578', 'P': '#FAA578', 'V': '#FAA578',
        'E': '#C46693', 'K': '#C46693', 'Q': '#C46693', 'W': '#C46693',
        'F': '#78518A', 'L': '#78518A', 'R': '#78518A', 'X': '#78518A'
    };
    // Get the first letter of the first name and convert to uppercase
    const firstLetter = firstName[0].toUpperCase();
    return colorMap[firstLetter] || '#3498db'; 
}
const avatarElement = document.getElementById('avatar');
// Set the background color of the avatar 
const avatarColor = getAvatarColor(user.firstName);
avatarElement.style.backgroundColor = avatarColor;







//SAME FUNCTION FOR LAST NAME
function getAvatarColor(lastName) {
    const colorMap = {
        'A': '#687399', 'G': '#687399', 'M': '#687399', 'S': '#687399', 'Y': '#687399',
        'B': '#6DAEB0', 'H': '#6DAEB0', 'N': '#6DAEB0', 'T': '#6DAEB0', 'Z': '#6DAEB0',
        'C': '#FFDCA8', 'I': '#FFDCA8', 'O': '#FFDCA8', 'U': '#FFDCA8',
        'D': '#FAA578', 'J': '#FAA578', 'P': '#FAA578', 'V': '#FAA578',
        'E': '#C46693', 'K': '#C46693', 'Q': '#C46693', 'W': '#C46693',
        'F': '#78518A', 'L': '#78518A', 'R': '#78518A', 'X': '#78518A'
    };
   const lastLetter=lastName[0].toUpperCase(); 
return colorMap[lastLetter] || "#3498vb";
}
const avatarElement1 = document.getElementById('avatar1');
const avatarColor1 = getAvatarColor(user.lastName);
avatarElement1.style.backgroundColor = avatarColor1;



