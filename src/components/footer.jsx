import React from "react";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around items-start text-gray-400 mb-10">
      <div>
        <Image src={Logo} alt="logo" width={100} />
        <p className="my-5">
          B-389 Pitampura,{" "}
          <span className="block">Near by metro station gate no - 2</span>
          <span className="block">New Delhi, India</span>
        </p>
      </div>
      <div>
        <p className="my-3">About</p>
        <p className="my-3">Price Match</p>
        <p className="my-3">Measure Your PD</p>
        <p className="my-3">My Account</p>
        <p className="my-3">Frame Size Guide</p>
        <p className="my-3">FAQs</p>
        <p className="my-3">Contact</p>
        <p className="my-3">Blog</p>
      </div>
      <div>
        <p className="my-3">Shipping Policy</p>
        <p className="my-3">Refund Policy</p>
        <p className="my-3">Privacy Policy</p>
        <p className="my-3">Terms of Service</p>
      </div>
      <div>
        <h3 className="text-white my-3">SIGN UP AND SAVE</h3>
        <p className="my-3">
          Subscribe to get special offers, free giveaways,{" "}
          <span className="block"> and once-in-a-lifetime deals.</span>
        </p>
        <input
          className="bg-transparent text-white my-5"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <div className="flex justify-evenly text-gray-200">
          <AiOutlineInstagram size={"24px"} />
          <BsFacebook size={"24px"} />
          <AiFillYoutube size={"24px"} />
          <BsTwitter size={"24px"} />
          <BsPinterest size={"24px"} />
          <FaTiktok size={"24px"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
