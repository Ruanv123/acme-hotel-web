import LoggedLayout from "@/components/layouts/LoggedLayout.vue"
import SettingsLayout from "@/components/layouts/SettingsLayout.vue"
import NotFoundView from "@/views/NotFoundView.vue"
import { createRouter, createWebHistory } from "vue-router"

function isAuthenticated() {
  return !!localStorage.getItem("token")
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      beforeEnter: (to, from, next) => {
        if (import.meta.env.VITE_AUTENTICATION_DISABLED) {
          next()
          return
        }

        if (isAuthenticated()) {
          next("/")
        } else {
          next()
        }
      },
    },
    {
      path: "/",
      component: LoggedLayout,
      beforeEnter: (to, from, next) => {
        if (import.meta.env.VITE_AUTENTICATION_DISABLED) {
          next()
          return
        }

        if (!isAuthenticated()) {
          next("/login")
        } else {
          next()
        }
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "quartos",
          name: "quartos",
          component: () => import("../views/QuartosView.vue"),
        },
        {
          path: "reservas",
          name: "reservas",
          component: () => import("../views/ReservasView.vue"),
        },
        {
          path: "hospedes",
          name: "hospedes",
          component: () => import("../views/HospedesView.vue"),
        },
        {
          path: "pagamentos",
          name: "pagamentos",
          component: () => import("../views/PagamentosView.vue"),
        },
        {
          path: "settings",
          component: () => import("../components/layouts/SettingsLayout.vue"),
          children: [
            {
              path: "",
              name: "settings",
              component: () => import("../views/ConfiguracoesView.vue"),
            },
          ],
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundView,
        },
      ],
    },
  ],
})

export default router
