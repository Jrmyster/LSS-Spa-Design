import { Router, type IRouter } from "express";
import healthRouter from "./health";
import analyticsRouter from "./analytics";
import giveawayRouter from "./giveaway";

const router: IRouter = Router();

router.use(healthRouter);
router.use(analyticsRouter);
router.use(giveawayRouter);

export default router;
