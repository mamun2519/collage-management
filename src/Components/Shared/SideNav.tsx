import React from "react";
import { useState, useContext } from "react";
import { BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { ThemeContext } from "../../App";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../Authentication/useAdmin";
import auth from "../../firebase.init";
const SideNav = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);

  return (
    <nav
      className={`${
        theme == "light"
          ? " bg-[#166364]  text-white"
          : "bg-[#18191a] text-[#e4e6eb]"
      } `}
    >
      <div className="flex items-center font-medium  justify-between container mx-auto  p-5 lg:p-0">
        <div className="z-50 md:w-auto w-full flex justify-between">
          {/* <img src="" alt="BanglaDesh Railway School" className="md:cursor-pointer h-9" /> */}

          <span className="uppercase ">GOVT PUBLIC COLLAGE</span>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <GiHamburgerMenu
              name={`${open ? "close" : "menu"}`}
            ></GiHamburgerMenu>
          </div>
        </div>
        <ul className="md:flex hidden myNavber uppercase items-center gap-8">
          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#0b0825" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "active py-7 px-3 inline-block"
                  : isPending
                  ? "pending py-7 px-3 inline-block"
                  : "";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <NavLinks />
          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "text-[#0b0825]" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "active py-7 px-3 inline-block"
                  : isPending
                  ? "pending py-7 px-3 inline-block"
                  : "";
              }}
              to="/Notice"
            >
              Notices
            </NavLink>
          </li>

          {admin && (
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "text-[#0b0825]" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "active py-7 px-3 inline-block"
                    : isPending
                    ? "pending py-7 px-3 inline-block"
                    : "";
                }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden bg-white myNavber  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "blue" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "active py-7 px-3 inline-block"
                  : isPending
                  ? "pending py-7 px-3 inline-block"
                  : "";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <NavLinks />
          <li>
            <NavLink
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "blue" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "active py-7 px-3 inline-block"
                  : isPending
                  ? "pending py-7 px-3 inline-block"
                  : "";
              }}
              to="/Notice"
            >
              Notices
            </NavLink>
          </li>

          {admin && (
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "blue" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive
                    ? "active py-7 px-3 inline-block"
                    : isPending
                    ? "pending py-7 px-3 inline-block"
                    : "";
                }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
