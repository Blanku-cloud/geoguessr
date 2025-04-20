import { useContext } from "react";
import { AppContext } from "./UserContext";

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
