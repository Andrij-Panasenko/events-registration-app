import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

export const getEvents = async () => {
  try {
    const response = await axios.get('/');

    return response.data;
  } catch (error) {
    console.error('Error getting events', error);
  }
};
