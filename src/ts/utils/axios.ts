import axios from "axios";

export default axios.create({
  baseURL: "https://express-api-prueba.herokuapp.com/api",
  responseType: "json"
});
