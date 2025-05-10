export interface CreateUserEmail {
  username: string;
  password: string;
  method: "google" | "facebook" | "apple";
  authId: string;
}

export interface CreateUser {
  username: string;
  method: "google" | "facebook" | "apple";
  authId: string;
}

export interface UserExist {
  method: "google" | "facebook" | "apple" | "email";
  authId: string | number;
}

declare module "express-session" {
  interface SessionData {
    location?: { lat: number; lng: number };
  }
}

declare module "express" {
  export interface Request {
    points?: number;
    offDistance?: number;
  }
}
