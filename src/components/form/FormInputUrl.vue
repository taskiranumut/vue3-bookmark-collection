<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setBookmarkUrl: "setBookmarkUrl",
    }),
  },
  computed: {
    url: {
      get() {
        return this.bookmarkUrl;
      },
      set(url) {
        this.setBookmarkUrl(url);
      },
    },
    ...mapGetters({
      bookmarkUrl: "_bookmarkUrl",
    }),
  },
};
</script>

<template>
  <div class="my-3">
    <label class="form-label mb-1">URL</label>
    <input
      v-model="url"
      type="text"
      class="form-control"
      placeholder="URL"
      required
    />
  </div>
</template>
