import React from "react";
import "./sales.css";
import Image from "next/image";
import Img2 from "@/assets/2.jpg";
import Img3 from "@/assets/3.jpg";
import Img4 from "@/assets/4.jpg";
import Img5 from "@/assets/5.jpg";
import Img6 from "@/assets/6.jpg";
import Img7 from "@/assets/1.jpg";
import Img8 from "@/assets/7.jpg";
import Img9 from "@/assets/10.jpg";
import Link from "next/link";

const data = [
  {
    image: Img2,
    price: "9000",
    color: "5",
    brand: "Gucci",
    link: "#",
  },
  {
    image: Img3,
    price: "7000",
    color: "3",
    brand: "Ray.Ban",
    link: "product/13",
  },
  {
    image: Img4,
    price: "8000",
    color: "4",
    brand: "Gucci",
    link: "product/14",
  },
  {
    image: Img5,
    price: "3000",
    color: "3",
    brand: "Prada",
    link: "product/15",
  },
  {
    image: Img9,
    price: "4000",
    color: "5",
    brand: "Gucci",
    link: "product/16",
  },
  {
    image: Img7,
    price: "10000",
    color: "10",
    brand: "Tom Ford",
    link: "product/17",
  },
  {
    image: Img8,
    price: "4200",
    color: "6",
    brand: "Ray.Ban",
    link: "product/18",
  },
  {
    image: Img6,
    price: "5400",
    color: "4",
    brand: "Prada",
    link: "product/19",
  },
];

const Sales = () => {
  return (
    <div className="max-w-full mb-20 text-center">
      <p className="text-3xl mb-5 font-serif">Best Sales</p>
      <p className="text-gray-300 text-xl mb-5">
        Shop the latest designer glasses in a range of styles, shapes and
        colourways at Eye Frame.
      </p>
      <div className="flex justify-center flex-wrap">
        {data.map((img) => {
          return (
            <Link href={img.link}>
              <div className="mx-5 mb-5 text-gray-300">
                <div className="img">
                  <Image
                    className="rounded-lg shadow-lg"
                    src={img.image}
                    width={250}
                    alt="glasses"
                  />
                </div>
                <span>{img.brand}</span>
                <p>Price: Rs. {img.price}</p>
                <span>Colors: {img.color}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="delivery py-2">
        <h2 className="text-start px-36 inline">
          NEXT DAY DELIVERY AVAILABLE*
        </h2>
        <h2 className="text-end px-36 inline">GET YOUR PRESCRIPTION LENSES!</h2>
      </div>
    </div>
  );
};

export default Sales;
