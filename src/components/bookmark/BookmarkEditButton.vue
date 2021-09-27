<script>
import { mapMutations } from "vuex";

export default {
  props: ["bookmarkId"],
  methods: {
    editBookmark(e) {
      e.stopPropagation();
      this.setIsEdit(true);
      this.goEditBookmarkView(this.bookmarkId);
    },
    goEditBookmarkView(bookmarkId) {
      this.$router.push({
        name: "EditBookmark",
        params: {
          id: bookmarkId,
        },
      });
    },
    ...mapMutations({
      setIsEdit: "setIsEdit",
    }),
  },
};
</script>

<template>
  <button @click="editBookmark" class="btn border p-0 px-1 me-2" title="Edit">
    <span><i class="fas fa-pen fa-lg"></i></span>
  </button>
</template>
