import { appAxios } from "@/utils/appAxios";

export default {
  getBookmarkList({ commit }) {
    return appAxios
      .get("/")
      .then((res) => res.data)
      .then((bookmarkList) => {
        commit("fillBookmarkList", bookmarkList);
      })
      .catch((err) => console.log("getBookmarkList error: ", err));
  },
  postBookmarkToApi({ commit }, bookmark) {
    return appAxios
      .post("/", bookmark)
      .then(() => commit("resetBookmarkItems"))
      .catch((err) => console.log("postBookmarkToApi error: ", err));
  },
  deleteBookmarkFromApi({ commit }, bookmarkId) {
    return appAxios
      .delete(`/${bookmarkId}`)
      .then(() => commit("deleteBookmarkFromBookmarkList", bookmarkId))
      .catch((err) => console.log("deleteBookmarkFromApi error: ", err));
  },
};
