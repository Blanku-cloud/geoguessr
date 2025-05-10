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
      let authId: string = user.authId;
      const hashId: string = await bycrpt.hash(authId, 13);
      user.authId = hashId;
      return next();
    }

    let password: string = user.password;
    const hashPassword: string = await bycrpt.hash(password, 13);
    user.password = hashPassword;

    return next();
  } catch (error) {
    console.error("Error hashing the password at hashPassword:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// for when user try to sign in then tell user they already have an account
export const userExist = async (
  req: Request<{}, {}, UserExist>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const method: "facebook" | "google" | "apple" | "email" = req.body.method;
    // if user login with email, then email is authId, if anything else then it is the service provided id
    const authId: string | number = req.body.authId;

    const exist: Boolean = await user_exist_db(method, authId);
    console.log(req.body);

    if (exist) {
      res.status(409).json({
        message:"User exist already",
        error: true,
        code: 409,
      });
      return;
    }
    return next();
  } catch (error) {
    errorHandleing(error, res, "userExist");
  }
};


