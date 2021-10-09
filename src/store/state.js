export default {
  bookmarkList: [],
  bookmarkItems: {
    bookmarkTitle: null,
    bookmarkUrl: null,
    bookmarkDescription: null,
    id: null,
  },
  isEdit: false,
  formCheck: {
    title: {
      isValid: false,
      isActiveWarn: false,
    },
    url: {
      isValid: false,
      isActiveWarn: false,
    },
  },
  spinnerCheck: {
    didGetBookmarkList: false,
    didGetBookmark: false,
    isSaveButton: false,
  },
};
