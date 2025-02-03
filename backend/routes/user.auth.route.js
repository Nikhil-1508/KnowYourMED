import express from "express";
import {
  handleUserLogin,
  handleUserLogout,
  handleUserRegister,
  handleEmail,
  handlePassswordReset,
  handeNewEmail,
} from "../controller/user.auth.controller.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.post("/register", handleUserRegister);

router.post("/email-verification", handleEmail);

router.post("/new/email-verification", handeNewEmail);

router.post("/password-reset", handlePassswordReset);

router.post("/login", handleUserLogin);

router.get("/logout", verifyJWT, handleUserLogout);

export default router;
