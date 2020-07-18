import FreeConsultingPage from './FreeConsultingPage/free-consulting.page.vue';
import ScheduleConsultingPage from './ScheduleConsultingPage/schedule-consulting.page.vue';
import VIPConsultingPage from './VIPConsultingPage/vip-consulting.page.vue';

export default [
    {
        path: '/services/free',
        name: 'SERVICES_FREE',
        component: FreeConsultingPage,
    },
    {
        path: '/services/schedule',
        name: 'SERVICES_SCHEDULE',
        component: ScheduleConsultingPage,
    },
    {
        path: '/services/vip',
        name: 'SERVICES_VIP',
        component:  VIPConsultingPage,
    },
];