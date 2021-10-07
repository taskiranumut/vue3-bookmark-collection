<script>
export default {
  methods: {
    newBookmark() {
      this.$router.push({
        name: "AddBookmark",
      });
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-end mb-3">
    <button
      @click="newBookmark"
      class="btn new-btn border rounded-3"
      title="New Bookmark"
    >
      + New
    </button>
  </div>
</template>

<style scoped>
.new-btn {
  background-color: #e9445fb3;
  color: #e6e6e6;
}

.new-btn:hover {
  background-color: #e9445f;
  color: #e6e6e6;
  font-weight: bold;
}
</style>
