<template>
  <AppHeader />
  <div class="container">
    <div class="col-6 offset-3 border p-3">
      <NewBookmarkButton />
      <BookmarkItem />
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
</style>
