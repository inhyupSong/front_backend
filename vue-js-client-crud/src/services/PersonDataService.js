import http from '../http-common';

class PersonDataService {
  getAll() {
    return http.get('/people');
  }

  get(id) {
    return http.get(`/people/${id}`);
  }

  create(data) {
    return http.post('/people', data);
  }

  update(id, data) {
    return http.put(`/people/${id}`, data);
  }

  delete(id) {
    return http.delete(`/people/${id}`);
  }

  deleteAll() {
    return http.delete(`/people`);
  }

  findByTitle(title) {
    return http.get(`/people?title=${title}`);
  }
}

export default new PersonDataService();