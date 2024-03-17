import React from "react";

const InstitutionalCanada = () => {
  return (
    <div className="p-4">
      <div class="grid sm:grid-cols-1 lg:grid-cols-1 border border-gray-200   divide-gray-200 rounded-xl mx-5 ">
        <details class="p-6 group">
          <summary class="flex items-center justify-center cursor-pointer">
            <h5 class="text-xl font-bold text-white">
              Documents Required for University Application
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700"></p>

          <ul class="mt-2 list-disc px-2 pl-6">
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">
                  Letter of Acceptance (LOA): From a Canadian educational
                  institution.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Scholarship/Grant Details: Including institution/organization
                  name, amount, and duration.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Educational Documents: All certificates and marks sheets.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Proof of Funds: Covering tuition and living expenses for the
                  first year.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  English Skills Proof: Demonstrate your proficiency.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Study Plan: A comprehensive plan outlining your educational
                  objectives.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Proof of Employment: If applicable.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  CAQ (Quebec Applicants): Certificat d'acceptation du Québec
                  for Quebec-bound students.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Police Clearance, Birth, and Marriage Certificates: As per
                  your personal situation.
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Additional Documents: Tailored to your unique circumstances.
                </span>{" "}
              </a>
            </li>
          </ul>
          <p className="text-white font-bold text-lg text-center py-4">
            For a detailed visa application checklist and expert guidance,
            connect with our counselors. Edu Solutions Ltd. is your dedicated
            partner, simplifying the Canadian visa process for a brighter
            academic future.
          </p>
        </details>
      </div>
    </div>
  );
};

export default InstitutionalCanada;
