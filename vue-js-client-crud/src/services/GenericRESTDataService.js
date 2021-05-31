//import axios from 'axios';
import http from "../http-common";
//import config from process.env.VUE_APP_EXT_REST_CONFIG_1_dots; //"./config";
import config from "../config";

class GenericRESTDataService {
  async getAll() {
    const response = await http.get("/" + config.RessourceName);

    return response.data[config.RessourceName].map(obj => {
      return {
        jItem_0: obj[config.attrbiutes.variable_0],
        jItem_1: obj[config.attrbiutes.variable_1],
        jItem_2: obj[config.attrbiutes.variable_2],
        jItem_3: obj[config.attrbiutes.variable_3],
        jItem_4: obj[config.attrbiutes.variable_4],
        jItem_5: obj[config.attrbiutes.variable_5]

        /* Gleiche wie oben!!
        return http.get("/" + config.RessourceName).then(response => {
      return response.data[config.RessourceName].map(obj => {
        return {
          jItem_1: obj.title,
          jItem_2: obj.author,
          jItem_3: obj.abstract */
      };
    });
  }

  async findById() {
    //TODO:  maket the function "Search by ID" work.
    //const response = await http.get(`/books/${id}`);
    /* const result = await http.get("/books/1");
    return result.map(obj => {
      return {
        jItem_0: obj[config.attrbiutes.variable_0],
        jItem_1: obj[config.attrbiutes.variable_1],
        jItem_2: obj[config.attrbiutes.variable_2],
        jItem_3: obj[config.attrbiutes.variable_3],
        jItem_4: obj[config.attrbiutes.variable_4],
        jItem_5: obj[config.attrbiutes.variable_5]
      }; 
      });*/
    /* var a = response.data[config.attrbiutes.variable_0];
    var b = response.data[config.attrbiutes.variable_1];
    var c = response.data[config.attrbiutes.variable_2];
    var d = response.data[config.attrbiutes.variable_3];
    var e = response.data[config.attrbiutes.variable_4];
    var f = response.data[config.attrbiutes.variable_5]; 

     var return_object = {
      jItem_0: a,
      jItem_1: b,
      jItem_2: c,
      jItem_3: d,
      jItem_4: e,
      jItem_5: f 
    };

     return {
      return_object
    }; */
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
