<script>
import DeleteSpinner from "@/components/shared/DeleteSpinner";
import { mapActions } from "vuex";

export default {
  props: ["bookmarkId"],
  components: {
    DeleteSpinner,
  },
  data() {
    return {
      isDeleteButton: false,
    };
  },
  methods: {
    async deleteBookmark(e) {
      this.isDeleteButton = true;
      e.stopPropagation();
      await this.deleteBookmarkFromApi(this.bookmarkId);
      this.isDeleteButton = false;
    },
    ...mapActions({
      deleteBookmarkFromApi: "deleteBookmarkFromApi",
    }),
  },
};
</script>

<template>
  <button
    @click="deleteBookmark"
    class="btn action-btn border rounded-3 p-0 px-1"
    title="Delete"
  >
    <span v-if="isDeleteButton"><DeleteSpinner /></span>
    <span v-else><i class="fas fa-trash-alt fa-lg"></i></span>
  </button>
</template>

<style scoped>
.action-btn {
  width: 40px;
  height: 40px;
  color: #e9445fb3;
}

.action-btn:hover {
  font-size: 125%;
  color: #e94560;
}
</style>
