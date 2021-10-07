<script>
export default {
  props: ["bookmarkId"],
  methods: {
    editBookmark(e) {
      e.stopPropagation();
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
  },
};
</script>

<template>
  <button
    @click="editBookmark"
    class="btn action-btn border rounded-3 p-0 px-1 me-2"
    title="Edit"
  >
    <span><i class="fas fa-pen fa-lg"></i></span>
  </button>
</template>

<style scoped>
.action-btn {
  width: 40px;
  height: 40px;
  color: #e9445fb3;
}

.action-btn:hover {
  font-size: 125%;
  color: #e94560;
}
</style>
