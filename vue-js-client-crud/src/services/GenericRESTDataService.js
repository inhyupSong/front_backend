import http from '../http-common';

class GenericRESTDataService {
  getAll() {
    // TODO: asyn call. currently the future promise can't be read to map the ressource name to a generic variable
    return http.get('/books');
    // TODO: error handling!! check return code. check object type
  }

  get(id) {
    return http.get(`/books/${id}`);
  }

  create(data) {
    return http.post('/books', data);
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

  findByTitle(title) {
    return http.get(`/books?title=${title}`);
  }
  /*   
  fcuk(){
    return http.get("/posts");
  } */
}

export default new GenericRESTDataService();
