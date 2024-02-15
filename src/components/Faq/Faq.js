import React from "react";

const Faq = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24] text-gray-100   min-h-screen">
        {/* <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How can I place an order?</summary>
        <div class="px-4 pb-4">
          <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
        <div class="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How long does shipping take?</summary>
        <div class="px-4 pb-4">
          <p>Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Can I return a product if I'm not satisfied?</summary>
        <div class="px-4 pb-4">
          <p>Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at <a href="" class="underline">example@gmail.com</a> for assistance.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Do you offer international shipping?</summary>
        <div class="px-4 pb-4">
          <p>Currently, we only provide shipping services within India. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
        <div class="px-4 pb-4">
          <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" class="underline">example@gmail.com</a>.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
        <div class="px-4 pb-4">
          <p>You can find our detailed terms and conditions by visiting our 
            <a href="" class="underline">Terms of Service</a> 
            page on our website. It includes information about our policies, user guidelines, and more.</p>
        </div>
      </details>
    </div>
  </div> */}
        <h2
          className="text-3xl text-center text-white  font-bold poppins-b sm:text-4xl py-5"
        
        >
          Frequently Asked Questions
        </h2>
        <div className="text-black grid grid-cols-1 lg:grid-cols-1 gap-6 items-center justify-items-center py-8 mx-5">
          <div className=" ">
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                I would like to get all services at home. How is it possible?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <li>Contact us and talk to our expert</li>
                <li>Select service after baseline evaluation</li>
                <li>Paying for the service</li>
                <p className="mt-5">
                  Our expert will suggest what is best for your specific needs:
                  Recovery Program at home or Center based care.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                I am not sure which program fits my needs. What should I do?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5">
                  Talk to our expert on 01619848555 or visit your nearest HCAH
                  Care Center
                </p>
                <p className="mt-5">
                  They will understand your requirement and suggest the best
                  course of action
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                Are all your professionals medically trained?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5 text-justify">
                  We have certified,registered, and experienced professionals
                  including doctors,nurses,physiotherapists,caregiver,medical
                  assistant,medical caregiver.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box mb-5 "
            >
              <div className="collapse-title text-[18px] lg:text-[20px] font-medium  ">
                What is the difference between recovery at the HCAH care center
                and at the hospital?
              </div>
              <div className="collapse-content text-[15px] lg:text-[18px]">
                <p className="mt-5 text-justify">
                  The objective of treatment at the hospital is to save your
                  life. You are discharged from the hospital once you are
                  medically stable..
                </p>
                <p className="mt-5 text-justify">
                  The objective of the HCAH care center is to rebuild the
                  physical, functional, and cognitive abilities you've lost
                  because of the disease and its the treatment so that you can
                  return to normal life again.
                </p>
                <p className="mt-5 text-justify">
                  When you are discharged from the HCAH care center, you are not
                  just medically stable, you are physically, mentally, and
                  emotionally healthy.
                </p>
              </div>
            </div>
          </div>
          {/* <div>
          <img
            className="rounded"
            src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/04/07/burn_hospital_salahuddin_ahmed_2.jpg?itok=-XDbK1lX&timestamp=1586250124"
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Faq;
