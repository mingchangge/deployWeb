import { defineStore } from 'pinia';
// import {
//     login as userLogin,
//     logout as userLogout,
//     getUserInfo,
// } from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';

const useUserStore = defineStore('user', {
    state: () => ({
        name: undefined,
        avatar: undefined,
        job: undefined,
        organization: undefined,
        location: undefined,
        email: undefined,
        introduction: undefined,
        personalWebsite: undefined,
        jobName: undefined,
        organizationName: undefined,
        locationName: undefined,
        phone: undefined,
        registrationDate: undefined,
        accountId: undefined,
        certification: undefined,
        role: 'admin',
    }),

    getters: {
        userInfo(state) {
            return { ...state };
        },
    },

    actions: {
        switchRoles() {
            return new Promise((resolve) => {
                this.role = this.role === 'user' ? 'admin' : 'user';
                resolve(this.role);
            });
        },
        // Set user's information
        setInfo(partial) {
            this.$patch(partial);
        },

        // Reset user's information
        resetInfo() {
            this.$reset();
        },

        // Get user's information
        async info() {
            // const res = await getUserInfo();
            res = {
                data: {
                    name: 'admin',
                    role: '*',
                }
            }
            this.setInfo(res.data);
        },

        // Login
        async login(loginForm) {
            console.log('登录成功！', loginForm);
            // try {
            //     const res = await userLogin(loginForm);
            //     setToken(res.data.token);
            // } catch (err) {
            //     clearToken();
            //     throw err;
            // }
        },

        // Logout
        async logout() {
            console.log('退出成功！');
            // await userLogout();
            this.resetInfo();
            // clearToken();
            // removeRouteListener();
        },
    },
});

export default useUserStore;