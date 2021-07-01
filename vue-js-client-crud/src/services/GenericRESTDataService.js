//import axios from 'axios';
import http from '../http-common';
//import config from process.env.VUE_APP_EXT_REST_CONFIG_1_dots; //"./config";
import config from '../config';

class GenericRESTDataService {
  async getAll() {
    const response = await http.get(
      '/' + config.RessourceName
    );

    return response.data[config.RessourceName];
  }

  async findById(id) {
    //TODO:  maket the function "Search by ID" work.
    const response = await http.get(
      '/' + config.RessourceName + `/${id}`
      /* `/books/${id}` */
    );

    /* return response.data */
    /* console.log(response.data.book[config.attrbiutes.variable_0]);
      console.log(response.data.book[config.attrbiutes.variable_1]);*/
    console.log(
      response.data.config.RessourceName
    );
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
    Object.entries(
      response.data.config.RessourceName
    ).forEach(([key, value]) => {
      if (attrs.includes(key)) {
        mapped[key] = value;
      }
    });
    return [mapped];
  }

  create(data) {
    return http
      .post('/' + config.RessourceName, data)
      .then(result => {
        return result.data.id;
      });
    //return http.post("/books", data);
  }

  async get(id) {
    return http.get(
      '/' + config.RessourceName + `/${id}`
    );
    /* return http.get(`/books/${id}`); */
  }

  update(id, data) {
    return http.put(
      '/' + config.RessourceName + `/${id}`,
      data
    );
    /* return http.put(`/books/${id}`, data); */
  }

  delete(id) {
    return http.delete(
      '/' + config.RessourceName + `/${id}`
    );
    /* return http.delete(`/books/${id}`); */
  }
}

export default new GenericRESTDataService();
