<script>
import FormInputTitle from "@/components/form/FormInputTitle.vue";
import FormInputUrl from "@/components/form/FormInputUrl.vue";
import FormTextareaDescription from "@/components/form/FormTextareaDescription.vue";
import FormActionButtons from "@/components/form/FormActionButtons.vue";
import { mapActions } from "vuex";

export default {
  components: {
    FormInputTitle,
    FormInputUrl,
    FormTextareaDescription,
    FormActionButtons,
  },
  created() {
    const bookmarkId = this.$route.params.id;
    this.getBookmarkFromApiById(bookmarkId);
  },
  methods: {
    ...mapActions({
      getBookmarkFromApiById: "getBookmarkFromApiById",
    }),
  },
};
</script>

<template>
  <FormInputTitle />
  <FormInputUrl />
  <FormTextareaDescription />
  <FormActionButtons />
</template>
