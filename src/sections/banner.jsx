"use client";
import Image from "next/image";
import React, { useState } from "react";
import BannerImg from "../assets/1bg.png";
import BG from "@/assets/bg.png";
import "./banner.css";
import AnimateText from "@/components/animateText";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any server-side logic with the email value
    console.log("Email sent to:", email);
    setEmail("");
  };
  return (
    <div className="container max-w-full h-screen mx-0 font-serif">
      <div className="flex justify-evenly">
        <div className="max-w-5xl">
          <Image
            src={BannerImg}
            alt="Banner Image"
            width="500px"
            height={"500px"}
          />
        </div>
        <div className="my-20 max-w-2xl">
          <div className="flex">
            <h1 className="font-bold text-6xl">
              Fashion <span className="block text-8xl"> Eyewear</span>
            </h1>
            <Image src={BG} width={"200px"} className="z-0" alt="glasses" />
          </div>
          <p className="text-sm text-gray-400 my-5">
            Working with luxury fashion brands and trusted eyewear suppliers
            from across the world, we stock a wide range of glasses and styles,
            from timeless classics to the latest trends – so whatever you are
            looking for, we have it
          </p>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
          <h2 className="my-5 font text-4xl">
            Best Eye Frames for you.
            <AnimateText />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
