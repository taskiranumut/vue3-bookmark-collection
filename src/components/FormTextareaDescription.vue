<script>
import { mapMutations } from "vuex";
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      description: "",
    };
  },
  methods: {
    ...mapMutations({
      setBookmarkDescription: "setBookmarkDescription",
    }),
  },
  watch: {
    description() {
      this.setBookmarkDescription(this.description);
    },
  },
};
</script>

<template>
  <div class="my-3">
    <label class="mb-1" for="textarea-description">Description</label>
    <textarea
      v-model="description"
      id="textarea-description"
      class="form-control"
      rows="3"
      placeholder="Description"
    ></textarea>
  </div>
</template>

<style scoped>
label {
  color: #e94560;
}
</style>
