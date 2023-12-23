import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot" ||
    pathname === "/resetPassword/:resetToken" ||
    pathname === "/loginWithCode/:email"
  )
    return null;

  return (
    <>
      <hr className="--color-dark" />
      <div className="--flex-center --py2 --bg-grey">
        <p>All Rights Reserved. &copy; 2023</p>
      </div>
    </>
  );
};

export default Footer;
