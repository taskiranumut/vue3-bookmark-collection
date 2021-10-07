<script>
import { mapActions } from "vuex";

export default {
  props: ["bookmarkId"],
  methods: {
    deleteBookmark(e) {
      e.stopPropagation();
      this.deleteBookmarkFromApi(this.bookmarkId);
    },
    ...mapActions({
      deleteBookmarkFromApi: "deleteBookmarkFromApi",
    }),
  },
};
</script>

<template>
  <button
    @click="deleteBookmark"
    class="btn border rounded-3 p-0 px-1"
    title="Delete"
  >
    <span><i class="fas fa-trash-alt fa-lg"></i></span>
  </button>
</template>
