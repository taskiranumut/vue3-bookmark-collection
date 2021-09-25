<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    handleSaveBookmark() {
      const bookmark = { ...this.bookmarkItems };
      this.postBookmark(bookmark);
      this.$router.push({
        name: "Home",
      });
    },
    ...mapActions({
      postBookmark: "postBookmark",
    }),
  },
  computed: {
    ...mapGetters({
      bookmarkItems: "_bookmarkItems",
    }),
  },
};
</script>

<template>
  <button @click="handleSaveBookmark" class="btn save-btn border me-2">
    Save
  </button>
</template>

<style scoped>
.save-btn {
  background-color: #e9445fb3;
  width: 76px;
}

.save-btn:hover,
.save-btn:focus {
  background-color: #e9445f;
  font-weight: bold;
}

.save-btn,
.save-btn:hover,
.save-btn:focus {
  color: #e6e6e6;
}
</style>
