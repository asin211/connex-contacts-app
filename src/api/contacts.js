import axios from 'axios';

// Base URL for the contacts API
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch contacts from the API
export const fetchContacts = async () => {
    try {
        // Make a GET request to the API
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
};