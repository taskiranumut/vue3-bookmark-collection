<script>
export default {
  methods: {
    deleteBookmark(e) {
      e.stopPropagation();
    },
  },
};
</script>

<template>
  <button @click="deleteBookmark" class="btn border p-0 px-1" title="Delete">
    <span><i class="fas fa-trash-alt fa-lg"></i></span>
  </button>
</template>
