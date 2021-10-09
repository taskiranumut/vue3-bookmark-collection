<script>
import SaveSpinner from "@/components/shared/SaveSpinner";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    SaveSpinner,
  },
  created() {
    this.checkEditBookmarkView();
  },
  methods: {
    async handleSaveBookmark() {
      if (this.checkFormStatus()) {
        this.setIsSaveButton(true);
        const bookmark = { ...this.bookmarkItems };
        if (this.isEdit) await this.updateBookmarkToApi(bookmark);
        else await this.postBookmarkToApi(bookmark);
        this.getRouteHome();
        this.setIsSaveButton(false);
      }
    },
    checkFormStatus() {
      const statusList = [];
      for (const property in this.formCheck) {
        const isValid = this.formCheck[property].isValid;
        if (!isValid) {
          this.setIsActiveWarn({ formEl: property, status: true });
        }
        statusList.push(isValid);
      }
      return statusList.every((item) => item === true);
    },
    checkEditBookmarkView() {
      if (this.isEdit) {
        for (const property in this.formCheck)
          this.setIsValid({ formEl: property, status: true });
      }
    },
    getRouteHome() {
      this.$router.push({
        name: "Home",
      });
    },
    ...mapActions(["postBookmarkToApi", "updateBookmarkToApi"]),
    ...mapMutations(["setIsSaveButton", "setIsActiveWarn", "setIsValid"]),
  },
  computed: {
    ...mapState(["isEdit", "formCheck"]),
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
