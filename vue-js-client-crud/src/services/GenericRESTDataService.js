//import axios from 'axios';
import http from '../http-common';
//import config from process.env.VUE_APP_EXT_REST_CONFIG_1_dots; //"./config";
import config from '../config';

class GenericRESTDataService {
  async getAll() {
    const response = await http.get('/' + config.RessourceName);

    return response.data[config.RessourceName];
  }

  async findById(id) {
    //TODO:  maket the function "Search by ID" work.
    const response = await http.get(`/books/${id}`);
    //const response = await http.get('/books/1');

    /* return response.data */
    /* console.log(response.data.book[config.attrbiutes.variable_0]);
      console.log(response.data.book[config.attrbiutes.variable_1]);*/
    console.log(response.data.book);
    const attrs = config.attrbiutes;
    /* const mapped = {};
    const obj = response.data.book;
    let counter = 0;
    Object.entries(obj).forEach(([key, value]) => {
      if (attrs.includes(key)) {
        mapped['jItem_' + counter] = value;
        counter++;
      }
    }); */

    const mapped = {};
    Object.entries(response.data.book).forEach(([key, value]) => {
      if (attrs.includes(key)) {
        mapped[key] = value;
      }
    });
    return [mapped];
  }

  create(data) {
    data[config.attribiutesTest.variable_1] = data.variable_1;
    data[config.attribiutesTest.variable_2] = data.variable_2;
    data[config.attribiutesTest.variable_3] = data.variable_3;
    data[config.attribiutesTest.variable_4] = data.variable_4;
    data[config.attribiutesTest.variable_5] = data.variable_5;

    return http.post('/' + config.RessourceName, data).then(result => {
      return result.data[config.attribiutesTest.variable_0];
    });
    //return http.post("/books", data);
  }

  async get(id) {
    return http.get(`/books/${id}`);
  }

  update(id, data) {
    return http.put(`/books/${id}`, data);
  }

  delete(id) {
    return http.delete(`/books/${id}`);
  }

  deleteAll() {
    return http.delete(`/books`);
  }
}

export default new GenericRESTDataService();
