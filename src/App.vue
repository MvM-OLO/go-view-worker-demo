<template>
  <div class="my-app">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { useResizeByClientWidth } from "go-view-worker/resize";

useResizeByClientWidth();
</script>

<style scoped>
.my-app {
  width: 100%;
  height: 100%;
}
</style>
