<script>
import BookmarkDeleteButton from "@/components/bookmark/BookmarkDeleteButton.vue";
import BookmarkEditButton from "@/components/bookmark/BookmarkEditButton.vue";

export default {
  props: ["bookmarkId"],
  components: {
    BookmarkDeleteButton,
    BookmarkEditButton,
  },
};
</script>

<template>
  <div class="d-flex justify-content-between m-1 p-1">
    <BookmarkEditButton :bookmarkId="bookmarkId" />
    <BookmarkDeleteButton :bookmarkId="bookmarkId" />
  </div>
</template>
