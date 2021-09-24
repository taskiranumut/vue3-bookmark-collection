<script>
import { mapMutations } from "vuex";
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations({
      setBookmarkTitle: "setBookmarkTitle",
    }),
  },
  watch: {
    title() {
      this.setBookmarkTitle(this.title);
    },
  },
};
</script>

<template>
  <div class="my-3">
    <label class="mb-1" for="input-title">Title</label>
    <input
      v-model="title"
      type="text"
      id="input-title"
      class="form-control"
      placeholder="Title"
      required
    />
  </div>
</template>

<style scoped>
label {
  color: #e94560;
}
</style>
