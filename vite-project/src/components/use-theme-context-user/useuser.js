import { useContext } from "react";
import { AuthContext } from ".";
export const useUserTheme = () => useContext(AuthContext);
