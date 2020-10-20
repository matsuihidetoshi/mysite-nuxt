import { RouteConfig } from "@nuxt/types/config/router";

export default function ({ route, redirect }: { route: RouteConfig, redirect: Function }) {
  if (route.path !== '/' && route.path.slice(-1) === '/') {
    redirect(200, process.env.baseUrl + route.path.slice(0, -1))
  }
}
