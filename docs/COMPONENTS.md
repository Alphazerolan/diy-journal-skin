# 组件静态预览 / Static component previews

[返回纯皮肤首页 / Standalone skin home](../README.md) · [纯皮肤实机窗口截图 / Standalone skin screenshots](../README.md#效果预览) · [返回 DIY 一体化插件皮肤首页 / DIY skin-and-editor bundle home](https://github.com/Alphazerolan/diy-journal-settings)

这里按使用场景展示经过专门设计并已实装的皮肤组件。每节分别说明组件的用途与视觉设计，同一功能的收起／展开状态放在一起。仅统一适配底色、边框等默认样式的菜单、卡片与弹窗不在本页展示。

This gallery groups specially designed, implemented skin components by usage. Each section explains both purpose and visual design, keeping collapsed and expanded states together. Generic menus, cards and dialogs that only received shared surface styling are omitted.

除标注为实机局部截图的菜单外，组件图片使用当前发布皮肤样式与虚构示例数据生成，不会执行任务。首页保留实机窗口截图。静态样例提供浅色与深色；用户提供的四张菜单截图按原图展示；部分专用窗口在深色主题下仍保留浅色纸张，这是当前皮肤的实际样式。图片不包含个人信息或桌面宠物。排版与可用信息可能随 DSH 版本、窗口大小和内容变化。

Except for menus marked as actual captures, component images use the released skin styles and fictional sample data; they do not execute tasks. Actual window captures remain in the README. Static examples include light and dark variants. The four user-supplied menu captures are shown as provided. Some dedicated windows retain light paper in the dark theme, matching the current skin. No personal information or desktop-pet artwork is included. Layout and available information may vary with DSH version, window size and content.

[专门设计的模块总览 / Design inventory](#design-inventory)

## 预览导航 / Preview navigation

点击下方模块名称即可跳到图片。 / Click a module name below to jump to its images.

<a id="design-inventory"></a>

## 专门设计的模块 / Purpose-designed modules

以下按使用场景列出已实装的专门设计，不按素材制作批次合并功能。不同功能即使共用纸张素材，也分别说明；同一功能的展开、收起和状态变化放在一起。

The inventory below groups implemented designs by usage, not by artwork production batch. Different functions remain separate even when they share paper artwork; expanded, collapsed and status variants stay with their own function.

### 主界面与侧栏 / Home and sidebar

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [新会话按钮 / New conversation](#new-conversation) | 开始一段新对话。 / Starts a new conversation. | 纸质按钮配斜放蓝色铅笔。 / A paper button with a diagonal blue pencil. |
| [工作区目录与会话列表 / Workspace directory and session list](#workspace-directory) | 展开或收起工作区内的会话，定位当前会话。 / Expands or collapses workspace sessions and locates the current conversation. | 书本开合图标、目录纸页、叠纸收起状态、书签与选中便签。 / Open/closed book icons, directory sheets, stacked collapsed pages, bookmarks and selected paper notes. |
| [会话小飞机 / Session planes](#planes) | 表示当前、运行中与后台活动状态。 / Marks current, running and background activity. | 金色／蓝色飞机及运行时飞行动画。 / Gold/blue planes with a flying animation while running. |
| [会话与工作区悬浮信息 / Session and workspace hover information](#workspace-hover) | 查看工作区目录和最近活动。 / Inspects the workspace directory and recent activity. 悬停查看一条会话的摘要信息。 / Inspects a session summary on hover. | 叠层文件夹、凸出索引标签与纸页。 / A layered folder with protruding index tabs and sheets. 奶油色档案纸签、顶部小标签和侧边纸耳；与工作区文件夹分属不同信息入口。 / A cream archive card with a top tab and side ear, distinct from the workspace folder entry. |
| [侧栏视图选项 / Sidebar view options](#view-options) | 调整会话列表的显示选项。 / Adjusts how the session list is displayed. | 带“视图选项”标题的档案袋，选中项保留勾选反馈。 / An archive sleeve labeled View, retaining selected-item checkmarks. |
| [个人账户 / Account](#account) | 显示账户并打开账户相关菜单。 / Displays the account and opens its menu. | 邮票头像、账户纸卡、纸袋底托和设置卡签；展开菜单沿用账户纸卡风格。 / Stamp avatar, account card, paper pocket and Settings tab, with a matching account menu. |
| [今日用量与余额 / Daily usage and balance](#daily-usage) | 显示今日消耗、调用情况及可用余额信息。 / Displays daily usage, calls and available balance information. | 卷角记账纸、分隔线及与侧栏拼贴衔接的纸卡。数据仍来自 DSH。 / A curled ledger slip and dividers integrated with the sidebar collage; figures still come from DSH. |

### 对话阅读与交互 / Conversation reading and interaction

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [用户消息与助手回复 / User and assistant messages](#messages) | 阅读双方的对话内容。 / Reads messages from both sides. | 用户蓝色方格便签与汽水装饰；助手横线信纸、手写署名与回形针。 / Blue grid notes with a soda decoration for users; lined paper, handwritten signature and paper clip for assistant replies. |
| [回复代码块 / Reply code blocks](#code-fold) | 阅读代码，并使用原生复制、换行等操作。 / Reads code and uses native copy/wrapping controls. | 淡黄色折页、独立语言纸签、手绘代码符号和书本图案。 / Pale yellow folded inserts, language tabs, drawn code symbols and book artwork. |
| [当前会话标题 / Current session heading](#session-heading) | 标识正在查看的会话。 / Identifies the conversation being viewed. | 顶边贴合的浅蓝折角索引纸签。 / A pale blue folded index label aligned with the top edge. |
| [触发通知 / Turn-trigger notice](#notifications) | 说明定时计划等非人工事件为何触发当前对话轮次。 / Explains why a non-human event, such as a schedule, started the turn. | 收起的信封与展开的信纸属于同一个通知的两种状态。 / Closed envelope and unfolded letter are two states of the same notice. |
| [交互问答本 / Interactive question pad](#question-pad) | 在助手需要信息时选择答案或填写回复。 / Chooses an answer or provides information requested by the assistant. | 竖向装订环、鲸鱼贴纸、纸页选项及蓝色回答纸。这是可作答的问题面板，不是统一适配的问题摘要卡。 / Vertical binding loops, whale sticker, paper choices and blue answer sheet. This is the answerable question panel, distinct from the generically styled question-summary card. |

### 输入与发送 / Composing and sending

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [消息输入区与会话选项 / Composer and conversation options](#composer) | 输入下一条消息。 / Writes the next message. 选择新会话使用的工作环境与模式。 / Chooses the workspace and mode for a conversation. | 可撕方格纸、顶部撕痕和蓝色装订条、西瓜贴纸与折角。 / Tear-off grid paper, torn top edge, blue binding strip, watermelon sticker and folded corner. 折角纸签、叠层标签与夹板式触发按钮。 / Folded paper labels, layered tabs and clipboard-like triggers. |
| [发送、运行与排队消息 / Send, run and queued messages](#send-controls) | 发送消息、插话或停止当前运行。 / Sends a message, steers a run or stops it. 查看尚未发送的排队内容，并进行插话、编辑或删除。 / Reviews queued content and provides steering, edit and delete actions. | 针对不同动作绘制的文具式按钮和独立贴纸。 / Stationery buttons and distinct artwork for each action. 与输入本连接的蓝色便签，配有不同动作贴纸和编辑铅笔。 / A blue note joined to the composer, with action stickers and an editing pencil. |
| [模型选择 / Model selection](#model-selector) | 选择使用的模型及相关选项。 / Selects the model and its available options. | 有齿孔边缘的邮票式选择器。 / A postage-stamp selector with a perforated edge. |
| [权限模式与完全权限确认 / Permission modes and full-access confirmation](#permission-picker) | 选择当前会话的权限模式。 / Chooses the session permission mode. 在启用完全权限前阅读说明并确认。 / Reads and confirms the explanation before enabling full access. | 笔刷底选项与纸质标签，保留原生权限文字和选择逻辑。 / Brush-backed options and paper labels, retaining native permission labels and behavior. 双线夹板、跨边金属夹、警示笔刷和纸质正文；不同于通用审批摘要卡。 / A double-bordered clipboard, overhanging clip, warning brush and paper body, distinct from generic approval-summary cards. |
| [添加与指令 / Add and command picker](#add-command) | 查找并选择输入区的添加项或指令候选。 / Finds and selects add-items or command candidates in the composer. | 带“添加与指令”标签的索引纸卡、分组标题与选中笔刷。 / An index card with an Add and Commands tab, section headings and a brush selection highlight. |

### 任务、计划与插件 / Tasks, schedules and plugins

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [子智能体任务列表 / Subagent register](#subagents) | 查看成员、委派任务和执行状态。 / Views members, delegated tasks and execution status. | 编号登记表、状态列及嵌套分册结构。 / A numbered register, status column and nested sub-registers. |
| [对话待办 / Conversation to-dos](#todos) | 查看当前对话的待办步骤及完成情况。 / Tracks steps and completion within the conversation. | 顶部装订本、待处理笔刷、圆圈及完成勾选。 / A top-bound pad, pending brush highlight, circles and completion checks. |
| [任务看板 / Task board](#taskboard) | 按状态组织、查找和新建任务。 / Organizes tasks by status, with search and creation. | 点纹底、手写标题、彩色栏签和纸质任务卡。 / Dotted paper, handwritten heading, colored column tabs and paper task cards. |
| [自动化计划本 / Automation planner](#automation) | 查看自动化任务、执行计划和详情；对话中的计划卡提供相关任务入口。 / Views automations, schedules and details; the conversation schedule card opens the related task. | 横线计划本、铅笔时钟、撕边任务便签、空状态纸条；对话计划卡使用同主题时钟邮票。列表、详情与计划卡属于同一功能系列。 / A ruled planner, pencil clock, torn task slips and empty-state note; conversation schedule cards use a matching clock stamp. List, details and schedule card belong to the same family. |
| [插件管理页 / Plugin management](#plugin-page) | 浏览官方及已安装插件。 / Browses official and installed plugins. | 手写页标题、黄色／蓝色分组笔刷、纸质插件卡。这里指专门设计的插件管理页，不含后来统一适配的插件发现卡。 / A handwritten page heading, yellow/blue group brush labels and paper plugin cards. This refers to the designed management page, not the later generic discovery cards. |

### 文件、工作工具与会话信息 / Files, work tools and session information

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [交付文件与变更摘要 / Deliverables and changed-file summaries](#files) | 识别和打开助手生成的成果文件。 / Identifies and opens files delivered by the assistant. 查看修改了哪些文件及增删信息。 / Reviews changed files and additions/deletions. | 按文档、图片和代码等类型绘制的模切贴纸、对应色彩与手写展开控件。 / Die-cut stickers and colors for documents, images, code and other types, with a handwritten expand control. 复用文件类型贴纸，结合可折叠的变更列表；用途与交付文件分别说明。 / File-type stickers within a collapsible change list, serving a different purpose from deliverables. |
| [右侧工作区入口 / Right workspace launcher](#workspace) | 打开项目文件、终端或浏览器。 / Opens project files, terminal or browser. | 蓝色夹板、金属夹与彩色入口卡片；不将通用工具面板外壳另列为设计展示。 / A blue clipboard, metal clip and colored entry cards; the generic tool-panel shell is not listed as a separate design. |
| [会话更多与打开方式菜单 / Session and open-in-app menus](#session-menu) | 下载 Session 日志或发送反馈。 / Downloads the Session log or opens feedback. 选择用哪个应用打开相关内容。 / Chooses an application to open content. | 顶部卷起的纸轴和横线菜单纸。 / A rolled top edge and ruled menu paper. 同样使用纸轴外观，但与会话更多菜单分属不同功能。 / Uses rolled paper artwork, but remains a separate function from conversation actions. |
| [会话统计与上下文 / Session statistics and context](#stats) | 分别查看模型／工具用时、Token 输入输出和当前上下文容量组成。 / Inspects model/tool timing, input/output tokens and current context composition. | 用时记录纸、Token 账单、上下文索引卡与统计入口笔刷；三者数值含义分别保留。 / Timing sheet, token ledger, context index card and brush-backed triggers, keeping their distinct meanings. |

### 专用窗口与设置 / Dedicated windows and settings

| 模块 / Module | 功能 / Purpose | 专门设计 / Design |
| --- | --- | --- |
| [远程访问电话本 / Remote-access address book](#remote-book) | 查看远程访问条件和连接信息，通过其他设备访问同一 Web 界面。 / Shows remote-access requirements and connection information for accessing the same web interface from another device. | 电话本入口图标、蓝色软封皮回卷、独立纸页、右侧字母索引和手绘电话标题。 / An address-book button, curled blue soft cover, separate page block, alphabet tabs and drawn telephone heading. |
| [归档会话预览 / Archived-session preview](#session-preview) | 查看已归档会话的元信息和前几条对话摘要。 / Inspects archived-session metadata and the first conversation entries. | 手写标题、图标化信息区、笔刷小标题、区分用户／助手的摘要纸卡与边框图钉。 / A handwritten heading, metadata icons, brush section label, user/assistant summary cards and border pins. |
| [更新入口与下载提示 / Update entry and download tip](#update-tip) | 在有新版本时提供更新入口，并显示下载进度和目标版本。 / Offers an update entry when available and shows download progress and target version. | 与账户、电话本按钮协调排列，下载提示改为纸质小便签。 / Layout coordinated with account and address-book controls, with a paper-note download tip. |
| [设置页与预设配图 / Settings and preset illustrations](#settings-gallery) | 查看账号与余额、使用统计，以及预设配图。 / Shows account/balance, usage statistics and preset illustrations. | 两个设置页展示装订、左栏贴纸和纸卡；下方直接列出 14 张原始配图。 / Two settings pages show binding, the sidebar sticker and paper cards; 14 original illustrations follow below. |

**范围说明：** 后续统一默认样式适配的菜单、时间浮层、后台任务菜单、审批／问题摘要卡、工具参数卡、技能／模型能力面板、通用弹窗及工具面板外壳不纳入这份专门设计展示。样式菜单的选图、拖动、旋转、缩放等编辑能力属于[独立插件](https://github.com/Alphazerolan/diy-journal-settings)。

**Scope:** The later shared default-style pass—generic menus, time pickers, background-task menus, approval/question-summary cards, tool-parameter cards, skills/model-capability panels, generic dialogs and tool-panel shells—is excluded. Image selection, dragging, rotation, scaling and other editing capabilities belong to the [separate plugin](https://github.com/Alphazerolan/diy-journal-settings).

## 局部预览图 / Detail previews

点击上方模块名称可查看对应预览。菜单中的四张实机局部图由用户提供，其他组件为静态样例。

Click a module name above to view its preview. Four actual menu captures were supplied by the user; other component images are static examples.



<a id="messages"></a>

## 对话气泡 / Conversation bubbles

**功能：** 承载用户消息与助手回复，包括回复中的代码内容。

**Function:** Displays user messages and assistant replies, including code within replies.

**设计：** 用户方格便签、助手横线信纸、署名与回形针。

**Design:** Grid-paper user notes, lined assistant letters, signature and paper clip.

### 浅色 / Light

![对话气泡 / Conversation bubbles · 浅色 / Light · Light](components/messages-light.png)

<details>
<summary>深色 / Dark</summary>

![对话气泡 / Conversation bubbles · 浅色 / Light · Dark](components/messages-dark.png)

</details>

<a id="code-fold"></a>

### 回复代码块 / Reply code blocks

折页、语言标签及复制／换行控件。 / Folded paper, language label and copy/wrap controls.

**代码折页 / Code insert · 浅色 / Light**

![代码折页 / Code insert · Light](components/code-fold-light.png)

<details>
<summary>代码折页 / Code insert · 深色 / Dark</summary>

![代码折页 / Code insert · Dark](components/code-fold-dark.png)

</details>

<a id="composer"></a>

## 消息输入区 / Message composer

**功能：** 编写消息，并选择工作区、模式和分支等会话选项。

**Function:** Compose messages and choose conversation options such as workspace, mode and branch.

**设计：** 可撕方格本输入框、西瓜装饰与纸签式选项。

**Design:** A tear-off grid notebook, watermelon decoration and paper-label controls.

### 浅色 / Light

![消息输入区 / Message composer · 浅色 / Light · Light](components/composer-light.png)

<details>
<summary>深色 / Dark</summary>

![消息输入区 / Message composer · 浅色 / Light · Dark](components/composer-dark.png)

</details>

<a id="composer-options"></a>

工作区、模式与分支选项已包含在上方输入区预览中，使用同一组折角纸签。 / Workspace, mode and branch options are included in the composer preview above, using its folded paper labels.

<a id="planes"></a>

## 会话状态：小飞机 / Session status: paper planes

**功能：** 区分当前会话、运行中的会话和后台任务状态。

**Function:** Distinguishes the current session, running sessions and background activity.

**设计：** 用不同颜色的小飞机标记状态；飞行动画在这里呈现为静止画面。

**Design:** Colored paper planes act as status markers; flight animations appear as still frames here.

### 浅色 / Light

![会话状态：小飞机 / Session status: paper planes · 浅色 / Light · Light](components/planes-light.png)

<details>
<summary>深色 / Dark</summary>

![会话状态：小飞机 / Session status: paper planes · 浅色 / Light · Dark](components/planes-dark.png)

</details>

<a id="notifications"></a>

## 触发通知：信封与展开信纸 / Trigger notifications: envelope and letter

**功能：** 解释是什么事件触发了当前这轮对话，例如定时计划。点击通知可展开或收起来源与说明；它不是折叠会话的入口。

**Function:** Explains the event that started a turn, such as a scheduled trigger. Expand or collapse the notice to see its source and details; it is not a collapsed conversation.

**设计：** 收起状态为封好的信封，展开状态为从同一信封中露出的信纸。两个状态属于同一个通知组件。

**Design:** The closed envelope unfolds into a letter in its pocket. Both states belong to the same notification component.

### 收起通知 / Collapsed notice

![触发通知：信封与展开信纸 / Trigger notifications: envelope and letter · 收起通知 / Collapsed notice · Light](components/trigger-closed-light.png)

<details>
<summary>深色 / Dark</summary>

![触发通知：信封与展开信纸 / Trigger notifications: envelope and letter · 收起通知 / Collapsed notice · Dark](components/trigger-closed-dark.png)

</details>

### 展开通知 / Expanded notice

![触发通知：信封与展开信纸 / Trigger notifications: envelope and letter · 展开通知 / Expanded notice · Light](components/trigger-open-light.png)

<details>
<summary>深色 / Dark</summary>

![触发通知：信封与展开信纸 / Trigger notifications: envelope and letter · 展开通知 / Expanded notice · Dark](components/trigger-open-dark.png)

</details>

<a id="workspace"></a>

## 右侧工作区入口 / Right workspace launcher

**功能：** 提供项目文件、终端与浏览器的入口，方便在会话旁打开工作工具。

**Function:** Provides entries for project files, terminal and browser alongside the conversation.

**设计：** 蓝色夹板、金属夹、手绘工作区标题与不同颜色的入口卡片。

**Design:** A blue clipboard, metal clip, hand-drawn workspace heading and colored entry cards.

### 浅色 / Light

![右侧工作区入口 / Right workspace launcher · 浅色 / Light · Light](components/workspace-light.png)

<details>
<summary>深色 / Dark</summary>

![右侧工作区入口 / Right workspace launcher · 浅色 / Light · Dark](components/workspace-dark.png)

</details>

<a id="workspace-hover"></a>

## 会话与工作区悬浮信息 / Session and workspace hover information

### 工作区文件夹 / Workspace folder

**功能：** 悬停查看工作区名称、目录与最近活动时间。

**Function:** Shows the workspace name, directory and recent activity when hovered.

**设计：** 将信息浮层绘成带标签和叠层纸页的文件夹。

**Design:** A tabbed folder with layered paper replaces the plain information popover.

### 浅色 / Light

![工作区悬浮信息 / Workspace hover information · 浅色 / Light · Light](components/workspace-hover-light.png)

<details>
<summary>深色 / Dark</summary>

![工作区悬浮信息 / Workspace hover information · 浅色 / Light · Dark](components/workspace-hover-dark.png)

</details>

<a id="session-hover"></a>

### 会话悬浮摘要 / Session hover summary

**功能 / Function：** 悬停查看一条会话的摘要信息。 / Inspects a session summary on hover.

**设计 / Design：** 奶油色档案纸签、顶部小标签和侧边纸耳；与工作区文件夹分属不同信息入口。 / A cream archive card with a top tab and side ear, distinct from the workspace folder entry.

**会话悬浮摘要 / Session hover summary · 浅色 / Light**

![会话悬浮摘要 / Session hover summary · Light](components/session-hover-light.png)

<details>
<summary>会话悬浮摘要 / Session hover summary · 深色 / Dark</summary>

![会话悬浮摘要 / Session hover summary · Dark](components/session-hover-dark.png)

</details>

<a id="account"></a>

## 个人账户卡签 / Account card and tab

**功能：** 显示当前账户，点击账户卡打开相关菜单；上方的“设置”标签标识这一入口区域。

**Function:** Displays the current account and opens its menu when clicked; the Settings tab marks this entry area.

**设计：** 邮票式头像、手写下划线、蓝色纸袋底托与黄色设置卡签。

**Design:** A postage-stamp avatar, handwritten underline, blue paper pocket and yellow Settings tab.

### 浅色 / Light

![个人账户卡签 / Account card and tab · 浅色 / Light · Light](components/account-light.png)

<details>
<summary>深色 / Dark</summary>

![个人账户卡签 / Account card and tab · 浅色 / Light · Dark](components/account-dark.png)

</details>


### 展开账户菜单 / Expanded account menu

**账户菜单 / Account menu · 浅色 / Light**

![账户菜单 / Account menu · Light](components/account-menu-light.png)

<details>
<summary>账户菜单 / Account menu · 深色 / Dark</summary>

![账户菜单 / Account menu · Dark](components/account-menu-dark.png)

</details>

<a id="subagents"></a>

## 子智能体任务列表 / Subagent task list

**功能：** 查看委派给子智能体的任务、成员及其运行或完成状态。

**Function:** Inspect delegated tasks, subagent members and their running or completed states.

**设计：** 带编号、成员／当前任务及状态列的蓝色登记表。

**Design:** A blue register with numbered rows, member/current-task and status columns.

### 浅色 / Light

![子智能体任务列表 / Subagent task list · 浅色 / Light · Light](components/subagents-light.png)

<details>
<summary>深色 / Dark</summary>

![子智能体任务列表 / Subagent task list · 浅色 / Light · Dark](components/subagents-dark.png)

</details>

<a id="todos"></a>

## 对话待办事项 / Conversation to-dos

**功能：** 展示当前对话中的待办步骤与完成进度，与子智能体成员列表分别展示。

**Function:** Shows the checklist and completion progress within a conversation, separately from subagent membership.

**设计：** 装订笔记本、待处理标记、圆圈与完成勾选。

**Design:** A bound notebook with pending markers, circles and completed checkmarks.

### 浅色 / Light

![对话待办事项 / Conversation to-dos · 浅色 / Light · Light](components/todos-light.png)

<details>
<summary>深色 / Dark</summary>

![对话待办事项 / Conversation to-dos · 浅色 / Light · Dark](components/todos-dark.png)

</details>

<a id="taskboard"></a>

## 任务看板 / Task board

**功能：** 按状态浏览和管理任务，并提供搜索与新建入口。图中展示待处理、进行中和已完成三列。

**Function:** Browse and manage tasks by status, with search and create actions. The example shows pending, running and completed columns.

**设计：** 点纹纸底、手写标题、彩色栏目标签和独立纸质任务卡片。

**Design:** Dotted paper, a handwritten heading, colored column tabs and individual paper task cards.

### 浅色 / Light

![任务看板 / Task board · 浅色 / Light · Light](components/taskboard-light.png)

<details>
<summary>深色 / Dark</summary>

![任务看板 / Task board · 浅色 / Light · Dark](components/taskboard-dark.png)

</details>

<a id="files"></a>

## 交付文件与变更摘要 / Deliverables and changed-file summaries

**功能：** 展示助手交付的文件，帮助按名称和类型识别要打开的成果。

**Function:** Presents files delivered by the assistant, making outputs recognizable by name and type.

**设计：** 为 Markdown、PDF、Word、Excel、演示文稿与图片绘制不同的文件贴纸。

**Design:** Distinct file stickers for Markdown, PDF, Word, Excel, presentations and images.

### 浅色 / Light

![交付文件 / Deliverable files · 浅色 / Light · Light](components/files-light.png)

<details>
<summary>深色 / Dark</summary>

![交付文件 / Deliverable files · 浅色 / Light · Dark](components/files-dark.png)

</details>

<a id="changed-files"></a>

### 变更文件摘要 / Changed-file summary

**功能 / Function：** 查看修改了哪些文件及增删信息。 / Reviews changed files and additions/deletions.

**设计 / Design：** 复用文件类型贴纸，结合可折叠的变更列表；用途与交付文件分别说明。 / File-type stickers within a collapsible change list, serving a different purpose from deliverables.

**变更文件摘要 / Changed-file summary · 浅色 / Light**

![变更文件摘要 / Changed-file summary · Light](components/changed-files-light.png)

<details>
<summary>变更文件摘要 / Changed-file summary · 深色 / Dark</summary>

![变更文件摘要 / Changed-file summary · Dark](components/changed-files-dark.png)

</details>

<a id="stats"></a>

## 会话统计与上下文 / Session statistics and context

**功能：** 上下文卡片显示当前容量占用及系统提示、工具定义、对话消息等组成；用时卡片记录模型和工具耗时；Token 卡片显示输入、输出与缓存信息。上下文占用不等同于累计 Token 用量。

**Function:** The context card shows current capacity usage and its system-prompt, tool-definition and message breakdown. Timing records cover model/tool durations; token statistics show input, output and cache information. Context occupancy is distinct from accumulated token usage.

**设计：** 从左到右为上下文索引卡、用时记录纸和 Token 用量纸卡。点击输入区的上下文占用指示可查看上下文卡片，具体数据取决于模型提供的信息。

**Design:** Left to right: a context index card, timing record and token ledger. Click the context indicator in the composer to open its card; available figures depend on the model provider.

### 浅色 / Light

![会话统计与上下文 / Session statistics and context · 浅色 / Light · Light](components/stats-light.png)

<details>
<summary>深色 / Dark</summary>

![会话统计与上下文 / Session statistics and context · 浅色 / Light · Dark](components/stats-dark.png)

</details>

<a id="new-conversation"></a>

## 新会话按钮 / New conversation

**功能 / Function：** 开始一段新对话。 / Starts a new conversation.

**设计 / Design：** 纸质按钮配斜放蓝色铅笔。 / A paper button with a diagonal blue pencil.

**新会话按钮 / New conversation · 浅色 / Light**

![新会话按钮 / New conversation · Light](components/new-conversation-light.png)

<details>
<summary>新会话按钮 / New conversation · 深色 / Dark</summary>

![新会话按钮 / New conversation · Dark](components/new-conversation-dark.png)

</details>

<a id="workspace-directory"></a>

## 工作区目录与会话列表 / Workspace directory and session list

**功能 / Function：** 展开或收起工作区内的会话，定位当前会话。 / Expands or collapses workspace sessions and locates the current conversation.

**设计 / Design：** 书本开合图标、目录纸页、叠纸收起状态、书签与选中便签。 / Open/closed book icons, directory sheets, stacked collapsed pages, bookmarks and selected paper notes.

**工作区目录与会话列表 / Workspace directory and session list · 浅色 / Light**

![工作区目录与会话列表 / Workspace directory and session list · Light](components/workspace-directory-light.png)

<details>
<summary>工作区目录与会话列表 / Workspace directory and session list · 深色 / Dark</summary>

![工作区目录与会话列表 / Workspace directory and session list · Dark](components/workspace-directory-dark.png)

</details>

<a id="view-options"></a>

## 侧栏视图选项 / Sidebar view options

**功能 / Function：** 调整会话列表的显示选项。 / Adjusts how the session list is displayed.

**设计 / Design：** 带“视图选项”标题的档案袋，选中项保留勾选反馈。 / An archive sleeve labeled View, retaining selected-item checkmarks.

**侧栏视图选项 / Sidebar view options · 实机局部截图 / Actual menu capture**

![侧栏视图选项 / Sidebar view options · Light](components/view-options-light.png)



<a id="daily-usage"></a>

## 今日用量与余额 / Daily usage and balance

**功能 / Function：** 显示今日消耗、调用情况及可用余额信息。 / Displays daily usage, calls and available balance information.

**设计 / Design：** 卷角记账纸、分隔线及与侧栏拼贴衔接的纸卡。数据仍来自 DSH。 / A curled ledger slip and dividers integrated with the sidebar collage; figures still come from DSH.

**今日用量与余额 / Daily usage and balance · 浅色 / Light**

![今日用量与余额 / Daily usage and balance · Light](components/daily-usage-light.png)

<details>
<summary>今日用量与余额 / Daily usage and balance · 深色 / Dark</summary>

![今日用量与余额 / Daily usage and balance · Dark](components/daily-usage-dark.png)

</details>

<a id="session-heading"></a>

## 当前会话标题 / Current session heading

**功能 / Function：** 标识正在查看的会话。 / Identifies the conversation being viewed.

**设计 / Design：** 顶边贴合的浅蓝折角索引纸签。 / A pale blue folded index label aligned with the top edge.

**当前会话标题 / Current session heading · 浅色 / Light**

![当前会话标题 / Current session heading · Light](components/session-heading-light.png)

<details>
<summary>当前会话标题 / Current session heading · 深色 / Dark</summary>

![当前会话标题 / Current session heading · Dark](components/session-heading-dark.png)

</details>

<a id="question-pad"></a>

## 交互问答本 / Interactive question pad

**功能 / Function：** 在助手需要信息时选择答案或填写回复。 / Chooses an answer or provides information requested by the assistant.

**设计 / Design：** 竖向装订环、鲸鱼贴纸、纸页选项及蓝色回答纸。这是可作答的问题面板，不是统一适配的问题摘要卡。 / Vertical binding loops, whale sticker, paper choices and blue answer sheet. This is the answerable question panel, distinct from the generically styled question-summary card.

**交互问答本 / Interactive question pad · 浅色 / Light**

![交互问答本 / Interactive question pad · Light](components/question-pad-light.png)

<details>
<summary>交互问答本 / Interactive question pad · 深色 / Dark</summary>

![交互问答本 / Interactive question pad · Dark](components/question-pad-dark.png)

</details>

<a id="send-controls"></a>

## 发送与运行操作 / Send and run controls

**功能 / Function：** 发送消息、插话或停止当前运行。 / Sends a message, steers a run or stops it.

**设计 / Design：** 针对不同动作绘制的文具式按钮和独立贴纸。 / Stationery buttons and distinct artwork for each action.

**发送与运行操作 / Send and run controls · 浅色 / Light**

![发送与运行操作 / Send and run controls · Light](components/send-controls-light.png)

<details>
<summary>发送与运行操作 / Send and run controls · 深色 / Dark</summary>

![发送与运行操作 / Send and run controls · Dark](components/send-controls-dark.png)

</details>

<a id="queued-message"></a>

### 排队消息 / Queued messages

**功能 / Function：** 查看尚未发送的排队内容，并进行插话、编辑或删除。 / Reviews queued content and provides steering, edit and delete actions.

**设计 / Design：** 与输入本连接的蓝色便签，配有不同动作贴纸和编辑铅笔。 / A blue note joined to the composer, with action stickers and an editing pencil.

**排队消息 / Queued messages · 浅色 / Light**

![排队消息 / Queued messages · Light](components/queued-message-light.png)

<details>
<summary>排队消息 / Queued messages · 深色 / Dark</summary>

![排队消息 / Queued messages · Dark](components/queued-message-dark.png)

</details>

<a id="model-selector"></a>

## 模型选择 / Model selection

**功能 / Function：** 选择使用的模型及相关选项。 / Selects the model and its available options.

**设计 / Design：** 展示展开后的邮票式选择卡片及模型候选，保留思考强度入口。 / Expanded postage-stamp selection cards and model choices, retaining the reasoning-effort entry.

**模型选择 / Model selection · 浅色 / Light**

![模型选择 / Model selection · Light](components/model-selector-light.png)

<details>
<summary>模型选择 / Model selection · 深色 / Dark</summary>

![模型选择 / Model selection · Dark](components/model-selector-dark.png)

</details>

<a id="permission-picker"></a>

## 权限模式与完全权限确认 / Permission modes and full-access confirmation

### 选择权限模式 / Choose a permission mode

**功能 / Function：** 选择当前会话的权限模式。 / Chooses the session permission mode.

**设计 / Design：** 笔刷底选项与纸质标签，保留原生权限文字和选择逻辑。 / Brush-backed options and paper labels, retaining native permission labels and behavior.

**权限模式选择 / Permission mode selection · 实机局部截图 / Actual menu capture**

![权限模式选择 / Permission mode selection · Light](components/permission-picker-light.png)

<a id="full-access"></a>

### 完全权限确认 / Full-access confirmation

**功能 / Function：** 在启用完全权限前阅读说明并确认。 / Reads and confirms the explanation before enabling full access.

**设计 / Design：** 双线夹板、跨边金属夹、警示笔刷和纸质正文；不同于通用审批摘要卡。 / A double-bordered clipboard, overhanging clip, warning brush and paper body, distinct from generic approval-summary cards.

**完全权限确认 / Full-access confirmation · 浅色 / Light**

![完全权限确认 / Full-access confirmation · Light](components/full-access-light.png)

<details>
<summary>完全权限确认 / Full-access confirmation · 深色 / Dark</summary>

![完全权限确认 / Full-access confirmation · Dark](components/full-access-dark.png)

</details>

<a id="add-command"></a>

## 添加与指令 / Add and command picker

**功能 / Function：** 查找并选择输入区的添加项或指令候选。 / Finds and selects add-items or command candidates in the composer.

**设计 / Design：** 带“添加与指令”标签的索引纸卡、分组标题与选中笔刷。 / An index card with an Add and Commands tab, section headings and a brush selection highlight.

**添加与指令 / Add and command picker · 浅色 / Light**

![添加与指令 / Add and command picker · Light](components/add-command-light.png)

<details>
<summary>添加与指令 / Add and command picker · 深色 / Dark</summary>

![添加与指令 / Add and command picker · Dark](components/add-command-dark.png)

</details>

<a id="automation"></a>

## 自动化计划本 / Automation planner

**功能 / Function：** 查看自动化任务、执行计划和详情；对话中的计划卡提供相关任务入口。 / Views automations, schedules and details; the conversation schedule card opens the related task.

**设计 / Design：** 横线计划本、铅笔时钟、撕边任务便签、空状态纸条；对话计划卡使用同主题时钟邮票。列表、详情与计划卡属于同一功能系列。 / A ruled planner, pencil clock, torn task slips and empty-state note; conversation schedule cards use a matching clock stamp. List, details and schedule card belong to the same family.

**任务列表 / Task list · 浅色 / Light**

![任务列表 / Task list · Light](components/automation-planner-light.png)

<details>
<summary>任务列表 / Task list · 深色 / Dark</summary>

![任务列表 / Task list · Dark](components/automation-planner-dark.png)

</details>

**任务详情 / Task details · 浅色 / Light**

![任务详情 / Task details · Light](components/automation-detail-light.png)

<details>
<summary>任务详情 / Task details · 深色 / Dark</summary>

![任务详情 / Task details · Dark](components/automation-detail-dark.png)

</details>

**对话内计划卡 / Conversation schedule card · 浅色 / Light**

![对话内计划卡 / Conversation schedule card · Light](components/automation-card-light.png)

<details>
<summary>对话内计划卡 / Conversation schedule card · 深色 / Dark</summary>

![对话内计划卡 / Conversation schedule card · Dark](components/automation-card-dark.png)

</details>

<a id="plugin-page"></a>

## 插件管理页 / Plugin management

**功能 / Function：** 浏览官方及已安装插件。 / Browses official and installed plugins.

**设计 / Design：** 手写页标题、黄色／蓝色分组笔刷、纸质插件卡。这里指专门设计的插件管理页，不含后来统一适配的插件发现卡。 / A handwritten page heading, yellow/blue group brush labels and paper plugin cards. This refers to the designed management page, not the later generic discovery cards.

**插件管理页 / Plugin management · 浅色 / Light**

![插件管理页 / Plugin management · Light](components/plugin-page-light.png)

<details>
<summary>插件管理页 / Plugin management · 深色 / Dark</summary>

![插件管理页 / Plugin management · Dark](components/plugin-page-dark.png)

</details>

<a id="session-menu"></a>

## 会话更多与打开方式菜单 / Session and open-in-app menus

### 会话更多菜单 / Session more menu

**功能 / Function：** 下载 Session 日志或发送反馈。 / Downloads the Session log or opens feedback.

**设计 / Design：** 顶部卷起的纸轴和横线菜单纸。 / A rolled top edge and ruled menu paper.

**会话更多菜单 / Session more menu · 实机局部截图 / Actual menu capture**

![会话更多菜单 / Session more menu · Light](components/session-menu-light.png)

<a id="open-in-app"></a>

### 打开方式菜单 / Open-in-app menu

**功能 / Function：** 选择用哪个应用打开相关内容。 / Chooses an application to open content.

**设计 / Design：** 同样使用纸轴外观，但与会话更多菜单分属不同功能。 / Uses rolled paper artwork, but remains a separate function from conversation actions.

**打开方式菜单 / Open-in-app menu · 实机局部截图 / Actual menu capture**

![打开方式菜单 / Open-in-app menu · Light](components/open-in-app-light.png)



<a id="remote-book"></a>

## 远程访问电话本 / Remote-access address book

**功能 / Function：** 查看远程访问条件和连接信息，通过其他设备访问同一 Web 界面。 / Shows remote-access requirements and connection information for accessing the same web interface from another device.

**设计 / Design：** 电话本入口图标、蓝色软封皮回卷、独立纸页、右侧字母索引和手绘电话标题。 / An address-book button, curled blue soft cover, separate page block, alphabet tabs and drawn telephone heading.

**远程访问电话本 / Remote-access address book · 浅色 / Light**

![远程访问电话本 / Remote-access address book · Light](components/remote-book-light.png)

<details>
<summary>远程访问电话本 / Remote-access address book · 深色 / Dark</summary>

![远程访问电话本 / Remote-access address book · Dark](components/remote-book-dark.png)

</details>

<a id="session-preview"></a>

## 归档会话预览 / Archived-session preview

**功能 / Function：** 查看已归档会话的元信息和前几条对话摘要。 / Inspects archived-session metadata and the first conversation entries.

**设计 / Design：** 手写标题、图标化信息区、笔刷小标题、区分用户／助手的摘要纸卡与边框图钉。 / A handwritten heading, metadata icons, brush section label, user/assistant summary cards and border pins.

**归档会话预览 / Archived-session preview · 浅色 / Light**

![归档会话预览 / Archived-session preview · Light](components/session-preview-light.png)

<details>
<summary>归档会话预览 / Archived-session preview · 深色 / Dark</summary>

![归档会话预览 / Archived-session preview · Dark](components/session-preview-dark.png)

</details>

<a id="update-tip"></a>

## 更新入口与下载提示 / Update entry and download tip

**功能 / Function：** 在有新版本时提供更新入口，并显示下载进度和目标版本。 / Offers an update entry when available and shows download progress and target version.

**设计 / Design：** 与账户、电话本按钮协调排列，下载提示改为纸质小便签。 / Layout coordinated with account and address-book controls, with a paper-note download tip.

**更新入口与下载提示 / Update entry and download tip · 浅色 / Light**

![更新入口与下载提示 / Update entry and download tip · Light](components/update-tip-light.png)

<details>
<summary>更新入口与下载提示 / Update entry and download tip · 深色 / Dark</summary>

![更新入口与下载提示 / Update entry and download tip · Dark](components/update-tip-dark.png)

</details>

<a id="settings-gallery"></a>

## 设置页：账号与余额、使用统计 / Settings: account, balance and usage

这里展示账号与余额、使用统计两页；左栏贴纸、装订和纸页也包含在图中。下方直接列出随皮肤提供的预设配图。

These two pages show account/balance and usage statistics, including the sidebar sticker, binding and paper layout. The preset illustrations bundled with the skin are listed directly below.

**账号与余额 / Account and balance · 浅色 / Light**

![账号与余额 / Account and balance · Light](components/settings-account-light.png)

<details>
<summary>账号与余额 / Account and balance · 深色 / Dark</summary>

![账号与余额 / Account and balance · Dark](components/settings-account-dark.png)

</details>

**使用统计 / Usage statistics · 浅色 / Light**

![使用统计 / Usage statistics · Light](components/settings-usage-light.png)

<details>
<summary>使用统计 / Usage statistics · 深色 / Dark</summary>

![使用统计 / Usage statistics · Dark](components/settings-usage-dark.png)

</details>

<a id="preset-artwork"></a>

### 预设配图 / Preset illustrations

以下为 14 张预设配图的原始 PNG（发布包采用 WebP 压缩编码），未叠加照片白边、胶带或界面控件。图片由 ChatGPT 生成；角色及素材说明见 [NOTICE](../skins/diy-journal/NOTICE)。

These are the 14 original PNG illustrations (the release uses WebP compression), without photo borders, tape or interface controls. Images were generated with ChatGPT; see [NOTICE](../skins/diy-journal/NOTICE) for character and artwork information.

| 配图 / Illustration | 配图 / Illustration |
| --- | --- |
| **主界面 / Home**<br>云海里的鲸鱼娘<br>![主界面 / Home](artwork/home.png) | **设置-账号与余额 / Account and balance**<br>鲸鱼存钱罐<br>![设置-账号与余额 / Account and balance](artwork/account.png) |
| **设置-通用设置 / General settings**<br>整理晨间小屋<br>![设置-通用设置 / General settings](artwork/general.png) | **设置-模型 / Models**<br>星图学习时间<br>![设置-模型 / Models](artwork/models.png) |
| **设置-内置插件 / Built-in plugins**<br>拼好一只小鲸鱼<br>![设置-内置插件 / Built-in plugins](artwork/plugins.png) | **设置-Agent预设 / Agent presets**<br>准备下一次冒险<br>![设置-Agent预设 / Agent presets](artwork/presets.png) |
| **设置-已归档会话 / Archived sessions**<br>收藏温柔回忆<br>![设置-已归档会话 / Archived sessions](artwork/archive.png) | **设置-Web插件 / Web plugin**<br>海边电话<br>![设置-Web插件 / Web plugin](artwork/web.png) |
| **设置-皮肤 / Skins**<br>挑选今日配色<br>![设置-皮肤 / Skins](artwork/skins.png) | **设置-宠物 / Pet settings**<br>草地上的小伙伴<br>![设置-宠物 / Pet settings](artwork/pets.png) |
| **设置-创意工坊 / Workshop**<br>手账文具小摊<br>![设置-创意工坊 / Workshop](artwork/workshop.png) | **设置-使用统计 / Usage statistics**<br>数一数今日星光<br>![设置-使用统计 / Usage statistics](artwork/usage.png) |
| **设置界面左栏 / Settings sidebar**<br>拿手账招手的透明贴纸<br>![设置界面左栏 / Settings sidebar](artwork/settings-sidebar.png) | **主界面左栏 / Main sidebar**<br>休息一小会<br>![主界面左栏 / Main sidebar](artwork/main-sidebar.png) |
