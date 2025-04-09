<template>
  <div class="layout">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider
          class="layout-sider"
          :collapsed="collapsed"
          :collapsible="true"
          :width="menuWidth"
          :style="{ paddingTop: navbar ? '60px' : '' }"
          :hide-trigger="true"
          @collapse="setCollapsed"
        >
          <Menu />
        </a-layout-sider>
        <a-layout class="layout-content" :style="paddingStyle">
          <TabBar v-if="appStore.tabBar" />
          <a-layout-content>
            <router-view></router-view>
            <!-- <router-view v-slot="{ Component, route }">
              <transition name="fade" mode="out-in" appear>
                <component
                  :is="Component"
                  v-if="route.meta.ignoreCache"
                  :key="route.fullPath"
                />
                <keep-alive v-else :include="cacheList">
                  <component :is="Component" :key="route.fullPath" />
                </keep-alive>
              </transition>
            </router-view> -->
          </a-layout-content>
        </a-layout>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import { ref, computed, watch, provide } from "vue";
import Menu from "./components/menu/index.vue";
import TabBar from "./components/tab-bar/index.vue";
import { useAppStore, useTabBarStore } from "@/store";
import { useRoute } from "vue-router";

const appStore = useAppStore();
const tabStore = useTabBarStore();
// 菜单栏是否收起
const renderMenu = computed(() => appStore.menu);
const hideMenu = computed(() => appStore.hideMenu);
const menuWidth = computed(() => {
  return appStore.menuCollapse ? 48 : appStore.menuWidth;
});
const collapsed = computed(() => {
  return appStore.menuCollapse;
});
const paddingStyle = computed(() => {
  const paddingLeft =
    renderMenu.value && !hideMenu.value
      ? { paddingLeft: `${menuWidth.value}px` }
      : {};
  return { ...paddingLeft };
});
const setCollapsed = (val) => {
  appStore.updateSettings({ menuCollapse: val });
};

// keep-alive路由缓存列表
const cacheList = computed(() => tabStore.getCacheList);
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
  .layout-sider {
    position: fixed;
    top: 54px;
    left: 0;
    bottom: 36px;
    z-index: 99;
    // height: 100%;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    &::after {
      position: absolute;
      top: 0;
      right: -1px;
      display: block;
      width: 1px;
      height: 100%;
      background-color: var(--color-border);
      content: "";
    }

    > :deep(.arco-layout-sider-children) {
      overflow-y: hidden;
    }
  }
  .layout-content {
    min-height: calc(100vh - 54px - 36px - 46px);
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
  &:deep(.arco-layout-footer) {
    height: 36px;
    border-top: 1px solid #e5e6eb;
  }
}
</style>
