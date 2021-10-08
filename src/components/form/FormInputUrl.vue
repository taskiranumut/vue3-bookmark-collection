<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setBookmarkUrl: "setBookmarkUrl",
    }),
  },
  computed: {
    url: {
      get() {
        return this.bookmarkUrl;
      },
      set(url) {
        this.setBookmarkUrl(url);
      },
    },
    ...mapGetters({
      bookmarkUrl: "_bookmarkUrl",
      checkUrl: "_checkUrl",
    }),
  },
};
</script>

<template>
  <div class="my-3">
    <label class="form-label mb-1">URL</label>
    <transition name="fade">
      <div v-if="checkUrl.isActiveWarn" class="warn-msg">
        <small>* URL is invalid!</small>
      </div>
    </transition>
    <input
      v-model="url"
      type="text"
      class="form-control"
      placeholder="URL"
      :class="{ 'invalid-border': checkUrl.isActiveWarn }"
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
