import React from "react";
import StaggeredMenu from "../components/reactBits/StaggeredMenu/StaggeredMenu";
import { menuItems, socialItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="h-screen fixed right-0 z-50">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#ffffffcc"
        openMenuButtonColor="#ffffffcc"
        changeMenuColorOnOpen={true}
        colors={["#393632", "#cfa355"]}
        accentColor="#ffffff7f"
      />
    </nav>
  );
};

export default Navbar;
