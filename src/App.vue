<script>
import AppHeader from "@/components/shared/AppHeader.vue";
import AppFooter from "@/components/shared/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <div class="content-wrapper">
    <div class="container">
      <div class="row">
        <div
          class="col-md-10 col-lg-8 col-xl-6 m-auto col-6-bg-color offset-3 border rounded-3 p-3"
        >
          <router-view />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
