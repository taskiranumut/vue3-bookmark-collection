import axios from "axios";

export const appAxios = axios.create({
  baseURL: "https://614b8a9be4cc2900179eb132.mockapi.io/bookmarks",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
