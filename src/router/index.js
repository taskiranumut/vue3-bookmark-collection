import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "AddBookmark",
    path: "/add-bookmark",
    component: () => import("@/views/AddBookmark"),
  },
  {
    name: "EditBookmark",
    path: "/edit-bookmark/:id",
    component: () => import("@/views/EditBookmark"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
