/*2: Define a function named fetchPosts that uses the JSONPlaceholder API
      (https://jsonplaceholder.typicode.com) to fetch a list of posts and
      returns a promise that resolves to an array of post objects. Use the axios
      library to make the API call and the data property to parse the response.
      Use the filter method to filter out the posts that do not have a title.
      Use the sort method to sort the remaining posts by their ID in ascending
      order. Write code to test this function by calling it and logging the
      result*/

//FIRST OF ALL COMMAND RUNS ON TERMINAL
//=>>>>>>>>>>>>>>>   npm install axios 

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        // Filter out posts that do not have a title
        const filteredPosts = posts.filter(post => post.title);

        // Sort the remaining posts by their ID in ascending order
        const sortedPosts = filteredPosts.sort((a, b) => a.id - b.id);

        return sortedPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Test the function by calling it and logging the result
fetchPosts().then(posts => console.log(posts));
