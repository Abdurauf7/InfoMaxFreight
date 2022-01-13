import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Carriers",
    name: "Carriers",
    component: () => import("../views/Carriers.vue"),
  },
  {
    path: "/Shippers",
    name: "Shippers",

    component: () => import("../views/Shippers/"),
  },
  {
    path: "/Whoeweare",
    name: "Whoweare",

    component: () => import("../views/Whoweare.vue"),
  },
  {
    path: "/Insights",
    name: "insights",

    component: () => import("../views/Whoweare.vue"),
  },
  {
    path: "/Careers",
    name: "Careers",
    component: () => import("../views/Careers/"),
  },
  {
    path: "/Contacts",
    name: "contacts",
    component: () => import("../views/Whoweare.vue"),
  },
  {
    path: "/Careers/detail",
    name: "details",
    component: () => import("../views/UserDetail/"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active",
});

export default router;
