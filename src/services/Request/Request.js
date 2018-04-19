import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://pokeapi.co/api/v2/'
});

export default instance;
