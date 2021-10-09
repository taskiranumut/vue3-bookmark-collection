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
    state.bookmarkItems.bookmarkTitle = bookmark.bookmarkTitle;
    state.bookmarkItems.bookmarkUrl = bookmark.bookmarkUrl;
    state.bookmarkItems.bookmarkDescription = bookmark.bookmarkDescription;
    if (bookmark.id) state.bookmarkItems.id = bookmark.id;
  },
  resetStates(state) {
    for (const key in state.bookmarkItems) state.bookmarkItems[key] = null;
    const propertyList = ["isValid", "isActiveWarn"];
    for (const key in state.formCheck) {
      propertyList.forEach((item) => {
        state.formCheck[key][item] = false;
      });
    }
  },
  deleteBookmarkFromBookmarkList(state, bookmarkId) {
    state.bookmarkList = state.bookmarkList.filter(
      (item) => item.id !== bookmarkId
    );
  },
  setIsEdit(state, status) {
    state.isEdit = status;
  },
  setIsValid(state, payload) {
    state.formCheck[payload.formEl].isValid = payload.status;
  },
  setIsActiveWarn(state, payload) {
    state.formCheck[payload.formEl].isActiveWarn = payload.status;
  },
  setDidGetBookmarkList(state, status) {
    state.spinnerCheck.didGetBookmarkList = status;
  },
  setDidGetBookmark(state, status) {
    state.spinnerCheck.didGetBookmark = status;
  },
  setIsSaveButton(state, status) {
    state.spinnerCheck.isSaveButton = status;
  },
};
