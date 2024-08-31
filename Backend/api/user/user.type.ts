export interface CreateUserEmail {
  username: string;
  password: string;
  method: "google" | "facebook" | "apple";
  authId: string | number;
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
