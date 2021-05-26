import axios from 'axios';
//import { mapResourceModules } from '@reststate/vuex';

//const token = '[the token you received from the POST request above]';

export default axios.create({

   baseURL: 'http://localhost:5001',
   //baseURL: 'http://jsonplaceholder.typicode.com',
   headers: {
    'Content-Type': 'application/vnd.api+json',
    //Authorization: `Bearer ${token}`,
  },
});
