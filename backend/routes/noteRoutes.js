import { Router } from "express";

import * as noteController from "../controllers/noteController.js";

const router = Router();

router.post("/create", noteController.createNote);
router.get("/get-all", noteController.getNote);

export default router;
