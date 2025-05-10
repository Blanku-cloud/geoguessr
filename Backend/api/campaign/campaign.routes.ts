import { Router } from "express";
import { generateCoord, givePoints } from "./campaign.handlers";
import { calPoints } from "./campaign.middleware";

const campaignRoutes = Router();

campaignRoutes.get("/generate-coord", generateCoord);
campaignRoutes.post("/cal-points", calPoints, givePoints);

export default campaignRoutes;
