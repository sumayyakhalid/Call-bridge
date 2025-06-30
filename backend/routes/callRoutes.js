import { Router } from "express";

import * as callController from "../controllers/callController.js";

const router = Router();

router.post("/connect", callController.getCall);
router.post("/twiml", callController.getTwiml);

export default router;
