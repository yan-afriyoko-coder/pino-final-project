import express from "express";
const routes = express.Router();
import {
  errorHandling,
  isLoggedIn,
  protectedPage,
  signup,
  viewSignup,
} from "../controllers/register.js";
import { login, loginView, logout } from "../controllers/login.js";

routes.get("/", (req, res) => {
  res.send("Hello World");
});

routes.get("/signup", viewSignup);
routes.post("/signup", signup);
routes.get("/protected-page", isLoggedIn, protectedPage);
routes.get("/login", loginView);
routes.post("/login", login);
routes.get("/logout", logout);
routes.use("/protected-page", errorHandling);

export default routes;
