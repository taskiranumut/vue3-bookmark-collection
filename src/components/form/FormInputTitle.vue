<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: null,
    };
  },
  methods: {
    ...mapMutations({
      setBookmarkTitle: "setBookmarkTitle",
    }),
  },
  computed: {
    ...mapGetters({
      bookmarkTitle: "_bookmarkTitle",
    }),
  },
  watch: {
    title() {
      this.setBookmarkTitle(this.title);
    },
    bookmarkTitle() {
      this.title = this.bookmarkTitle;
    },
  },
};
</script>

<template>
  <div class="my-3">
    <label class="form-label mb-1">Title</label>
    <input
      v-model="title"
      type="text"
      class="form-control"
      placeholder="Title"
      required
    />
  </div>
</template>
