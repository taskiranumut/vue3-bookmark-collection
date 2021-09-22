import { createStore } from "vuex";

export default createStore({
  state: {
    bookmark: {
      bookmarkTitle: "GitHub profile - Umut Taşkıran",
      bookmarkUrl: "https://github.com/taskiranumut",
      bookmarkDescription: "This is first description",
    },
  },
  getters: {
    _bookmarkTitle: (state) => state.bookmark.bookmarkTitle,
    _bookmarkUrl: (state) => state.bookmark.bookmarkUrl,
    _bookmarkDescription: (state) => state.bookmark.bookmarkDescription,
  },
  mutations: {},
  actions: {},
  modules: {},
});
