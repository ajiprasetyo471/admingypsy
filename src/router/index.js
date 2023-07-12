import { createRouter, createWebHistory } from 'vue-router';

// Cek keberadaan data pengguna di localStorage
// const userData = localStorage.getItem('token') == null ? false : true;

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/dashboard/AdminContainer.vue'),
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
    name: 'user master',
    path: '/users',
    component: () => import('@/views/users/UsersContainer.vue'),
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
    name: 'app new',
    path: '/app-new',
    component: () => import('@/views/app master/app new/AppNewContainer.vue'),
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
    name: 'industry master',
    path: '/industry_master',
    component: () =>
      import('@/views/industry master/industry/IndustryMasterContainer.vue'),
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
    name: 'sub industry master',
    path: '/sub_industry_master',
    component: () =>
      import(
        '@/views/industry master/sub industry/SubIndustryMasterContainer.vue'
      ),
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
    name: 'city master',
    path: '/city-master',
    component: () =>
      import('@/views/manage countries/city master/CityMasterContainer.vue'),
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
    name: 'town master',
    path: '/town-master',
    component: () =>
      import('@/views/manage countries/town master/TownMasterContainer.vue'),
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
    name: 'country master',
    path: '/country-master',
    component: () =>
      import(
        '@/views/manage countries/country master/CountryMasterContainer.vue'
      ),
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
    name: 'zone master',
    path: '/zone-master',
    component: () =>
      import('@/views/manage countries/zone master/ZoneMasterContainer.vue'),
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
    name: 'healthcare settings',
    path: '/healthcare-settings',
    component: () =>
      import(
        '@/views/the syringe/healthcare settings/HealthcareSettingsContainer.vue'
      ),
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
    name: 'skills group',
    path: '/skills-group',
    component: () =>
      import(
        '@/views/the syringe/skills/skills group/SkillsGroupContainer.vue'
      ),
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
    name: 'primary skills',
    path: '/primary-skills',
    component: () =>
      import(
        '@/views/the syringe/skills/primary skills/PrimarySkillsContainer.vue'
      ),
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
    name: 'employers',
    path: '/employers',
    component: () =>
      import('@/views/the syringe/employers/EmployersContainer.vue'),
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
    name: 'employers main info',
    path: '/employers/main-info/:id',
    component: () =>
      import('@/views/the syringe/employers/main info/MainInfoContainer.vue'),
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
    name: 'employers contacts',
    path: '/employers/contacts/:id',
    component: () =>
      import('@/views/the syringe/employers/contacts/ContactsContainer.vue'),
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
    name: 'employers socials',
    path: '/employers/socials/:id',
    component: () =>
      import('@/views/the syringe/employers/socials/SocialsContainer.vue'),
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
    name: 'employers job locations',
    path: '/employers/job-locations/:id',
    component: () =>
      import(
        '@/views/the syringe/employers/job locations/JobLocationsContainer.vue'
      ),
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
    name: 'boozards category',
    path: '/booze_category',
    component: () =>
      import('@/views/boozards/category/BoozardsCategoryContainer.vue'),
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
    name: 'boozards brands',
    path: '/booze_brands',
    component: () =>
      import('@/views/boozards/brands/BoozardsBrandsContainer.vue'),
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
    path: '/*', // Rute ini akan menangkap semua rute yang tidak cocok dengan rute lainnya
    redirect: '/', // Alihkan ke halaman dashboard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
