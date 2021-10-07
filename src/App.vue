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
    <div class="row">
      <div
        class="col-md-10 col-lg-8 col-xl-6 m-auto col-6-bg-color offset-3 border rounded-3 p-3"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
