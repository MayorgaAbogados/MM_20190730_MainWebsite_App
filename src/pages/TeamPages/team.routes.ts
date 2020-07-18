import TeamPage from './team.page.vue';

export default [
    {
        path: '/team',
        name: 'TEAM_PAGE',
        component: TeamPage,
    },
    {
        path: '/team/director',
        name: 'TEAM_PAGE',
        component: TeamPage,
    },
    {
        path: '/..+team/lawyers',
        name: 'TEAM_PAGE',
        component: TeamPage,
    },
];