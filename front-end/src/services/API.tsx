import axios from "axios";

export const ApiService = axios.create({
  baseURL: "https://vibrant-baguette-35995.herokuapp.com"
})