import express from "express";
import {getUser, login, logout, register} from '../Controllers/userController.js'
import {isAuthorized} from "../middleware/auth.middleware.js"


const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout",isAuthorized,logout)
router.get("/getuser", isAuthorized, getUser);

export default router