## 项目简介
[点我下载.exe](https://github.com/YrracOwl/PandaNotes/releases/latest)

本项目是一个本地的markdown编辑器，实现了实时预览的功能，记笔记界面如下图所示。

![Figure [states]: PN-记笔记界面](Src/Pics/PN-记笔记界面.png)

由于此项目的markdown语法使用了markdeep实现，因此其支持markdeep的所有语法，预置了5种markdeep样式。

- 默认样式
- 日志样式
- 网站样式
- Latex样式
- 幻灯片样式

有关于[markdeep](https://casual-effects.com/markdeep/)的语法参考[Feature Demo](https://casual-effects.com/markdeep/features.md.html)。

## 界面介绍

![Figure [states]: PN-主界面](Src//Pics/PN-主界面.png)

如上图所示，鼠标放上即可显示提示，分别实现了(从关闭按钮开始顺时针介绍)


- [x] 关闭程序
- [ ] 设置
- [x] markdown编辑器
- [x] 双开应用到“外部文档”栏
- [x] 截图，可反色，保存时复制图片路径
- [x] 置顶主界面


## 鸣谢

本项目的诞生离不开[markdeep](https://casual-effects.com/markdeep/)与[aardio](https://aardio.com)，以及[webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

## Todo

- [ ] 多标签页文档的打开
- [ ] 保存时采用其他的通知方式，避免在通知时无法响应主页面
- [ ] 打包出hugo的bundle类型post，将图片和.md文件打包到独立的文件夹;集成git命令，一键发布。
- [ ] 主界面添加最小化按钮
- [ ] 增加托盘图标
- [ ] 截图界面保存时，自动复制的Figure代码需要将`Figure [states]`中的states修改为文件名
