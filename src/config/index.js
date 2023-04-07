import axios from 'axios';
const API = process.env.REACT_APP_API || `https://localhost:8081/api/`;

export default axios.create({
  baseURL: API,
});