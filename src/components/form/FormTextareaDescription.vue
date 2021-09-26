<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      description: null,
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
    <label class="form-label mb-1">Description</label>
    <textarea
      v-model="description"
      class="form-control"
      rows="3"
      placeholder="Description"
    ></textarea>
  </div>
</template>
