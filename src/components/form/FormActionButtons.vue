<script>
import FormSaveButton from "@/components/form/FormSaveButton.vue";
import FormCancelButton from "@/components/form/FormCancelButton.vue";

export default {
  components: {
    FormSaveButton,
    FormCancelButton,
  },
};
</script>

<template>
  <div class="d-flex justify-content-end align-items-center p-2 px-2">
    <FormSaveButton />
    <FormCancelButton />
  </div>
</template>
