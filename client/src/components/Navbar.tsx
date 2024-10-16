import Image from "next/image";
import React from "react";
import SearchInputBox from "./util/SearchBox";
import NavbarIcons from "./util/NavbarIcons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <SearchInputBox />

      {/* Icons and input */}
      <div><NavbarIcons/></div>
    </div>
  );
};

export default Navbar;
