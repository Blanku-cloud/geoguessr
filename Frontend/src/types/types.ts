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

export interface LoginInfoSucess {
  message: string;
  token: string;
}

export interface GenerateLocation {
  lat: number;
  lng: number;
}

export interface loginInfoFailure {
  code: number;
  message: string;
  error: boolean;
}

export interface User {
  username: string;
  user_on: boolean;
  created: Date;
  xp: number;
  currentLevel: number;
  coins: number;
}

export interface EmoteData {
  title: string;
  text: string;
  src: string;
  index: number;
  border: boolean;
  button?: React.ReactNode;
}

export interface FormOfSignIn {
  from: string;
  logo: React.ReactNode;
  color: string;
  textColor: string;
  border: boolean;
  handleClick?: () => void;
}

export interface PopupProps {
  // what the popup is going to say
  message: string;
  // logo on top of the popup
  logo: React.ReactNode;
  // close button
  closeButton?: React.ReactNode;
}

export interface SingleplayerProps {
  singleplayer: {
    name: string;
    des: string;
    src: string;
  }[];
}

export interface SingleplayerItemProps {
  name: string;
  des: string;
  src: string;
}

export interface MultiplayerProps {
  compe: SingleplayerItemProps[];
  fun: SingleplayerItemProps[];
}

export type PinState = {
  isPin: boolean;
  lat: number;
  lng: number;
  message: string;
};

export interface StreetViewProps {}

export interface GoogleMapProps {
  handlePinChange: (lat: number, lng: number) => void;
}

type Coordinate = {
  lng: number;
  lat: number;
};

export interface Campaign {
  gameMode: "s" | "m";
  coordinate: Coordinate;
}

export interface PlayButtonCampaign {
  imgSrc: string;
  text: string;
  type: "s" | "m";
}

export interface GetPoints {
  points: number;
  acutalLat: number;
  acutalLng: number;
  offDistance: number;
}

export interface StreetViewProps {
  handleGetPoints: () => void;
}

export interface FinishRoundOverlayProps {
  round: number;
  offBy: number;
  points: number;
  acutalLat: number;
  acutalLng: number;
  userLat: number;
  userLng: number;
  totalPoints: number;
  nextCampaign: () => void;
}

export interface GoogleMapFinalProps {
  acutalLat: number;
  acutalLng: number;
  userLat: number;
  userLng: number;
}
