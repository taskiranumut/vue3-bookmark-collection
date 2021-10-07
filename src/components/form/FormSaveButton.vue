<script>
import SaveSpinner from "@/components/shared/SaveSpinner";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    SaveSpinner,
  },
  methods: {
    async handleSaveBookmark() {
      this.setIsSaveButton(true);
      const bookmark = { ...this.bookmarkItems };
      if (this.isEdit) await this.updateBookmarkToApi(bookmark);
      else await this.postBookmarkToApi(bookmark);
      this.getRouteHome();
      this.setIsSaveButton(false);
    },
    getRouteHome() {
      this.$router.push({
        name: "Home",
      });
    },
    ...mapActions({
      postBookmarkToApi: "postBookmarkToApi",
      updateBookmarkToApi: "updateBookmarkToApi",
    }),
    ...mapMutations(["setIsSaveButton"]),
  },
  computed: {
    ...mapState({
      isEdit: "isEdit",
    }),
    ...mapGetters({
      bookmarkItems: "_bookmarkItems",
      isSaveButton: "_isSaveButton",
    }),
  },
};
</script>

<template>
  <button
    @click="handleSaveBookmark"
    class="btn save-btn border rounded-3 me-2"
  >
    <span v-if="isSaveButton"><SaveSpinner /></span>
    <span v-else>Save</span>
  </button>
</template>

<style scoped>
.save-btn {
  background-color: #e9445fb3;
  width: 76px;
}

.save-btn:hover,
.save-btn:focus {
  background-color: #e9445f;
  font-weight: bold;
}

.save-btn,
.save-btn:hover,
.save-btn:focus {
  color: #e6e6e6;
}
</style>
