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
import { CreateUserEmail, CreateUser } from "./user.type";
import { authMethod } from "../../database/database.type";
import { UserLoginInfo } from "../../database/database";
import { generateJWT } from "./user.helper";

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

    let user_data: UserLoginInfo = (await get_user_email_db(authId))!;
    const { user_pass, ...userWithoutPass } = user_data;

    const token: string = generateJWT(userWithoutPass);
    res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    errorHandleing(error, res, "createUserThrGmail");
  }
};

export const createUser = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("created user");
  try {
    const { authId, method, username } = req.body;
    const userOn: true = true;
    const time: Date = new Date();

    const user_login_info_id: number = await create_user_db(
      username,
      userOn,
      time
    );

    await connect_auth_method_db(user_login_info_id, method, authId);
    await connect_user_data_db(user_login_info_id);

    res.status(201).send("User created successfully");
  } catch (error) {
    errorHandleing(error, res, "createUserThrGmail");
  }
};

// login with email
export const checkPasswordGmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { password, authId: email } = req.body; // Destructure email and password directly
    let user_data = await get_user_email_db(email);
    const userOrPassError = () =>
      res.status(401).json({
        error: true,
        message: "username or password is incorrect.",
        code: 401,
      });

    if (!user_data) {
      userOrPassError();
      return;
    }
    const isMatch: boolean = await bcrypt.compare(
      password,
      user_data.user_pass as string
    );

    if (!isMatch) {
      userOrPassError();
      return;
    }
    const { user_pass, ...userWithoutPass } = user_data;

    const token = generateJWT(userWithoutPass);
    res.status(201).json({
      message: "Login successfully",
      token,
    });
  } catch (error) {
    errorHandleing(error, res, "checkPasswordGmail");
  }
};
