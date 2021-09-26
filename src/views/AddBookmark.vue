<script>
import FormInputTitle from "@/components/form/FormInputTitle.vue";
import FormInputUrl from "@/components/form/FormInputUrl.vue";
import FormTextareaDescription from "@/components/form/FormTextareaDescription.vue";
import FormActionButtons from "@/components/form/FormActionButtons.vue";

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
    <div class="col-6 form-bg-color offset-3 border p-3">
      <FormInputTitle />
      <FormInputUrl />
      <FormTextareaDescription />
      <FormActionButtons />
    </div>
  </div>
</template>

<style scoped>
.form-bg-color {
  background-color: #16213e;
}
</style>
