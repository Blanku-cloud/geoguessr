import { useState, createContext } from "react";
import { User, Campaign } from "../types/types";

export interface AppContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  campaignData: Campaign | null;
  setCampaignData: React.Dispatch<React.SetStateAction<Campaign | null>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [campaignData, setCampaignData] = useState<Campaign | null>(null);
  return (
    <AppContext.Provider
      value={{ user, setUser, campaignData, setCampaignData }}
    >
      {children}
    </AppContext.Provider>
  );
};
