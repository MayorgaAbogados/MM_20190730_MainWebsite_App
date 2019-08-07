import HomeView from "@/views/home.view/home.view.vue";


export const HOME_ROUTES = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/home/section/:sectionName',
        name: 'home/section',
        component: HomeView,
    },
    {
        path: '/home',
        redirect: { name: 'home' },
    },
    {
        path: '/index.html',
        redirect: { name: 'home' },
    },
];
