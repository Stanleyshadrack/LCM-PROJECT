import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/login", "routes/login/index.tsx"), // 👈 now accessible at /login
  route("/home", "routes/home.tsx"),         // optional: accessible at /home
] satisfies RouteConfig;
