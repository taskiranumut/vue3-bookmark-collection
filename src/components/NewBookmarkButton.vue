<template>
  <div class="d-flex justify-content-end mb-3">
    <button @click="newBookmark" class="btn border">+ New</button>
  </div>
</template>

<script>
export default {
  methods: {
    newBookmark() {
      console.log("newBookmark works");
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #e9445fb3;
  color: #e6e6e6;
}

.btn:hover {
  background-color: #e9445f;
  color: #e6e6e6;
  font-weight: bold;
}
</style>
