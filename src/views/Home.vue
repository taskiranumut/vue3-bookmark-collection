<script>
import NewBookmarkButton from "@/components/NewBookmarkButton.vue";
import BookmarkItem from "@/components/BookmarkItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    NewBookmarkButton,
    BookmarkItem,
  },
  created() {
    this.getBookmarkList();
  },
  methods: {
    ...mapActions({
      getBookmarkList: "getBookmarkList",
    }),
  },
  computed: {
    ...mapGetters({
      bookmarkList: "_bookmarkList",
    }),
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <div class="col-6 offset-3 border p-3">
      <NewBookmarkButton />
      <BookmarkItem
        v-for="bookmark in bookmarkList"
        :key="bookmark.id"
        :bookmark="bookmark"
      />
    </div>
  </div>
</template>

<style scoped>
.col-6 {
  background-color: #16213e;
}
</style>
