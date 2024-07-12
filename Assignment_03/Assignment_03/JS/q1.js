/* Write a function called fetchAlbums that uses the JSONPlaceholder API
      (https://jsonplaceholder.typicode.com) to fetch a list of albums and
      returns a promise that resolves to an array of album objects. Use the
      fetch method to make the API call and the json method to parse the
      response. Use the filter method to filter out the albums that do not have
      a title. Use the map method to transform the remaining albums into a
      simpler format. Write code to test this function by calling it and logging
      the result.
*/

const fetchAlbums = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((albums) => {
      const filteredAlbums = albums.filter((album) => album.title);
      console.log(filteredAlbums)

      const transformedAlbums = filteredAlbums.map((album) => ({
        id: album.id,
        title: album.title,
        userId: album.userId,
      }));

      console.log(transformedAlbums);
    })
    .catch((error) => {
      console.error("Error fetching albums:", error);
    });
};

fetchAlbums();
