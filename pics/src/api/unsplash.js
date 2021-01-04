import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KLP1CM4iZ7bpkzw-jbC3z-PPGDErqTXSZi4JvrCtVvI",
  },
});
