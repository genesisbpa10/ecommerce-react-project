import React,{ createContext, useContext} from "react";

export const authContext = createContext();
export const useAuth= () => {
    const contextForAuth= useContext(authContext)
    return contextForAuth;
}

export default function AuthProvider({ children }) {
  const user = {
    login: true,
  };
  return <authContext.Provider value={{ user }}>{children}</authContext.Provider>;
}
