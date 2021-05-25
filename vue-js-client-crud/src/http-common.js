import axios from 'axios';

export default axios.create({

   baseURL: 'http://localhost:5001',
   //baseURL: 'http://jsonplaceholder.typicode.com',

   headers: {
    'Content-type': 'application/json',
  },
});
