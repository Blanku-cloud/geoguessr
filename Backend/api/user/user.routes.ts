import { Router } from "express";
import {
  createUserThrGmail,
  checkPasswordGmail,
  getAllUser,
  createUser,
  getAuthMethod,
} from "./user.handlers";
import { hashPassword, userExist } from "./user.middleware";
import express, { Request, Response, NextFunction } from "express";

// initalize user router
const userRoutes = Router();

userRoutes.post(
  "/create-user-email",
  userExist,
  hashPassword,
  createUserThrGmail
);

userRoutes.post("/create-user", userExist, hashPassword, createUser);

userRoutes.get("/auth-from-email", checkPasswordGmail);

userRoutes.get("/get-all-user", getAllUser);

userRoutes.get("/get-auth-method", getAuthMethod);

userRoutes.get("/hello", (req: Request, res: Response) => {
  res.status(200).send("hello world");
});

export default userRoutes;
