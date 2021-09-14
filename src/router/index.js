import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import AddBookmark from "@/views/AddBookmark";
import EditBookmark from "@/views/EditBookmark";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "AddBookmark",
    path: "/add-bookmark",
    component: AddBookmark,
  },
  {
    name: "EditBookmark",
    path: "/edit-bookmark/:id",
    component: EditBookmark,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
