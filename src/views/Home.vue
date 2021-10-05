<script>
import NewBookmarkButton from "@/components/bookmark/NewBookmarkButton.vue";
import BookmarkItem from "@/components/bookmark/BookmarkItem.vue";
import Spinner from "@/components/shared/Spinner.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    NewBookmarkButton,
    BookmarkItem,
    Spinner,
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
      didGetBookmarkList: "_didGetBookmarkList",
    }),
    ...mapState({
      bookmarkList: "bookmarkList",
    }),
  },
};
</script>

<template>
  <NewBookmarkButton />
  <Spinner v-if="didGetBookmarkList" />
  <div class="text-center mb-3" v-else-if="bookmarkList.length === 0">
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
