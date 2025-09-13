[TaskFlow Lite / 轻量任务流]
 
A minimalist, offline-first to-do list tool with drag-and-drop sorting and deadline reminders—no registration, no cloud sync, just pure task management / 一款极简的本地优先待办清单工具，支持拖拽排序与截止日期提醒，无需注册、无需云同步，专注纯粹的任务管理。
 
一、Project Introduction / 项目介绍
 
- Core Goal / 核心目标：Solve the problem of "disorganized small tasks" for individuals—avoid missing trivial to-dos (e.g., "buy milk", "call a client") without complicated settings / 解决个人“零散任务管理混乱”问题，无需复杂设置即可避免遗漏小事（如“买牛奶”“联系客户”）。
- Application Scenarios / 适用场景：
- Daily personal task tracking (e.g., grocery lists, housework plans) / 个人日常任务跟踪（如购物清单、家务计划）
- Student assignment & exam schedule management / 学生作业与考试日程管理
- Freelancers’ short-term project task breakdown / 自由职业者短期项目任务拆解
- Highlights / 特色亮点：
- 100% offline: All data stored in browser localStorage (no data loss after page refresh) / 100%离线可用：数据存储在浏览器localStorage，刷新页面不丢失
- Drag-and-drop sorting: Adjust task priority with a simple drag / 拖拽排序：拖动即可调整任务优先级
- Deadline reminders: Auto-highlight tasks that are due or overdue / 截止日期提醒：自动高亮待到期/已逾期任务
- Lightweight: Only 20KB minified (fast loading, no lag) / 极致轻量化：压缩后仅20KB，加载快、无卡顿
 
二、Quick Start / 快速开始
 
1. Environment Requirements / 环境要求
 
- No installation required—works on any modern browser (Chrome, Firefox, Edge 88+, Safari 14+) / 无需安装，支持所有现代浏览器（Chrome、Firefox、Edge 88+、Safari 14+）
- No backend or database needed / 无需后端服务与数据库
 
2. Usage Steps / 使用步骤
 
1. Clone the repo to your local device / 克隆仓库到本地
bash
  
git clone https://github.com/your-username/taskflow-lite.git
 
2. Open the  index.html  file directly in your browser / 在浏览器中直接打开  index.html  文件
- No build tools, no command line operations—use it immediately after opening / 无需构建工具，无需命令行操作，打开即可使用
3. (Optional) Add the page to your browser bookmarks for quick access later / （可选）将页面添加到浏览器书签，方便后续快速打开
 
三、Basic Features / 基础功能
 
Feature / 功能 Operation Guide / 操作说明 
Add a task / 添加任务 Enter task content + set deadline (optional) in the input box, then click "Add" / 在输入框填写任务内容+设置截止日期（可选），点击“添加” 
Edit a task / 编辑任务 Double-click the task text to modify content, press Enter to save / 双击任务文本可修改内容，按Enter保存 
Mark as completed / 标记完成 Click the checkbox on the left of the task (completed tasks will be strikethrough) / 点击任务左侧复选框（已完成任务会显示删除线） 
Adjust priority / 调整优先级 Drag the task up/down to reorder (tasks at the top have higher priority) / 上下拖动任务调整顺序（越靠上优先级越高） 
Delete a task / 删除任务 Hover over the task, click the "×" button on the right / 鼠标悬停在任务上，点击右侧“×”按钮 
Filter tasks / 筛选任务 Click the tabs at the top: "All" (all tasks), "Active" (uncompleted), "Completed" (finished) / 点击顶部标签：“全部”（所有任务）、“进行中”（未完成）、“已完成”（已结束） 
 
四、Contribution Guide / 贡献指南
 
If you want to improve this project, feel free to follow these steps: / 若你想参与项目改进，可按照以下步骤操作：
 
1. Fork this repo to your GitHub account / Fork本仓库到你的GitHub账号
2. Create a new branch (e.g.,  feature/add-dark-mode ,  fix/reminder-bug ) / 创建新分支（如  feature/add-dark-mode  新增暗黑模式， fix/reminder-bug  修复提醒bug）
3. Make your changes (e.g., add new features, optimize UI, fix bugs) / 进行开发修改（如新增功能、优化界面、修复bug）
4. Commit your code and push it to your forked repo / 提交代码并推送到你的Fork仓库
5. Create a Pull Request (PR) to the main branch of this repo, and describe your changes briefly / 向本仓库的main分支提交Pull Request（PR），并简要描述修改内容
 
五、License / 许可证
 
This project is licensed under the MIT License—you can use, modify, and distribute it freely (see the  LICENSE  file for details) / 本项目基于MIT许可证开源，你可自由使用、修改与分发（详见  LICENSE  文件）
 
六、Contact / 联系作者
 
If you have suggestions or encounter issues, please submit an Issue in the repo or send an email to: 1406592991@qq.com / 若有建议或遇到问题，可在仓库提交Issue，或发送邮件至：1406592991@qq.com
