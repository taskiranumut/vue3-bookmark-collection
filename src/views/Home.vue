<template>
  <AppHeader />
  <div class="container">
    <div class="col-6 offset-3 border p-3">
      <NewBookmarkButton />
      <BookmarkItem v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script>
import NewBookmarkButton from "@/components/NewBookmarkButton.vue";
import BookmarkItem from "@/components/BookmarkItem.vue";

export default {
  components: {
    NewBookmarkButton,
    BookmarkItem,
  },
};
</script>

<style scoped>
.col-6 {
  background-color: #16213e;
}

.border {
  border-radius: 5px;
}

img {
  border: 5px dashed #fff;
}
</style>
