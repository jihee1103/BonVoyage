import axios from "axios";

const instance = axios.create({
  baseURL:"https://sp-taskify-api.vercel.app/3-1"
})

export default instance;