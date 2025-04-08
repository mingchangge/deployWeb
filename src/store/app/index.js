import { defineStore } from 'pinia';
import { Notification } from '@arco-design/web-vue';
// import { getMenuList } from '@/api/user';

const useAppStore = defineStore('app', {
    state: () => ({
        "theme": "light",
        "colorWeek": false,
        "navbar": true,
        "menu": true,
        "hideMenu": false,
        "menuCollapse": false,
        "footer": true,
        "themeColor": "#165DFF",
        "menuWidth": 220,
        "globalSettings": false,
        "device": "desktop",
        "tabBar": false,
        "menuFromServer": false,
        "serverMenu": []
    }),

    getters: {
        appCurrentSetting(state) {
            return { ...state };
        },
        appDevice(state) {
            return state.device;
        },
        appServerMenuConfig(state) {
            return state.serverMenu || [];
        },
    },

    actions: {
        // Update app settings
        updateSettings(partial) {
            this.$patch(partial);
        },

        // Change theme color
        toggleTheme(dark) {
            if (dark) {
                this.theme = 'dark';
                document.body.setAttribute('arco-theme', 'dark');
            } else {
                this.theme = 'light';
                document.body.removeAttribute('arco-theme');
            }
        },
        toggleDevice(device) {
            this.device = device;
        },
        toggleMenu(value) {
            this.hideMenu = value;
        },
        async fetchServerMenuConfig() {
            let notifiInstance = null;
            try {
                notifiInstance = Notification.info({
                    id: 'menuNotice', // Keep the instance id the same
                    content: 'loading',
                    closable: true,
                });
                // const { data } = await getMenuList();
                // this.serverMenu = data;
                this.serverMenu = [];
                notifiInstance = Notification.success({
                    id: 'menuNotice',
                    content: 'success',
                    closable: true,
                });
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                notifiInstance = Notification.error({
                    id: 'menuNotice',
                    content: 'error',
                    closable: true,
                });
            }
        },
    },
});

export default useAppStore;