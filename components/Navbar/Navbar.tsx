/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <Link href={"#hem"}>// hem</Link>
      <Link href={"#projekt"}>// projekt</Link>
      <Link href={"#om-mig"}>// om mig</Link>
    </nav>
  );
};

export default Navbar;
