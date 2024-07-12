function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .then(users => {
            // Filter out users without an email address
            const usersWithEmail = users.filter(user => user.email);

            // Calculate the total number of users with a phone number
            const totalUsersWithPhone = usersWithEmail.reduce((acc, user) => {
                return user.phone ? acc + 1 : acc;
            }, 0);

            return {
                usersWithEmail,
                totalUsersWithPhone
            };
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            throw error;
        });
}

// Testing 
fetchUsers()
    .then(({ usersWithEmail, totalUsersWithPhone }) => {
        console.log('Users with email addresses:', usersWithEmail);
        console.log('Total users with a phone number:', totalUsersWithPhone);
    })
    .catch(error => console.error('Error in test:', error));
