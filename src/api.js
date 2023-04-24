import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCcDuNYlhyVnYz0dafsmhq7r9Fx01Wpgf4",
  },
});


export default request