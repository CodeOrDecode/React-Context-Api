import React from "react";
import Footer from "./Footer";
import { AuthContext } from "../context/Authcontextprovider";

const Navbar = () => {
  let {theme,changeTheme} = React.useContext(AuthContext);
 

  return (
    <div>
      Navbar
      <div>
        <Footer />
      </div>
      {theme}

      <button onClick={changeTheme}>Change</button>
    </div>
  );
};

export default Navbar;
