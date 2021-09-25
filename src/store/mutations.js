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
    for (const key in state.bookmarkItems) state.bookmarkItems[key] = null;
  },
};
