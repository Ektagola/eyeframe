import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import Avatar from "@/assets/avatar.png";

const navItem = [
  {
    id: 1,
    link: "#",
    name: "Home",
  },
  {
    id: 2,
    link: "#",
    name: "About",
  },
  {
    id: 3,
    link: "#",
    name: "Services",
  },
  {
    id: 4,
    link: "#",
    name: "Prices",
  },
  {
    id: 5,
    link: "#",
    name: "Contact",
  },
];
const Navbar = () => {
  //   const handleButtonClick = () => {
  //     // Handle button click event
  //     console.log("Profile button clicked!");
  //   };
  return (
    <div className="max-w-full max-h-16 backdrop-blur-lg px-10">
      <div className="flex justify-around items-center">
        <div>
          <Link href={"/"}>
            <Image src={Logo} width={"50px"} alt="logo" />
          </Link>
        </div>
        {navItem.map((items, key) => {
          return (
            <div>
              <Link key={items.id} className="link-button" href={items.link}>
                {items.name}
              </Link>
            </div>
          );
        })}
        <div className="flex items-center">
          <button class="signUp-button">Sign Up</button>
          <button className="profile-button">
            <div class="flex items-center">
              <Image
                class="w-12 h-12 rounded-full object-cover"
                src={Avatar}
                alt="Avatar"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
