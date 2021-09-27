<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["bookmarkId"],
  methods: {
    editBookmark(e) {
      e.stopPropagation();
      this.setIsEdit(true);
      this.getRouteEditBookmark(this.bookmarkId);
      const bookmark = this.getBookmarkFromBookmarkListById(this.bookmarkId);
      this.setBookmarkItems(bookmark);
    },
    getRouteEditBookmark(bookmarkId) {
      this.$router.push({
        name: "EditBookmark",
        params: {
          id: bookmarkId,
        },
      });
    },
    getBookmarkFromBookmarkListById(bookmarkId) {
      return this.bookmarkList.filter((item) => item.id === bookmarkId)[0];
    },
    ...mapMutations({
      setBookmarkItems: "setBookmarkItems",
      setIsEdit: "setIsEdit",
    }),
  },
  computed: {
    ...mapState({
      bookmarkList: "bookmarkList",
    }),
    // ...mapGetters({
    //   bookmarkList: "_bookmarkList",
    // }),
  },
};
</script>

<template>
  <button @click="editBookmark" class="btn border p-0 px-1 me-2" title="Edit">
    <span><i class="fas fa-pen fa-lg"></i></span>
  </button>
</template>
