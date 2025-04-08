<template>
  <a-menu
    v-model:collapsed="collapsed"
    show-collapse-button="appStore.device !== 'mobile'"
    auto-open="false"
    :selected-keys="selectedKey"
    auto-open-selected="true"
    level-indent="34"
    style="height: 100%"
    @collapse="setCollapse"
  >
    <template v-for="item in menuTree" :key="item.name">
      <a-sub-menu
        v-if="item.children && item.children.length !== 0"
        :key="item.name"
      >
        <template #icon>
          <component :is="item.meta.icon" v-if="item.meta.icon" />
        </template>
        <template #title>{{ item.meta.title }}</template>
        <template v-for="child in item.children" :key="child.name">
          <a-menu-item @click="goto(child)">
            <template #icon>
              <component :is="child.meta.icon" v-if="child.meta.icon" />
            </template>
            {{ child.meta.title }}
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item v-else @click="goto(item)">
        <template #icon>
          <component :is="item.meta.icon" v-if="item.meta.icon" />
        </template>
        {{ item.meta.title }}
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store";
import { listenerRouteChange } from "@/utils/route-listener.js";
import useMenuTree from "./useMenuTree";

export default defineComponent({
  name: "MenuComponent",
  setup() {
    const appStore = useAppStore();
    const router = useRouter();
    const { menuTree } = useMenuTree();
    const selectedKey = ref([]);

    const collapsed = computed({
      get() {
        if (appStore.device === "desktop") return appStore.menuCollapse;
        return false;
      },
      set(value) {
        appStore.updateSettings({ menuCollapse: value });
      },
    });

    const goto = (item) => {
      router.push({
        name: item.name,
      });
    };

    listenerRouteChange((newRoute) => {
      if (newRoute.meta.requiresAuth && !newRoute.meta.hideInMenu) {
        if (newRoute.meta.activeMenu) {
          selectedKey.value = [newRoute.meta.activeMenu];
        } else {
          const key = newRoute.matched[newRoute.matched.length - 1]?.name;
          selectedKey.value = [key];
        }
      }
    }, true);

    const setCollapse = (val) => {
      if (appStore.device === "desktop")
        appStore.updateSettings({ menuCollapse: val });
    };

    return {
      appStore,
      menuTree,
      collapsed,
      selectedKey,
      goto,
      setCollapse,
    };
  },
});
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
