<script>
import DeleteSpinner from "@/components/shared/DeleteSpinner";
import ConfirmDeleteModal from "@/components/bookmark/ConfirmDeleteModal";
import { mapActions } from "vuex";

export default {
  props: ["bookmarkId"],
  components: {
    DeleteSpinner,
    ConfirmDeleteModal,
  },
  data() {
    return {
      isDeleteButton: false,
      showModal: false,
    };
  },
  methods: {
    startDelete(e) {
      e.stopPropagation();
      this.showModal = true;
    },
    async deleteBookmark() {
      this.showModal = false;
      this.isDeleteButton = true;
      await this.deleteBookmarkFromApi(this.bookmarkId);
      this.isDeleteButton = false;
    },
    cancelDelete() {
      this.showModal = false;
    },
    ...mapActions(["deleteBookmarkFromApi"]),
  },
};
</script>

<template>
  <ConfirmDeleteModal
    v-if="showModal"
    @click="$event.stopPropagation()"
    @delete-bookmark="deleteBookmark"
    @cancel-delete="cancelDelete"
  />
  <button
    @click="startDelete"
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
