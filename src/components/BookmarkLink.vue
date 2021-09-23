<script>
export default {
  props: ["bookmark"],
};
</script>

<template>
  <div class="d-flex align-items-center">
    <a :href="bookmark.url" target="_blank" @click="$event.stopPropagation()">{{
      bookmark.title
    }}</a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #e6e6e6;
}

a:hover {
  color: #e94560;
}
</style>
