<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setBookmarkDescription: "setBookmarkDescription",
    }),
  },
  computed: {
    description: {
      get() {
        return this.bookmarkDescription;
      },
      set(description) {
        this.setBookmarkDescription(description);
      },
    },
    ...mapGetters({
      bookmarkDescription: "_bookmarkDescription",
    }),
  },
};
</script>

<template>
  <div class="my-3">
    <label class="form-label mb-1">Description</label>
    <textarea
      v-model="description"
      class="form-control"
      rows="3"
      placeholder="Description"
    ></textarea>
  </div>
</template>
