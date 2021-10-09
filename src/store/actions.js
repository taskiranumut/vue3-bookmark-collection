import { appAxios } from "@/utils/appAxios";

export default {
  getBookmarkList({ commit }) {
    commit("setDidGetBookmarkList", true);
    return appAxios
      .get("/")
      .then((res) => res.data)
      .then((bookmarkList) => {
        commit("fillBookmarkList", bookmarkList);
      })
      .then(() => commit("setDidGetBookmarkList", false))
      .catch((err) => console.log("getBookmarkList error: ", err));
  },
  getBookmarkFromApiById({ commit }, bookmarkId) {
    commit("setDidGetBookmark", true);
    return appAxios
      .get(`/${bookmarkId}`)
      .then((res) => res.data)
      .then((bookmark) => commit("setBookmarkItems", bookmark))
      .then(() => commit("setDidGetBookmark", false))
      .catch((err) => console.log("getBookmarkFromApiById error: ", err));
  },
  postBookmarkToApi({ commit }, bookmark) {
    return appAxios
      .post("/", bookmark)
      .then(() => commit("resetStates"))
      .catch((err) => console.log("postBookmarkToApi error: ", err));
  },
  deleteBookmarkFromApi({ commit }, bookmarkId) {
    return appAxios
      .delete(`/${bookmarkId}`)
      .then(() => commit("deleteBookmarkFromBookmarkList", bookmarkId))
      .catch((err) => console.log("deleteBookmarkFromApi error: ", err));
  },
  updateBookmarkToApi({ commit }, bookmark) {
    return appAxios
      .put(`/${bookmark.id}`, bookmark)
      .then(() => commit("resetStates"))
      .then(() => commit("setIsEdit", false))
      .catch((err) => console.log("updateBookmarkToApi error: ", err));
  },
};
