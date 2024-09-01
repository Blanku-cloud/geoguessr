import mysql from "mysql2";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import type { UserLoginInfo, authInfo, authMethod } from "./database.type";
import dotenv from "dotenv";
dotenv.config();

// establish conntections
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function get_all_user_db(): Promise<UserLoginInfo[]> {
  const query = "SELECT * FROM user_login_info";
  const [all_user] = await pool.query<RowDataPacket[]>(query);
  return all_user as UserLoginInfo[];
}

export async function get_auth_method_db(): Promise<authMethod[]> {
  const query = "SELECT * FROM auth_method";
  const [auth_method] = await pool.query<RowDataPacket[]>(query);
  return auth_method as authMethod[];
}

// login as either google, facebook, apple.
// return user if exist or empty set if not exist
// user must exist
async function get_user(
  method: "facebook" | "google" | "apple",
  method_id: number
): Promise<UserLoginInfo> {
  const auth_query = `SELECT * FROM auth_method WHERE ${method}_id = ?`;
  const [auth_info] = await pool.query<RowDataPacket[]>(auth_query, [
    method_id,
  ]);

  const info = auth_info[0] as authInfo;
  const user_query = `
    SELECT *
    FROM user_login_info
    WHERE id = ?
  `;

  const [user] = await pool.query<RowDataPacket[]>(user_query, [
    info.user_login_info_id,
  ]);

  return user[0] as UserLoginInfo;
}

// user must exist
export async function get_user_email_db(email: string): Promise<UserLoginInfo> {
  // verify email
  const auth_query = `SELECT * FROM auth_method WHERE email_id = ?`;
  const [auth_info] = await pool.query<RowDataPacket[]>(auth_query, [email]);
  const info = auth_info[0] as authInfo;

  // verify password
  const pass_query = `
  SELECT username, user_on, created, exp, coins, user_pass
  FROM user_login_info
    INNER JOIN user_data
      ON user_login_info.id = user_data.user_login_info_id
  WHERE id = ?`;
  const [user] = await pool.query<RowDataPacket[]>(pass_query, [
    info.user_login_info_id,
  ]);

  return user[0] as UserLoginInfo;
}

// find if user already exist base off third party signin
export async function user_exist_db(
  method: "facebook" | "google" | "apple" | "email",
  method_id: string | number
): Promise<Boolean> {
  const auth_query = `SELECT ${method}_id FROM auth_method WHERE ${method}_id = ?`;
  const [auth_info] = await pool.query<RowDataPacket[]>(auth_query, [
    method_id,
  ]);

  if (auth_info.length == 0) {
    return false;
  }
  return true;
}

// create user in user_login_info
// returns the id of the newly created row
export async function create_user_db(
  username: string,
  user_on: boolean,
  created: Date,
  user_pass?: string
): Promise<number> {
  if (user_pass) {
    const query =
      "INSERT INTO user_login_info (username, user_pass, user_on, created) VALUES (?, ?, ?, ?)";
    const id = await pool.query<ResultSetHeader>(query, [
      username,
      user_pass,
      user_on,
      created,
    ]);
    return id[0].insertId;
  }
  const query =
    "INSERT INTO user_login_info (username, user_on, created) VALUES (?, ?, ?)";
  const id = await pool.query<ResultSetHeader>(query, [
    username,
    user_on,
    created,
  ]);

  return id[0].insertId;
}

// use with create_user_db
export async function connect_auth_method_db(
  user_login_info_id: number,
  method: "google" | "facebook" | "apple" | "email",
  authId: string | number
): Promise<void> {
  const query = `INSERT INTO auth_method (user_login_info_id, ${method}_id) VALUES (?, ?)`;
  await pool.query<RowDataPacket[]>(query, [user_login_info_id, authId]);
}

// use with create_user_db
export async function connect_user_data_db(
  user_login_info_id: number
): Promise<void> {
  const query = `INSERT INTO user_data (user_login_info_id) VALUES (?)`;
  await pool.query<RowDataPacket[]>(query, [user_login_info_id]);
}

export { UserLoginInfo };
