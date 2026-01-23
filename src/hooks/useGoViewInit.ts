import { useGlobalConfigStore } from "go-view-worker";
import { markRaw } from "vue";
import { ChartList } from "@/packages/components/Charts/index";

export function useGoViewInit() {
  const globalConfigStore = useGlobalConfigStore();

  const configModules = import.meta.glob(
    "../packages/components/**/config.vue",
    { eager: true },
  ) as Record<string, { default: any }>;
  const indexModules = import.meta.glob("../packages/components/**/index.vue", {
    eager: true,
  }) as Record<string, { default: any }>;
  const configTsModules = import.meta.glob(
    "../packages/components/**/config.ts",
    { eager: true },
  ) as Record<string, { default: any }>;

  const imagesModules = import.meta.glob("../assets/img/**", {
    eager: true,
  }) as Record<string, { default: any }>;

  globalConfigStore.initConfig({
    menuOptions: [
      {
        key: "Charts",
        label: "图表",
        list: ChartList as any,
      },
    ],
    theme: {
      darkMode: false,
      primaryColor: "#722ed1",
    },
    configModules,
    indexModules,
    configTsModules,
    chartsList: markRaw(ChartList) as any,
    imagesModules,
    uploadFile: async (file: File) => {
      console.log("Upload file mock", file);
      return URL.createObjectURL(file);
    },
  });
}
