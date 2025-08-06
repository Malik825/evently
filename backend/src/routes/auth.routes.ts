import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", loginAdmin);

export default router;
