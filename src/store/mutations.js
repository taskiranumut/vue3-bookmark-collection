export default {
  fillBookmarkList(state, list) {
    state.bookmarkList = list;
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
  setBookmarkItems(state, bookmark) {
    // console.log(bookmark);
    state.bookmarkItems.bookmarkTitle = bookmark.bookmarkTitle;
    state.bookmarkItems.bookmarkUrl = bookmark.bookmarkUrl;
    state.bookmarkItems.bookmarkDescription = bookmark.bookmarkDescription;
  },
  resetBookmarkItems(state) {
    for (const key in state.bookmarkItems) state.bookmarkItems[key] = null;
  },
  deleteBookmarkFromBookmarkList(state, bookmarkId) {
    state.bookmarkList = state.bookmarkList.filter(
      (item) => item.id !== bookmarkId
    );
  },
  setIsEdit(state, status) {
    state.isEdit = status;
  },
};
