import { AuthContext } from ".";
import { useState } from "react";
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authUser = () => {
    setUser((current) => {
      if (current === null) {
        return "user";
      } else {
        return null;
      }
    });
  };
  return (
    <AuthContext.Provider value={{ user, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};
