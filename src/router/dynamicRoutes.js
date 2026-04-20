export const vipRoute = {
    path: '/vip-exclusive',
    name: 'vipExclusive',
    component: () => import('@/views/VipExclusive.vue'),
    meta: {
        requiresAuth: true,
        title: "VIP Exclusive",
        isNavLink: true,
        roles: ['vip'],
    },
}