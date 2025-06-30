import { Router } from "express";
import noteRoutes from "./noteRoutes.js";
import callRoutes from "./callRoutes.js";

const router = Router();

router.use("/notes", noteRoutes);
router.use("/call", callRoutes);

export default router;
