import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import GettingStarted from "./GettingStarted";
import BasicUsage from "./BasicUsage";
import Props from "./Props";
import Examples from "./Examples";
import { FaGithub, FaBars } from "react-icons/fa";

const Documentation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100">
      <header className="w-full m-auto bg-gray-900 text-gray-100 py-4 px-6 lg:px-24 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Rating React
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-100 text-3xl"
          >
            <FaBars />
          </button>
        </div>

        <a
          href="https://github.com/elThiagoSM/rating-react"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block text-gray-100 text-3xl"
        >
          <FaGithub />
        </a>
      </header>

      <div className="flex bg-gray-100">
        <div
          className={`lg:block ${isSidebarOpen ? "block" : "hidden"} 
                      lg:relative fixed top-0 left-0 z-50 w-full lg:w-auto h-full bg-gray-100 lg:bg-transparent lg:px-16`}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        <div className="px-6 lg:px-16 flex-1">
          <Routes>
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="basic-usage" element={<BasicUsage />} />
            <Route path="props" element={<Props />} />
            <Route path="examples" element={<Examples />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
