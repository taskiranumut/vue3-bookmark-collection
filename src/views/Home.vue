<script>
import NewBookmarkButton from "@/components/bookmark/NewBookmarkButton.vue";
import BookmarkItem from "@/components/bookmark/BookmarkItem.vue";
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
  <NewBookmarkButton />
  <BookmarkItem
    v-for="bookmark in bookmarkList"
    :key="bookmark.id"
    :bookmark="bookmark"
  />
</template>
