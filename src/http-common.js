import axios from 'axios';

//Define a URL base da origem para consumo do servico
// localmente, para testes, em baseURL usar 'http://localhost:3001/'
// enquanto o react vai usar a 3000
export default axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json',
  },
});
