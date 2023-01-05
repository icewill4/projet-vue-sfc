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
  {
    path: "/resistance",
    name: "resistance",
    component: () => import("../views/ResistanceView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
