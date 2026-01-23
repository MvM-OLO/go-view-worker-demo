<template>
  <Configurator>
    <Designer
      :data="designerData"
      @save="handleSave"
      @back="handleBack"
      @preview="handlePreview"
    />
  </Configurator>
</template>

<script setup lang="ts">
import { Designer, Configurator } from "go-view-worker";
import { onMounted, ref } from "vue";
import { useGoViewInit } from "@/hooks/useGoViewInit";
import { useRouter } from "vue-router";

useGoViewInit();
const router = useRouter();

const designerData = ref<any>(null);

function handleSave(data: any) {
  localStorage.setItem("go-view-demo-data", JSON.stringify(data));
}

function handleBack() {
  //返回上一级菜单
}

function handlePreview() {
  const saved = localStorage.getItem("go-view-demo-data");
  if (!saved) {
    console.warn("Please save first");
  }
  router.push("/preview");
}

onMounted(() => {
  const saved = localStorage.getItem("go-view-demo-data");
  if (saved) {
    designerData.value = JSON.parse(saved);
  }
});
</script>
<style>
/* Configurator needs to fill screen */
html,
body,
#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
