<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    checkValidity() {
      let status = false;
      if (this.title) {
        status = this.title.split("").some((char) => char !== " ");
        this.setIsValid({ formEl: "title", status });
      }
      this.setIsValid({ formEl: "title", status });
      this.setIsActiveWarn({ formEl: "title", status: !status });
    },
    ...mapMutations(["setBookmarkTitle", "setIsValid", "setIsActiveWarn"]),
  },
  computed: {
    title: {
      get() {
        return this.bookmarkTitle;
      },
      set(title) {
        const trimmedTitle = title.replace(/\s\s+/g, " ").trim();
        this.setBookmarkTitle(trimmedTitle);
      },
    },
    ...mapGetters({
      bookmarkTitle: "_bookmarkTitle",
      checkTitle: "_checkTitle",
    }),
  },
};
</script>

<template>
  <div class="my-3">
    <label class="form-label mb-1">Title</label>
    <transition name="fade">
      <div v-if="checkTitle.isActiveWarn" class="warn-msg">
        <small>* Title cannot be empty!</small>
      </div>
    </transition>
    <input
      @blur="checkValidity"
      v-model="title"
      type="text"
      class="form-control"
      placeholder="Title"
      :class="{ 'invalid-border': checkTitle.isActiveWarn }"
    />
  </div>
</template>

<style scoped>
.invalid-border {
  border: 1px solid #ffff00cd;
  transition: all 0.15s;
}

.warn-msg {
  color: #ffff00cd;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.15s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.15s ease;
}
</style>
