import { Router } from "express";
import userRoutes from "./api/user";
import campaignRoutes from "./api/campaign";

// intialize router as main router
const router = Router();
router.use("/api/user", userRoutes);
router.use("/api/campaign", campaignRoutes);

export default router;
