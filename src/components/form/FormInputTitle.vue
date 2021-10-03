<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setBookmarkTitle: "setBookmarkTitle",
    }),
  },
  computed: {
    title: {
      get() {
        return this.bookmarkTitle;
      },
      set(title) {
        this.setBookmarkTitle(title);
      },
    },
    ...mapGetters({
      bookmarkTitle: "_bookmarkTitle",
    }),
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
