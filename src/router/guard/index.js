import { setRouteEmitter } from '@/utils/route-listener';
import setupPermissionGuard from './permission';
import setupServerPermissionGuard from './serverPermission';

function setupPageGuard(router) {
    router.beforeEach(async (to) => {
        // emit route change
        setRouteEmitter(to);
    });
}

export default function createRouteGuard(router) {
    setupPageGuard(router);
    setupServerPermissionGuard(router);
    setupPermissionGuard(router);
}