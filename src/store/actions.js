import { appAxios } from "@/utils/appAxios";

export default {
  getBookmarkList({ commit }) {
    appAxios
      .get("/")
      .then((res) => res.data)
      .then((bookmarkList) => {
        commit("fillBookmarkList", bookmarkList);
      })
      .catch((err) => console.log(err));
  },
  postBookmarkToApi({ commit }, bookmark) {
    appAxios
      .post("/", bookmark)
      .then(() => commit("addToBookmarkList", bookmark))
      .then(() => commit("resetBookmarkItems"))
      .catch((err) => console.log(err));
  },
};
