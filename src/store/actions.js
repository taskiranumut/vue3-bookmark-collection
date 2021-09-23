import { appAxios } from "../utils/appAxios";

export default {
  fillBookmarkList({ commit }) {
    appAxios
      .get("/")
      .then((res) => res.data)
      .then((bookmarkList) => {
        commit("setBookmarkList", bookmarkList);
      });
  },
};
