export interface UserLoginInfo {
  id: number;
  username: string;
  user_pass?: string;
  user_on: boolean;
  created: Date;
}

export interface authInfo {
  user_login_info_id: number;
  facebook_id?: number;
  google_id?: number;
}

export interface authMethod {
  user_login_info_id: number;
  facebook_id: number | null;
  google_id: number | null;
  apple_id: number | null;
}
