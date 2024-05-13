import React from "react";
import university from "../../assets/university.png";
import linked from "../../assets/linkedin.png";
import call from "../../assets/telephone.png";
import email from "../../assets/email.png";
import sub from "../../assets/sub.png";
import schs from "../../assets/schs.png";
import video from "../../assets/video-call.png";

const TopNav = () => {
  return (
    // <div>
    //   <div className="bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f] text-white ">
    //     <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12    items-center ">
    //       <div className="grid grid-cols-1 justify-center  p-1  items-center gap-2  ">
    //         <div className="flex items-center font-bold   gap-2   ">
    //           <a
    //             href="https://www.facebook.com/EDUSLTD/"
    //             rel="noreferrer"
    //             target="_blank"
    //             class="text-white transition hover:opacity-75"
    //           >
    //             <span class="sr-only text-white">Facebook</span>

    //             <svg
    //               class="h-6 w-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //           </a>

    //           <a
    //             href="/"
    //             rel="noreferrer"
    //             target="_blank"
    //             class="text-white transition hover:opacity-75"
    //           >
    //             <span class="sr-only">Instagram</span>

    //             <svg
    //               class="h-6 w-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //           </a>
    //           <a
    //             href="/"
    //             rel="noreferrer"
    //             target="_blank"
    //             class="text-white transition hover:opacity-75"
    //           >
    //             <span class="sr-only">Twitter</span>

    //             <svg
    //               class="h-6 w-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //               aria-hidden="true"
    //             >
    //               <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-3 justify-items-center items-center gap-12  ">
    //         <div className="flex items-center font-bold    gap-2">
    //           <div>
    //             <img className="w-7 rounded-full" src={call} alt="" />
    //           </div>
    //           <div>
    //             <p className="text-[10px] lg:text-xs   	">
    //               <a href="tel:+01333-388686 " className="  	">
    //                 +880 1333-388686
    //               </a>
    //             </p>
    //             <p className="text-[10px] lg:text-xs   	">
    //               <a href="tel:+01333-388585 " className="  	">
    //                 +880 1333-388585
    //               </a>
    //             </p>
    //            </div>
    //         </div>
    //         <div
    //           className="flex items-center font-bold    gap-2"
    //          >
    //           <div>
    //             <img src={email} className="w-7 rounded-full" alt="" />
    //           </div>
    //           <div>

    //             <a
    //               href="mailto:info@es.mrg.bd.com"
    //               className="text-[10px] lg:text-xs  	"
    //             >
    //               info@es.mrg.com.bd
    //             </a>
    //           </div>
    //         </div>
    //         <div
    //           className="   lg:flex items-center font-bold    gap-2"
    //           style={{ color: "white" }}
    //         >
    //           <div>
    //             <p className="text-[5px] sm:m-4 lg:text-xs text-transparent  bg-clip-text bg-gradient-to-l from-[#FECD04] to-[#F2A04A]  	">
    //               Link Organization
    //             </p>
    //           </div>
    //           <div>
    //             <a href="https://www.sub.ac.bd/" target="_blank">
    //               <img src={sub} className="  w-40 lg:w-28  	" alt="" />
    //             </a>
    //             <a href="https://schs.edu.bd/" target="_blank">
    //               <img src={schs} className="   w-40 lg:w-28  	" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" ">
      <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12  bg-[#123261] items-center ">
        <div className="flex justify-items-center items-center  gap-2">
          {/* <img  src={logo} className="w-20" alt="" /> */}
          <a
            href="https://www.facebook.com/edusolutionshomeandabroad/"
            target="_blank"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/edu-solutions-ltd/"
            target="_blank"
          >
            <svg
             
              class="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
            </svg>
          </a>



          <a
            href="https://www.facebook.com/edusolutionshomeandabroad/"
            target="_blank"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center gap-12  ">
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <img src={call} alt="" className="w-5      " />
            </div>
            <div className=" ">
              <a href="tel:+01333-388585 " className=" text-[10px] lg:text-xs 	">
                <p> +880 1333-388585 </p>
              </a>
              <a href="tel:+01333-388686 " className=" text-[10px] lg:text-xs 	">
                <p>+880 1333-388686</p>
              </a>
            </div>
          </div>
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <img src={email} alt="" className="w-5   " />
            </div>
            <div>
              <a
                href="mailto:info@es.mrg.bd.com"
                className="text-[10px] lg:text-xs  	"
              >
                info@es.mrg.com.bd
              </a>
            </div>
          </div>
          <div
            className="   lg:flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <p className="text-[5px] sm:m-4 lg:text-xs text-transparent  bg-clip-text bg-gradient-to-l from-[#FECD04] to-[#F2A04A]  	">
                Link Organization
              </p>
            </div>
            <div>
              <a href="https://www.sub.ac.bd/" target="_blank">
                <img src={sub} className="  w-40 lg:w-28  	" alt="" />
              </a>
              <a href="https://schs.edu.bd/" target="_blank">
                <img src={schs} className="   w-40 lg:w-28  	" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
