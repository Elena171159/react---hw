import { AuthContext } from ".";
import { useState } from "react";
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const authUser = () => {
    if (user === "") {
      setUser("lena");
    } else {
      setUser("");
    }
  };
  return (
    <AuthContext.Provider value={{ user, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};
