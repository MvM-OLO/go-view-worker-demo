<template>
  <CollapseItem name="示例组件配置" :expanded="true">
    <SettingItemBox name="内容设置">
      <SettingItem name="文本内容">
        <n-input v-model:value="optionData.content" type="text" size="small" />
      </SettingItem>
    </SettingItemBox>

    <SettingItemBox name="样式设置">
      <SettingItem name="背景颜色">
        <n-color-picker
          v-model:value="optionData.bgColor"
          :modes="['hex']"
          show-alpha
          size="small"
        />
      </SettingItem>
      <SettingItem name="文字颜色">
        <n-color-picker
          v-model:value="optionData.textColor"
          :modes="['hex']"
          show-alpha
          size="small"
        />
      </SettingItem>
      <SettingItem name="字体大小">
        <n-input-number
          v-model:value="optionData.fontSize"
          :min="12"
          size="small"
        />
      </SettingItem>
    </SettingItemBox>
  </CollapseItem>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { CollapseItem, SettingItemBox, SettingItem } from 'go-view-worker';

defineProps({
  optionData: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>
