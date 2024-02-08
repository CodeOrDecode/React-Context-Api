import React from "react";
import { useState } from "react"; 
export const AuthContext = React.createContext();

export function Authcontextprovider({children}) {

const [theme, setTheme] = useState("light");
function changeTheme(){
  setTheme(theme === "light"?"dark":"light");
}

const context ={
  theme,
  changeTheme
}
  return (
    <AuthContext.Provider value={context}>
    {children}
    </AuthContext.Provider>
  );
}