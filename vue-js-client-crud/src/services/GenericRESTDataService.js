//import axios from 'axios';
import http from "../http-common";
//import config from process.env.VUE_APP_EXT_REST_CONFIG_1_dots; //"./config";
import config from "../config";

const transformAttributes = (result) => {
  return {
    jItem_0: result[config.attrbiutes.variable_0],
    jItem_1: result[config.attrbiutes.variable_1],
    jItem_2: result[config.attrbiutes.variable_2],
    jItem_3: result[config.attrbiutes.variable_3],
    jItem_4: result[config.attrbiutes.variable_4],
    jItem_5: result[config.attrbiutes.variable_5]
  };
};


class GenericRESTDataService {
  async getAll() {
    const response = await http.get("/" + config.RessourceName);

    return response.data[config.RessourceName].map(obj => {
      return transformAttributes(obj);
      /* Gleiche wie oben!!
      return http.get("/" + config.RessourceName).then(response => {
    return response.data[config.RessourceName].map(obj => {
      return {
        jItem_1: obj.title,
        jItem_2: obj.author,
        jItem_3: obj.abstract */
    });
  }

  async findById(id) {
    //TODO:  maket the function "Search by ID" work.
    //const response = await http.get(`/books/${id}`);
    const response = await http.get(`/books/${id}`);
    return transformAttributes(response.data);

  }

  create(data) {
    data[config.attrbiutes.variable_1] = data.variable_1;
    data[config.attrbiutes.variable_2] = data.variable_2;
    data[config.attrbiutes.variable_3] = data.variable_3;
    data[config.attrbiutes.variable_4] = data.variable_4;
    data[config.attrbiutes.variable_5] = data.variable_5;

    return http.post("/" + config.RessourceName, data).then(result => {
      return result.data[config.attrbiutes.variable_0];
    });
    //return http.post("/books", data);
  }

  get(id) {
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

  /* async findById() {
    //return http.get(`/books/${id}`).then(result => {

    //const response = await http.get(`/books/${id}`);
    const response = await http.get("/books/1");

    return response.data[config.RessourceName].map(obj => {
      return {
        jItem_0: obj[config.attrbiutes.variable_0],
        jItem_1: obj[config.attrbiutes.variable_1],
        jItem_2: obj[config.attrbiutes.variable_2],
        jItem_3: obj[config.attrbiutes.variable_3],
        jItem_4: obj[config.attrbiutes.variable_4],
        jItem_5: obj[config.attrbiutes.variable_5]
      };
    });
  } */

  /* return http.get(`/books?title=${title}`).then(result => {
      return result.data; //[config.RessourceName]
    });  */
  //return http.get(`/books/${id}`);
  /*   
  fcuk(){
    return http.get("/posts");
  } */
}

export default new GenericRESTDataService();
