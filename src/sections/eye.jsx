import React from "react";
import "./eye.css";

const Eye = () => {
  return (
    <div className="container eye px-8 place-items-center">
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold my-4">VIRTUAL TRY-ON</h3>
        <p className="text-black block">
          We have a huge range of products which are available to virtually try
          on from the comfort of your own home. Simply select one of the amazing
          products found in these Virtual Try On collections, click the virtual
          try on button and enable your camera. Finding the perfect frame has
          never been so easy!
        </p>
        <button class="glasses">Glasses</button>
      </div>
    </div>
  );
};

export default Eye;
