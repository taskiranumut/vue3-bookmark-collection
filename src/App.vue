<script>
import AppHeader from "@/components/shared/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <div class="col-6 col-6-bg-color offset-3 border p-3">
      <router-view />
    </div>
  </div>
</template>
