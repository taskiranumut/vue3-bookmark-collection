<template>
  <div class="d-flex justify-content-end align-items-center p-2 px-2">
    <button @click="saveBookmark" class="btn save-btn border me-2">Save</button>
    <button @click="cancelOperation" class="btn cancel-btn border">
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    saveBookmark() {
      console.log("saveBookmark works");
      this.$router.push({
        name: "Home",
      });
    },
    cancelOperation() {
      console.log("cancelOperation works");
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style scoped>
.save-btn {
  background-color: #e9445fb3;
  color: #e6e6e6;
  width: 76px;
}

.save-btn:hover {
  background-color: #e9445f;
  color: #e6e6e6;
  font-weight: bold;
}

.save-btn:focus {
  background-color: #e9445f;
  color: #e6e6e6;
  font-weight: bold;
}

.cancel-btn {
  background-color: #0f3461b3;
  color: #e6e6e6;
  width: 76px;
}

.cancel-btn:hover {
  background-color: #0f3461;
  color: #e6e6e6;
  font-weight: bold;
}

.cancel-btn:focus {
  background-color: #0f3461;
  color: #e6e6e6;
  font-weight: bold;
}
</style>
