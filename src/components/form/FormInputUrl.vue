<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      url: null,
    };
  },
  methods: {
    ...mapMutations({
      setBookmarkUrl: "setBookmarkUrl",
    }),
  },
  computed: {
    ...mapGetters({
      bookmarkUrl: "_bookmarkUrl",
    }),
  },
  watch: {
    url() {
      this.setBookmarkUrl(this.url);
    },
    bookmarkUrl() {
      this.url = this.bookmarkUrl;
    },
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
