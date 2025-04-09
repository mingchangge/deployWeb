import { createPinia } from 'pinia';
import useUserStore from './user';
import useAppStore from './app';
import useTabBarStore from './tab';

const pinia = createPinia();

export { useAppStore, useTabBarStore, useUserStore };
export default pinia;