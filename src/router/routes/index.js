const modules = import.meta.glob('./modules/*.js', { eager: true });
const appRoutes = [];

Object.keys(modules).forEach((key) => {
    const defaultModule = modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
        ? [...defaultModule]
        : [defaultModule];
    appRoutes.push(...moduleList);
});

export default appRoutes;