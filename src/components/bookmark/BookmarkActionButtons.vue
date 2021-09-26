<script>
import BookmarkDeleteButton from "@/components/bookmark/BookmarkDeleteButton.vue";
import BookmarkEditButton from "@/components/bookmark/BookmarkEditButton.vue";

export default {
  components: {
    BookmarkDeleteButton,
    BookmarkEditButton,
  },
};
</script>

<template>
  <div class="d-flex justify-content-between m-1 p-1">
    <BookmarkEditButton />
    <BookmarkDeleteButton />
  </div>
</template>

<style scoped>
.btn {
  width: 40px;
  height: 40px;
  color: #e9445fb3;
}

.btn:hover {
  font-size: 125%;
  color: #e94560;
}
</style>
