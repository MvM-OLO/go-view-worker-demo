import { PublicConfigClass } from "@/packages/public/baseConfig";
import { DemoCommonConfig } from "./index";
import { cloneDeep } from "lodash-es";

export const option = {
  // 自定义配置
  bgColor: "green", // 默认蓝色
  content: "测试组件",
  textColor: "red",
  fontSize: 30,
};

export default class Config extends PublicConfigClass {
  public key = DemoCommonConfig.key;
  public chartConfig = cloneDeep(DemoCommonConfig);
  // 图表配置项
  public option = cloneDeep(option);

  // 定义组件默认长宽
  public override attr = {
    x: 50,
    y: 50,
    w: 500, // 默认宽度
    h: 300, // 默认高度
    offsetX: 0, // 不建议修改
    offsetY: 0, // 不建议修改
    zIndex: -1, // 不建议修改
  };
}
