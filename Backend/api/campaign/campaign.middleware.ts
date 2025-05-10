import { Request, Response, NextFunction } from "express";
import { errorHandleing } from "../../utils/helper";

const toRadians = (degrees: number) => degrees * (Math.PI / 180);

const haversineDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c * 0.621371;
};

export const calPoints = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let points = 5000;
    let offDistance = 0;
    const { lat, lng } = req.body;
    if (req.session.location) {
      offDistance = haversineDistance(
        req.session.location.lat,
        req.session.location.lng,
        lat,
        lng
      );
      points -= offDistance;
    }
    if (points < 0) {
      points = 0;
    }
    console.log("Session ID:", req.sessionID);
    req.offDistance = Math.abs(offDistance);
    req.points = points;
    next();
  } catch (error) {
    errorHandleing(error, res, "checkUserCoord");
  }
};
