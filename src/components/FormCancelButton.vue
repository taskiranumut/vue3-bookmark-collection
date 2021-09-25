<script>
export default {
  methods: {
    handleCancelBookmark() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<template>
  <button @click="handleCancelBookmark" class="btn cancel-btn border">
    Cancel
  </button>
</template>

<style scoped>
.cancel-btn {
  background-color: #0f3461b3;
  width: 76px;
}

.cancel-btn:hover,
.cancel-btn:focus {
  background-color: #0f3461;
  font-weight: bold;
}

.cancel-btn,
.cancel-btn:hover,
.cancel-btn:focus {
  color: #e6e6e6;
}
</style>
