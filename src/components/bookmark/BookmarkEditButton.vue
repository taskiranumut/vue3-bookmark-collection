<script>
export default {
  methods: {
    editBookmark(e) {
      e.stopPropagation();
      const id = "demo123";
      this.getRouteEditBookmark(id);
    },
    getRouteEditBookmark(bookmarkId) {
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
  <button @click="editBookmark" class="btn border p-0 px-1 me-2" title="Edit">
    <span><i class="fas fa-pen fa-lg"></i></span>
  </button>
</template>
