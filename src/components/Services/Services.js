import React from 'react';
import "./Services.css";
import eligibilitycheck from "../../assets/eligibility check.png"
const Services = () => {
    return (
        <div>
            <div class="card wallet">
    <div class="overlay"></div>
    <div class="circle">
<img className='' src={eligibilitycheck} alt=''/>

         

    </div>
    <p className='text-2xl text-black'>Eligibility Check</p>
</div>
        </div>
    );
};

export default Services;