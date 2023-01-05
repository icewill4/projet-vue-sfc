import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "pokeapi",
    component: () => import("../views/PokeApi.vue"),
  },
  {
    path: "/equipe",
    name: "equipe",
    component: () => import("../views/EquipeView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
