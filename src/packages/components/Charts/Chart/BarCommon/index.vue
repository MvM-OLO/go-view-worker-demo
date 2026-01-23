<template>
  <div
    class="test-comp"
    :style="{
      backgroundColor: option.bgColor,
      color: option.textColor,
      fontSize: (option.fontSize || 20) / 14 + 'rem',
    }"
  >
    {{ option.content || "暂无内容" }}
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  chartConfig: {
    type: Object as PropType<any>,
    required: true,
  },
});

const option = computed(() => props.chartConfig.option);
</script>
<style scoped>
.test-comp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
