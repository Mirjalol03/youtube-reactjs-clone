import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBdeyuW0wtZPxHGtjouClWat74QhHnJTsA",
  },
});


export default request
