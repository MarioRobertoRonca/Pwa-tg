
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/login.vue')},
      { path: '/home', component: () => import('pages/home.vue')},
      { path: '/createAccount', component: () => import('pages/createAccount.vue')},
      { path: '/feedback', component: () => import('pages/feedback.vue')},
      { path: '/agendamentos', component: () => import('pages/agendamentos.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
