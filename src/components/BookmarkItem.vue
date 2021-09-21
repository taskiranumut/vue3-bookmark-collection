<template>
  <div
    class="d-flex justify-content-between border bg-hover px-4 mt-4"
    :class="{ bgColor: bookmarkDetailsIsActive }"
    @click="showDetails"
  >
    <BookmarkLink />
    <BookmarkActionButtons />
  </div>
  <BookmarkDetails v-if="bookmarkDetailsIsActive" />
</template>

<script>
import BookmarkDetails from "@/components/BookmarkDetails.vue";
import BookmarkActionButtons from "@/components/BookmarkActionButtons.vue";
import BookmarkLink from "@/components/BookmarkLink.vue";

export default {
  data() {
    return {
      bookmarkDetailsIsActive: false,
    };
  },
  components: {
    BookmarkDetails,
    BookmarkActionButtons,
    BookmarkLink,
  },
  methods: {
    showDetails() {
      this.bookmarkDetailsIsActive = !this.bookmarkDetailsIsActive;
      console.log("showDetails works");
    },
  },
};
</script>

<style scoped>
.bg-hover:hover {
  background-color: #0f3460;
  cursor: pointer;
}

.bgColor {
  background-color: #0f3460;
}
</style>
