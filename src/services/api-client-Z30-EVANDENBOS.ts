import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d10800656bd4d68ae036c51085f3f31",
  },
});
