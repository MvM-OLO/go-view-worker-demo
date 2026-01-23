<template>
  <div class="h-full w-full" style="height: 100vh; width: 100vw">
    <Renderer :data="renderData" />
  </div>
</template>
<script setup lang="ts">
import { Renderer } from "go-view-worker";
import { useGoViewInit } from "@/hooks/useGoViewInit";
import { ref, onMounted } from "vue";

useGoViewInit();

const renderData = ref<any>(null);

onMounted(() => {
  const saved = localStorage.getItem("go-view-demo-data");
  if (saved) {
    renderData.value = JSON.parse(saved);
  }
});
</script>
