<script>
import FormInputTitle from "@/components/FormInputTitle.vue";
import FormInputUrl from "@/components/FormInputUrl.vue";
import FormTextareaDescription from "@/components/FormTextareaDescription.vue";
import FormActionButtons from "@/components/FormActionButtons.vue";

export default {
  components: {
    FormInputTitle,
    FormInputUrl,
    FormTextareaDescription,
    FormActionButtons,
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <div class="col-6 offset-3 border p-3">
      <FormInputTitle />
      <FormInputUrl />
      <FormTextareaDescription />
      <FormActionButtons />
    </div>
  </div>
</template>

<style scoped>
.col-6 {
  background-color: #16213e;
}
</style>
