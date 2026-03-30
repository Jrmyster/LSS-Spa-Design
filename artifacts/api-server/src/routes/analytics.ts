import { Router, type IRouter } from "express";
import {
  incrementVisits,
  incrementBookingClicks,
  getStats,
} from "../lib/analyticsStore";

const router: IRouter = Router();

router.post("/analytics/visit", (req, res) => {
  const data = incrementVisits();
  res.json({ ok: true, visits: data.visits });
});

router.post("/analytics/booking-click", (req, res) => {
  const data = incrementBookingClicks();
  res.json({ ok: true, bookingClicks: data.bookingClicks });
});

router.get("/analytics/stats", (_req, res) => {
  const stats = getStats();
  res.json(stats);
});

export default router;
