import http from '../http-common';

const getAll = () => {
  try {
    console.log('App- Acessou Get All');
    return http.get('/grade');
  } catch (err) {
    console.log('App - Get All - Erro:' + err.message);
  }
};

const get = (id) => {
  return http.get(`/grade/${id}`);
};

const create = (data) => {
  return http.post('/grade', data);
};

const update = (id, data) => {
  return http.put(`/grade/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/grade/${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
