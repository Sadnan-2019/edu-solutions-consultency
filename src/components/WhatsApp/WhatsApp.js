import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";
const WhatsApp = () => {
  return (
    <div>
      <div>
        <div>
          <a className="" target="_blank" href="https://wa.me/+8801333388585">
            <FaWhatsapp
              // onClick={gotoBtn}
              className="bg-green-500 float-right text-5xl top-btn   cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
