import React, { useState } from "react";
import Logo from "./images/Logo.png";
import { FaFileAlt, FaUser, FaSignOutAlt, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeButton, setActiveButton] = useState("Sales Forms");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Left Sidebar - Fixed width on desktop, full width on mobile */}
      <div className="w-full md:w-64 lg:w-72 bg-[#0e172b] p-4 md:p-6 shadow-md flex-shrink-0">
        <div className="flex flex-col h-full">
          {/* Logo with responsive sizing */}
          <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="Autowiz Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Sidebar buttons with consistent sizing */}
          <div className="space-y-2">
            <button
              onClick={() => setActiveButton("Sales Forms")}
              className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
                activeButton === "Sales Forms"
                  ? "bg-[#90EE90] text-black"
                  : "text-gray-200 hover:bg-gray-700"
              }`}
            >
              <FaFileAlt className="mr-3 flex-shrink-0" size={18} />
              <span className="truncate">Sales Forms</span>
            </button>
            <Link to="/data">
              <button
                onClick={() => setActiveButton("My Data")}
                className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
                  activeButton === "My Data"
                    ? "bg-[#90EE90] text-black"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                <FaUser className="mr-3 flex-shrink-0" size={18} />
                <span className="truncate">My Data</span>
              </button>
            </Link>
            <Link to="/login" className="block w-full">
              <button
                onClick={() => setActiveButton("Logout")}
                className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
                  activeButton === "Logout"
                    ? "bg-[#90EE90] text-black"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
              >
                <FaSignOutAlt className="mr-3 flex-shrink-0" size={18} />
                <span className="truncate">Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content - Flexible width */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header with Profile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sales Data -</h1>
            <p className="text-gray-600">Please select Form Type to view your data</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700 bg-gray-100 rounded-full px-3 py-1">
              <span className="font-medium">CANADA</span>
              <span className="text-gray-400">|</span>
              <span className="font-medium">USA</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-200 rounded-full pl-3 pr-2 py-1">
              <FaUserCircle className="text-gray-600 text-xl" />
              <span className="font-medium">Carry John</span>
              <button className="text-gray-500 hover:text-gray-700">
                <FaChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Forms List */}
          <div className="space-y-4 md:space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">1. Autowiz Garage Service Agreement</h3>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  <Link to="/form1">Autowiz Service Agreement English</Link>
                </button> 
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Service Agreement French
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">2. Autowiz Garage Initial Trial Period Agreement</h3>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Service Agreement English
                </button>
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Service Agreement French
                </button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">3. Autowiz Parts Vendor Agreement</h3>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Parts Checklist
                </button>
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Parts Vendor Trial
                </button>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">4. Autowiz Checklist forms</h3>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Auto Parts checklist
                </button>
                <button className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2 px-4 rounded transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  Autowiz Garage Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;