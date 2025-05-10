import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { errorHandleing } from "../../utils/helper";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const locations = [
  {
    minLat: 34.0335483,
    maxLat: 41.4388777,
    minLng: -97.3826599,
    maxLng: -81.088261,
  },
  {
    minLat: 35.654735,
    maxLat: 45.5107238,
    minLng: -122.6784923,
    maxLng: -99.9218442,
  },
  {
    minLat: 38.2484713,
    maxLat: 41.8082966,
    minLng: -6.760287,
    maxLng: -0.8108664,
  },
  {
    minLat: 44.8350835,
    maxLat: 48.0679989,
    minLng: -0.7703102,
    maxLng: 11.6193988,
  },
  {
    minLat: 60.7057474,
    maxLat: 63.0961158,
    minLng: 21.6132451,
    maxLng: 28.7720709,
  },
  {
    minLat: 19.2777564,
    maxLat: 25.3611667,
    minLng: 74.63148,
    maxLng: 84.7837043,
  },
  {
    minLat: 13.0683353,
    maxLat: 16.814347,
    minLng: 100.262254,
    maxLng: 104.2890578,
  },
  {
    minLat: 34.6741758,
    maxLat: 34.916632,
    minLng: 132.3808494,
    maxLng: 135.1769736,
  },
  {
    minLat: 35.888379,
    maxLat: 36.0738757,
    minLng: 136.2191724,
    maxLng: 140.6320452,
  },
  {
    minLat: -38.2325374,
    maxLat: -36.8310044,
    minLng: 139.8507615,
    maxLng: 146.4344081,
  },
];

const getRandomArbitraryBound = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const generateCoord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const maxAttempts = 100; // Limit attempts to avoid infinite loops
    let validLocation = null;
    let attempts = 0;
    // grab random place to pick from data
    const place = Math.floor(Math.random() * locations.length);
    while (!validLocation && attempts < maxAttempts) {
      const location = locations[place];
      const lat = getRandomArbitraryBound(location.minLat, location.maxLat);
      const lng = getRandomArbitraryBound(location.minLng, location.maxLng);

      // Check if the coordinate has Street View imagery
      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
      const streetViewResponse = await axios.get(streetViewUrl);

      if (streetViewResponse.data.status === "OK") {
        validLocation = { lat, lng };
      }

      attempts++;
    }

    if (!validLocation) {
      return res
        .status(404)
        .json({ error: "No Street View available in this region" });
    }

    req.session.location = { lat: validLocation.lat, lng: validLocation.lng };
    console.log("Session ID:", req.sessionID);

    res.status(200).json(validLocation);
    console.log("Before setting session:", req.session);
  } catch (error) {
    errorHandleing(error, res, "generateCoord");
  }
};

export const givePoints = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      points: req.points,
      acutalLat: req.session.location?.lat,
      acutalLng: req.session.location?.lng,
      offDistance: req.offDistance,
    });
  } catch (error) {
    errorHandleing(error, res, "givePoints");
  }
};
