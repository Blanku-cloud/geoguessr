import express, { Request, Response, NextFunction } from "express";
import bycrpt from "bcrypt";
import { errorHandleing } from "../../utils/helper";
import { user_exist_db } from "../../database/database";
import { UserExist } from "./user.type";

export const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.body;

    // for google, apple, facebook login
    if (user.method != "email") {
      let authId = user.authId;
      const hashId = await bycrpt.hash(authId, 13);
      user.authId = hashId;
      return next();
    }

    let password = user.password;
    const hashPassword = await bycrpt.hash(password, 13);
    user.password = hashPassword;

    return next();
  } catch (error) {
    console.error("Error hashing the password at hashPassword:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const userExist = async (
  req: Request<{}, {}, UserExist>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // "facebook" | "google" | "apple" | "email"
    const method = req.body.method;
    // if user login with email, then email is authId, if anything else then it is the service provided id
    const authId = req.body.authId;

    const exist = await user_exist_db(method, authId);

    if (exist) {
      res.status(409).send("User exist");
      return;
    }
    return next();
  } catch (error) {
    errorHandleing(error, res, "userExist");
  }
};
