<script>
import FormInputTitle from "@/components/form/FormInputTitle.vue";
import FormInputUrl from "@/components/form/FormInputUrl.vue";
import FormTextareaDescription from "@/components/form/FormTextareaDescription.vue";
import FormActionButtons from "@/components/form/FormActionButtons.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  components: {
    FormInputTitle,
    FormInputUrl,
    FormTextareaDescription,
    FormActionButtons,
  },
  created() {
    this.setIsEdit(true);
    const bookmarkId = this.$route.params.id;
    this.getBookmarkFromApiById(bookmarkId);
  },
  methods: {
    ...mapActions({
      getBookmarkFromApiById: "getBookmarkFromApiById",
    }),
    ...mapMutations({
      setIsEdit: "setIsEdit",
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
