export default {
  _bookmarkList: (state) => state.bookmarkList,
  _bookmarkItems: (state) => state.bookmarkItems,
  _bookmarkTitle: (state) => state.bookmarkItems.bookmarkTitle,
  _bookmarkUrl: (state) => state.bookmarkItems.bookmarkUrl,
  _bookmarkDescription: (state) => state.bookmarkItems.bookmarkDescription,
  _didGetBookmarkList: (state) => state.spinnerCheck.didGetBookmarkList,
  _didGetBookmark: (state) => state.spinnerCheck.didGetBookmark,
  _isSaveButton: (state) => state.spinnerCheck.isSaveButton,
};
