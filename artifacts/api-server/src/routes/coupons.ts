import { Router, type IRouter } from "express";
import { addClaim, getAllClaims, type CouponType } from "../lib/couponClaimsStore";

const VALID_COUPONS: CouponType[] = ["MARCH20", "REFER20"];

const router: IRouter = Router();

router.post("/coupons/claim", (req, res) => {
  const { name, email, coupon } = req.body as {
    name?: string;
    email?: string;
    coupon?: string;
  };

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ ok: false, error: "Please enter your full name." });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }
  if (!coupon || !VALID_COUPONS.includes(coupon as CouponType)) {
    return res.status(400).json({ ok: false, error: "Invalid coupon type." });
  }

  const result = addClaim(name, email, coupon as CouponType);
  if (result.duplicate) {
    return res.json({
      ok: true,
      alreadyClaimed: true,
      code: coupon,
      message: "You already claimed this coupon — your code is still valid!",
    });
  }
  return res.json({ ok: true, alreadyClaimed: false, code: coupon });
});

router.get("/coupons/claims", (_req, res) => {
  const claims = getAllClaims();
  res.json({ count: claims.length, claims });
});

export default router;
