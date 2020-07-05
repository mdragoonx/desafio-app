import axios from 'axios';

//Define a URL base da origem para consumo do servico
// localmente, para testes, em baseURL usar 'http://localhost:3001/'
// enquanto o react vai usar a 3000
// define o app do heroku onde está buscando a api dos dados do MongoDB
export default axios.create({
  baseURL: 'https://majestic-yellowstone-34488.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
