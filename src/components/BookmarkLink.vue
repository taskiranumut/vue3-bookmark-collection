<template>
  <div class="d-flex align-items-center">
    <a :href="bookmarkUrl" target="_blank" @click="$event.stopPropagation()">{{
      bookmarkTitle
    }}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      bookmarkTitle: "_bookmarkTitle",
      bookmarkUrl: "_bookmarkUrl",
    }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #e6e6e6;
}

a:hover {
  color: #e94560;
}
</style>
