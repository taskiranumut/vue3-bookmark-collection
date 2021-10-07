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
    class="btn action-btn border rounded-3 p-0 px-1"
    title="Delete"
  >
    <span><i class="fas fa-trash-alt fa-lg"></i></span>
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
