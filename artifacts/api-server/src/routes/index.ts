import { Router, type IRouter } from "express";
import healthRouter from "./health";
import analyticsRouter from "./analytics";
import giveawayRouter from "./giveaway";
import couponsRouter from "./coupons";

const router: IRouter = Router();

router.use(healthRouter);
router.use(analyticsRouter);
router.use(giveawayRouter);
router.use(couponsRouter);

export default router;
