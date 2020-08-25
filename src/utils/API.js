import axios from "axios";
const BASEURL = "https://randomuser.me/api/?seed=50&results=50";

export default {
  employees: () => {
    return axios.get(BASEURL);
  }
};