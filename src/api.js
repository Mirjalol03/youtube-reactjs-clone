import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCJnIPIkij2fBNr94EKpnBJTn4hDwdNgJU",
  },
});


export default request