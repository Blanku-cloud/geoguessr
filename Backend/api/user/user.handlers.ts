import {
  create_user_db,
  connect_auth_method_db,
  get_user_email_db,
  get_all_user_db,
  get_auth_method_db,
  connect_user_data_db,
} from "../../database/database";
import { hashPassword } from "./user.middleware";
import bcrypt from "bcrypt";
import express, { Request, Response, NextFunction } from "express";
import { errorHandleing } from "../../utils/helper";
import { CreateUserEmail, CreateUser, } from "./user.type";
import { authMethod } from "../../database/database.type";
import { UserLoginInfo } from "../../database/database";
import user from ".";

export const getAllUser = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user: UserLoginInfo[] = await get_all_user_db();
    res.status(200).json(user);
  } catch (error: unknown) {
    errorHandleing(error, res, "getAllUser");
  }
};

export const getAuthMethod = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user: authMethod[] = await get_auth_method_db();
    res.status(200).json(user);
  } catch (error: unknown) {
    errorHandleing(error, res, "getAuthMethod");
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

    const user_login_info_id: number = await create_user_db(
      username,
      userOn,
      time,
      password
    );

    await connect_auth_method_db(user_login_info_id, method, authId);

    await connect_user_data_db(user_login_info_id);

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
    const userOn: true = true;
    const time: Date = new Date();

    const user_login_info_id: number = await create_user_db(username, userOn, time);

    await connect_auth_method_db(user_login_info_id, method, authId);

    await connect_user_data_db(user_login_info_id);

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
    const password: string = req.body.password;
    const email: string = req.body.authId;
    let user_data: UserLoginInfo = await get_user_email_db(email);
    const isMatch: boolean = await bcrypt.compare(
      password,
      user_data.user_pass as string
    );
    console.log(user_data);

    user_data = Object.fromEntries(
      Object.entries(user_data).filter(([key, value]) => key != "user_pass")
    ) as Omit<UserLoginInfo, "user_pass">;

    if (isMatch) {
      res.status(200).json(user_data);
      return;
    }
  } catch (error) {
    errorHandleing(error, res, "checkPasswordGmail");
  }
};
