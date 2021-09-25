<script>
export default {
  props: ["bookmark"],
};
</script>

<template>
  <div class="details p-2">
    <p><span>Description: </span>{{ bookmark.bookmarkDescription }}</p>
    <p class="mb-0">
      <span>URL: </span><i>{{ bookmark.bookmarkUrl }}</i>
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 14px;
}

span {
  color: #e94560;
}

.details {
  margin: 0px 20px 10px 20px;
  background-color: #0f3460;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0 0 5px 5px;
}
</style>
