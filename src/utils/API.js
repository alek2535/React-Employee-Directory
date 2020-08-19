import axios from "axios";
const BASEURL = "https://randomuser.me/api/?seed=25&results=25";

export default {
  employees: () => {
    return axios.get(BASEURL);
  }
};