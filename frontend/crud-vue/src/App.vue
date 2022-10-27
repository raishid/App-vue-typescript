<template>
  <NavBarComponent />
  <div class="container p-5">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    NavBarComponent,
  },
});
</script>
