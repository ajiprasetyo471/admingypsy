import { createRouter, createWebHistory } from 'vue-router';

// Cek keberadaan data pengguna di localStorage
// const userData = localStorage.getItem('token') == null ? false : true;

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    beforeEnter: (to, from, next) => {
      // Pengecekan status login sebelum masuk ke halaman beranda
      if (localStorage.getItem('token') == null) {
        next('/auth/login'); // Alihkan ke halaman login jika belum masuk
      } else {
        next(); // Lanjutkan ke halaman beranda jika sudah masuk
      }
    },
  },
  {
    name: 'login',
    path: '/auth/login',
    component: () => import('@/views/login/AdminPage.vue'),
    beforeEnter: (to, from, next) => {
      // Pengecekan status login sebelum masuk ke halaman login
      if (localStorage.getItem('token') != null) {
        next('/'); // Alihkan ke halaman beranda jika sudah masuk
      } else {
        next(); // Lanjutkan ke halaman login jika belum masuk
      }
    },
  },
  {
    path: '/*', // Rute ini akan menangkap semua rute yang tidak cocok dengan rute lainnya
    redirect: '/', // Alihkan ke halaman dashboard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
