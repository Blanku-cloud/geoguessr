import { Router } from "express";
import userRoutes from "./api/user";

// intialize router as main router
const router = Router();

router.use("/api/user", userRoutes);

export default router;
