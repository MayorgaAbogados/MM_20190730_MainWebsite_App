import PeopleView from "@/views/people.view/people.view.vue";


export const PEOPLE_ROUTES = [
    {
        path: '/people',
        name: 'people',
        component: PeopleView,
    },
    {
        path: '/people/section/:sectionName',
        name: 'people/section',
        component: PeopleView,
    }
];
