# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

# 目的：此项目是为了尝试在 Rancher 上部署而建

# 本地项目第一次 push github

1. github 新建同名项目
2. 本地项目 git init
3. git remote add origin git@github.com:XXXXX
4. git branch -M master
5. git add .
6. git commit -m 'first commit'
7. git push -u origin master

# github action 重用某些步骤

GitHub Actions 提供了一些机制来重用步骤和工作流程，以避免在多个地方重复相同的代码。以下是几种常见的方法：

1. **可重用工作流（Reusable Workflows）**：你可以创建一个可重用的工作流，然后在其他工作流中通过 `uses` 关键字来调用它。这需要在可重用工作流的 YAML 文件中使用 `on: workflow_call:` 指令，并在调用时指定工作流的位置。例如，如果可重用的工作流位于同一存储库中，你可以这样调用它：`./.github/workflows/{filename}`，如果是在其他存储库中，则使用 `{owner}/{repo}/.github/workflows/{filename}@{ref}` 格式 。

2. **组合动作（Composite Actions）**：组合动作允许你将多个步骤合并成一个单一的步骤，然后可以在任何作业中像使用其他 GitHub Actions 一样使用这个组合动作。这有助于避免在多个地方重复相同的步骤集合 。

3. **环境变量和秘密（Environment Variables and Secrets）**：在使用可重用工作流时，你可以定义输入（inputs）和秘密（secrets），这样就可以在调用工作流时传递所需的配置和凭据 。

4. **工作流输出（Workflow Outputs）**：可重用工作流可以定义输出（outputs），这些输出可以在调用工作流的其他部分中使用，从而实现跨作业的数据共享 。
