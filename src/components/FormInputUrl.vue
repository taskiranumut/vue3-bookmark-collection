<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    ...mapMutations({
      setBookmarkUrl: "setBookmarkUrl",
    }),
  },
  watch: {
    url() {
      this.setBookmarkUrl(this.url);
    },
  },
};
</script>

<template>
  <div class="my-3">
    <label class="mb-1" for="input-url">URL</label>
    <input
      v-model="url"
      type="text"
      id="input-url"
      class="form-control"
      placeholder="URL"
      required
    />
  </div>
</template>

<style scoped>
label {
  color: #e94560;
}
</style>
