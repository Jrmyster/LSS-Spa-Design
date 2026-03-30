import { Router, type IRouter } from "express";
import { addEntry, getAllEntries } from "../lib/giveawayStore";

const router: IRouter = Router();

router.post("/giveaway/enter", (req, res) => {
  const { name, email } = req.body as { name?: string; email?: string };
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ ok: false, error: "Please enter your full name." });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }
  const result = addEntry(name, email);
  if (result.duplicate) {
    return res.status(409).json({ ok: false, error: "This email is already entered in the giveaway. Good luck!" });
  }
  return res.json({ ok: true, message: "You're entered! Good luck! 🌻" });
});

router.get("/giveaway/entries", (_req, res) => {
  const entries = getAllEntries();
  res.json({ count: entries.length, entries });
});

export default router;
