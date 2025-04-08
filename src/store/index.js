import { createPinia } from 'pinia';
import useUserStore from './user';
import useAppStore from './app';

const pinia = createPinia();

export { useAppStore, useUserStore };
export default pinia;