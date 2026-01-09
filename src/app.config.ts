/*
 * @Author       : 程哲林
 * @Date         : 2026-01-09 16:38:37
 * @LastEditors  : 程哲林
 * @LastEditTime : 2026-01-09 16:48:11
 * @FilePath     : /myApp/src/app.config.ts
 * @Description  : 未添加文件描述
 */
export default defineAppConfig({
  pages: ["pages/index/index", "pages/home/index"],
  //   window: {
  //   // navigationStyle: "custom",
  //   backgroundTextStyle: "light",
  //   navigationBarBackgroundColor: "#fff",
  //   navigationBarTitleText: "WeChat",
  //   navigationBarTextStyle: "black",
  //   backgroundColor: "#FAFAFA",
  //   pageOrientation: "portrait",
  //   homeButton: true
  // },
  window: {
    pageOrientation: "portrait",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
