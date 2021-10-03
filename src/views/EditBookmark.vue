<script>
import FormInputTitle from "@/components/form/FormInputTitle.vue";
import FormInputUrl from "@/components/form/FormInputUrl.vue";
import FormTextareaDescription from "@/components/form/FormTextareaDescription.vue";
import FormActionButtons from "@/components/form/FormActionButtons.vue";
import Spinner from "@/components/shared/Spinner.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {
    FormInputTitle,
    FormInputUrl,
    FormTextareaDescription,
    FormActionButtons,
    Spinner,
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
  computed: {
    ...mapState({
      spinnerCheck: "spinnerCheck",
    }),
  },
};
</script>

<template>
  <Spinner v-if="spinnerCheck.didGetBookmark" />
  <div v-else>
    <FormInputTitle />
    <FormInputUrl />
    <FormTextareaDescription />
    <FormActionButtons />
  </div>
</template>
