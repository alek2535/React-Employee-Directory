import axios from "axios";
const BASEURL = "https://randomuser.me/api/?seed=25";

export default {
  search: () => {
    return axios.get(BASEURL);
  }
};