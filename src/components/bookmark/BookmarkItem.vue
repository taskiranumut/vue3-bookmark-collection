<script>
import BookmarkDetails from "@/components/bookmark/BookmarkDetails.vue";
import BookmarkActionButtons from "@/components/bookmark/BookmarkActionButtons.vue";
import BookmarkLink from "@/components/bookmark/BookmarkLink.vue";

export default {
  components: {
    BookmarkDetails,
    BookmarkActionButtons,
    BookmarkLink,
  },
  props: ["bookmark"],
  data() {
    return {
      bookmarkDetailsIsActive: false,
    };
  },
  methods: {
    showDetails() {
      this.bookmarkDetailsIsActive = !this.bookmarkDetailsIsActive;
    },
  },
};
</script>

<template>
  <div
    class="d-flex justify-content-between border bg-hover px-4 mt-4"
    :class="{ bgColor: bookmarkDetailsIsActive }"
    @click="showDetails"
  >
    <BookmarkLink :bookmark="bookmark" />
    <BookmarkActionButtons />
  </div>
  <BookmarkDetails v-if="bookmarkDetailsIsActive" :bookmark="bookmark" />
</template>

<style scoped>
.bg-hover:hover {
  cursor: pointer;
}

.bgColor,
.bg-hover:hover {
  background-color: #0f3460;
}
</style>
