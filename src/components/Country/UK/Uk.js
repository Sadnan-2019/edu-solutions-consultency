import React, { useState } from "react";
import Services from "../../Services/Services";
import "./Uk.css";
import Why from "../../Country/UK/Why";
import UkDetails from "./UkDetails";

const Uk = () => {
 
  return (
    <div>
      <div class="uk py-20">
        <div class="container mx-auto">
          <div class="flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="mb-12 font-serif text-5xl font-bold">
                Explore UK education opportunities from Bangladesh
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Why></Why>
    <UkDetails></UkDetails>
      
    </div>
  );
};

export default Uk;
