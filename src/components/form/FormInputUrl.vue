<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    checkValidity() {
      let status = false;
      if (this.url) {
        const urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        status = urlRegex.test(this.url);
        this.setIsValid({ formEl: "url", status });
      }
      this.setIsValid({ formEl: "url", status });
      this.setIsActiveWarn({ formEl: "url", status: !status });
    },
    ...mapMutations(["setBookmarkUrl", "setIsValid", "setIsActiveWarn"]),
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
      @blur="checkValidity"
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
