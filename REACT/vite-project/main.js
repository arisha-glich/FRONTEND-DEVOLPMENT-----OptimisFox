import axios from 'axios';

const fetchComments = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/comments';

        const response = await axios.get(url);
        const comments = response.data;

        const commentsWithName = comments.filter(comment => comment.name);
        return commentsWithName;

    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
}

function displayCommentsInTable(comments) {
    const tableBody = document.querySelector('#commentsTable tbody');

    comments.forEach(comment => {
        const row = tableBody.insertRow();
        ['id', 'postId', 'name', 'email', 'body'].forEach(key => {
            const cell = row.insertCell();
            cell.textContent = comment[key];
        });
    });
}

// Fetch comments
fetchComments()
    .then(comments => {
        console.log('Filtered comments:', comments);
        displayCommentsInTable(comments);
    })
    .catch(error => console.error('Error in test:', error));
