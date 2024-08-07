<template>
  <div class="layout">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>
          <a-menu
            show-collapse-button
            breakpoint="xl"
            :default-open-keys="['1']"
            :default-selected-keys="menu.activeMenu"
            :style="{ width: '100%', height: '100%' }"
            @menu-item-click="menu.onClickMenuItem"
          >
            <a-menu-item v-for="item in menu.data" :key="item.key">{{
              item.title
            }}</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";
import { menuData } from "../router/index";

const menu = reactive({
  data: [],
  activeMenu: [],
  initData: (data) => {
    return data.map((item) => {
      if (item.children && item.children.length > 0) {
        return menu.initData(item.children);
      }
      return {
        key: item.meta.title === "首页" ? "/" : item.path,
        title: item.meta.title,
      };
    });
  },
  onClickMenuItem: (item) => {
    console.log(item);
    menu.activeMenu = [item];
  },
});

onMounted(() => {
  menu.data = menu.initData(menuData);
  menu.activeMenu.push(menu.data[0].key);
});
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  &:deep(.arco-layout-header),
  &:deep(.arco-layout-footer) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--color-primary-light-4);
  }
  &:deep(.arco-layout-header) {
    height: 54px;
    border-bottom: 1px solid #e5e6eb;
  }
  &:deep(.arco-layout-sider) {
    width: 200px;
    background-color: var(--color-white);
    border-right: 1px solid #e5e6eb;
  }
  &:deep(.arco-layout-content) {
    height: calc(100vh - 54px - 36px - 46px);
    padding: 20px;
  }
  &:deep(.arco-layout-footer) {
    height: 36px;
    border-top: 1px solid #e5e6eb;
  }
}
</style>
