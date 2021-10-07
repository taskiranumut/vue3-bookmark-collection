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
    class="d-flex justify-content-between border rounded-3 bg-hover px-4 mt-4"
    :class="{ bgColor: bookmarkDetailsIsActive }"
    @click="showDetails"
  >
    <BookmarkLink :bookmark="bookmark" />
    <BookmarkActionButtons :bookmarkId="bookmark.id" />
  </div>
  <transition name="fade">
    <BookmarkDetails v-if="bookmarkDetailsIsActive" :bookmark="bookmark" />
  </transition>
</template>

<style scoped>
.bg-hover:hover {
  cursor: pointer;
}

.bgColor,
.bg-hover:hover {
  background-color: #0f3460;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.15s ease;
}
</style>
