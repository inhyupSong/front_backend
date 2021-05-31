import axios from "axios";
import config from "./config";
//import { URI } from "@/config";

export default axios.create({
  //baseURL: process.env.VUE_APP_EXT_REST_URL,
  baseURL: config.URI,
  headers: {
    "Content-Type": "application/vnd.api+json"
  }
});
