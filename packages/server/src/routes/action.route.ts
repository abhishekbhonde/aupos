import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { contextId, action } = req.body;

  console.log("🚀 Action Triggered:");
  console.log({ contextId, action });

  return res.json({
    status: "ok",
    message: `Action '${action}' received for contextId ${contextId}`,
    result: "AI processing will be added in Module 3."
  });
});

export default router;
