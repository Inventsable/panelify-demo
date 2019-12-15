import store from "../store/store-settings";

const routes = [
  {
    path: "/",
    component: () => import("layouts/Panel.vue"),
    children: [
      { path: "", name: "Index", component: () => import("pages/Index.vue") },
      {
        path: "settings",
        name: "Settings",
        component: () => import("pages/Settings.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
