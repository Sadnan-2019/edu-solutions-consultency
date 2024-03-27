import React from "react";

const Contact = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <div class="bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f] relative  ">
        <section class=" ">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-extrabold text-gray-100">
                Visit Our Location
              </h2>
            </div>
            <div class="mt-16 lg:mt-20">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                    width="100%"
                    height="480"
                  ></iframe>
                </div>
                <div>
                  <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div class="px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-100">
                        Our Address
                      </h3>
                      <p class="mt-1 text-gray-100">
                        House 11, Road 108, Gulshan 2, Dhaka, Bangladesh
                      </p>
                    </div>
                    <div class="border-t border-gray-200 px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-100">Hours</h3>
                      <p class="mt-1 text-gray-100">
                        Saturday: 09:00am - 06:00pm
                      </p>
                      <p class="mt-1 text-gray-100">
                        Sunday: 09:00am - 06:00pm
                      </p>
                      <p class="mt-1 text-gray-100">
                        Monday: 09:00am - 06:00pm
                      </p>
                      <p class="mt-1 text-gray-100">
                        Tuesday: 09:00am - 06:00pm
                      </p>
                      <p class="mt-1 text-gray-100">
                        Wednesday: 09:00am - 06:00pm
                      </p>
                      <p class="mt-1 text-gray-100">
                        Thursday: 09:00am - 06:00pm
                      </p>
                    </div>
                    <div class="border-t border-gray-200 px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-100">Contact</h3>
                      <p class="mt-1 text-gray-100">
                        Email: info@es.mrg.bd.com
                      </p>
                      <p class="mt-1 text-gray-100">Phone: +880 1333-388585</p>
                      <p class="mt-1 text-gray-100">Phone: +880 1333-388686</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
