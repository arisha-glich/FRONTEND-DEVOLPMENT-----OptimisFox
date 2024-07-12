const fetchUsers = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        
        // Await the fetch request
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const users = await response.json();
        
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
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Testing the function
fetchUsers()
    .then(({ usersWithEmail, totalUsersWithPhone }) => {
        console.log('Users with email addresses:', usersWithEmail);
        console.log('Total users with a phone number:', totalUsersWithPhone);
    })
    .catch(error => console.error('Error in test:', error));
