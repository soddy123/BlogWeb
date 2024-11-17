import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#FBBF24] border-t-2 border-t-black"> {/* Light Orange background */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 flex justify-center md:justify-start">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center justify-center md:justify-start">
                <Logo width="100px" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">Company</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">Support</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">Legals</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-[#007BFF]" // Hover effect (blue)
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
