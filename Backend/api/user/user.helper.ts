import jwt from "jsonwebtoken";
import { UserLoginInfo } from "../../database/database";

export const generateJWT = (user: UserLoginInfo): string => {
  const secretKey = "your-secret-key";
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(user, secretKey, options);
  return token;
};
