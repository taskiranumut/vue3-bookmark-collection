export default {
  fillBookmarkList(state, list) {
    state.bookmarkList = list;
  },
  addToBookmarkList(state, bookmark) {
    state.bookmarkList.push(bookmark);
  },
  setBookmarkTitle(state, title) {
    state.bookmarkItems.bookmarkTitle = title;
  },
  setBookmarkUrl(state, url) {
    state.bookmarkItems.bookmarkUrl = url;
  },
  setBookmarkDescription(state, description) {
    state.bookmarkItems.bookmarkDescription = description;
  },
  resetBookmarkItems(state) {
    state.bookmarkItems.bookmarkTitle = "";
    state.bookmarkItems.bookmarkUrl = "";
    state.bookmarkItems.bookmarkDescription = "";
  },
};
