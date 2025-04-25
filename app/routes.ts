import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/login", "routes/login/index.tsx"),
  route("/home", "routes/home.tsx"),
  route("/signup", "routes/signup/index.tsx"), // 👈 added signup route
] satisfies RouteConfig;
