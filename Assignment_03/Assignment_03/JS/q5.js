function fetchTodos() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            return response.json();
        })
        .then(data => {
            const incompleteTodos = data.filter(todo => !todo.completed);

            const simplifiedTodos = incompleteTodos.map(todo => ({
                id: todo.id,
                title: todo.title,
                userId: todo.userId
            }));

            return simplifiedTodos;
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
            throw error;
        });
}

// Testing 
fetchTodos()
    .then(todos => {
        console.log('Filtered and simplified todos:', todos);
    })
    .catch(error => console.error('Error in test:', error));
