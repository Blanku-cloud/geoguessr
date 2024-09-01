export type Language = "ENGLISH" | "DEUTSCH" | "ESPAÑOL" | "日本語";


export interface UserLoginInfo {
  id: number;
  username: string;
  user_pass?: string;
  user_on: boolean;
  created: Date;
  exp: number;
  coin: number;
}