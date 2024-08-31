import {
  create_user_db,
  connect_auth_method_db,
  get_user_email_db,
  get_all_user_db,
  get_auth_method_db,
} from "../../database/database";
import { hashPassword } from "./user.middleware";
import bcrypt from "bcrypt";
import express, { Request, Response, NextFunction } from "express";
import { errorHandleing } from "../../utils/helper";
import { CreateUserEmail, CreateUser } from "./user.type";

export const getAllUser = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await get_all_user_db();
    res.status(200).json(user);
  } catch (error: unknown) {
    errorHandleing(error, res, "createUser");
  }
};

export const getAuthMethod = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await get_auth_method_db();
    res.status(200).json(user);
  } catch (error: unknown) {
    errorHandleing(error, res, "createUser");
  }
};

export const createUserThrGmail = async (
  req: Request<{}, {}, CreateUserEmail>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password, method, authId } = req.body;
    const userOn = true;
    const time = new Date();

    const user_login_info_id = await create_user_db(
      username,
      userOn,
      time,
      password
    );

    await connect_auth_method_db(user_login_info_id, method, authId);
    res.status(201).send("User created successfully");
  } catch (error) {
    errorHandleing(error, res, "createUserThrGmail");
  }
};

export const createUser = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, method, authId } = req.body;
    const userOn = true;
    const time = new Date();

    const user_login_info_id = await create_user_db(username, userOn, time);

    await connect_auth_method_db(user_login_info_id, method, authId);
    res.status(201).send("User created successfully");
  } catch (error) {
    errorHandleing(error, res, "createUserThrGmail");
  }
};

export const checkPasswordGmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const password = req.body.password;
    const email = req.body.email;
    const user_data = await get_user_email_db(email);
    const isMatch = await bcrypt.compare(
      password,
      user_data.user_pass as string
    );
    res.status(200).json({ isMatch });
  } catch (error) {
    errorHandleing(error, res, "checkPasswordGmail");
  }
};
