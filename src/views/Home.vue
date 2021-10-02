<script>
import NewBookmarkButton from "@/components/bookmark/NewBookmarkButton.vue";
import BookmarkItem from "@/components/bookmark/BookmarkItem.vue";
import { mapActions, mapState } from "vuex";

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
    ...mapState({
      bookmarkList: "bookmarkList",
    }),
  },
};
</script>

<template>
  <NewBookmarkButton />
  <div class="text-center mb-3" v-if="bookmarkList.length === 0">
    <span class="p-2 border">Empty bookmark list</span>
  </div>
  <div v-else>
    <BookmarkItem
      v-for="bookmark in bookmarkList"
      :key="bookmark.id"
      :bookmark="bookmark"
    />
  </div>
</template>
