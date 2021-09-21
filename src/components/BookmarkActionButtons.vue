<template>
  <div class="d-flex justify-content-between m-1 p-1">
    <button @click="editBookmark" class="btn border p-0 px-1 me-2" title="Edit">
      <span><i class="fas fa-pen fa-lg"></i></span>
    </button>
    <button @click="deleteBookmark" class="btn border p-0 px-1" title="Delete">
      <span><i class="fas fa-trash-alt fa-lg"></i></span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    editBookmark(e) {
      e.stopPropagation();
      console.log("editBookmark works");
      this.$router.push({
        name: "EditBookmark",
        params: {
          id: "demoId123",
        },
      });
    },
    deleteBookmark(e) {
      e.stopPropagation();
      console.log("deleteBookmark works");
    },
  },
};
</script>

<style scoped>
.btn {
  width: 40px;
  height: 40px;
  color: #e9445fb3;
}

.btn:hover {
  font-size: 125%;
  color: #e94560;
}
</style>
