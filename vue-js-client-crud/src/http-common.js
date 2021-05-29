import axios from 'axios';
//axios.defaults.baseURL = process.env.VUE_APP_EXT_REST_URL;
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//import { mapResourceModules } from '@reststate/vuex';

//const token = '[the token you received from the POST request above]';

export default axios.create({
  baseURL: process.env.VUE_APP_EXT_REST_URL,

  //baseURL: 'http://localhost:5001',
  //baseURL: 'http://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    //Authorization: `Bearer ${token}`,
  },
});
