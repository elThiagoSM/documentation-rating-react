import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  const NavLinkStyles =
    "block py-2 px-2 rounded transition-all duration-300 text-left";
  const activeNavLinkStyles = "w-full bg-gray-300 text-gray-800";

  return (
    <nav className="w-full lg:w-64 bg-gray-100 text-gray-800 p-8 flex flex-col justify-center relative text-left">
      {/* Botón para cerrar el menú en móviles */}
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-gray-600 text-3xl lg:hidden"
      >
        <FaTimes />
      </button>

      {/* Menú centrado */}
      <h2 className="text-left text-2xl font-bold mb-6 px-2">Rating-React</h2>
      <ul className="w-full space-y-6 text-left">
        <li>
          <NavLink
            to="getting-started"
            className={({ isActive }) =>
              `${NavLinkStyles} ${isActive ? activeNavLinkStyles : "hover:bg-gray-200"}`
            }
          >
            Getting Started
          </NavLink>
        </li>
        <li>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
            Guides
          </h3>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="basic-usage"
                className={({ isActive }) =>
                  `${NavLinkStyles} ${isActive ? activeNavLinkStyles : "hover:bg-gray-200"}`
                }
              >
                Basic Usage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="props"
                className={({ isActive }) =>
                  `${NavLinkStyles} ${isActive ? activeNavLinkStyles : "hover:bg-gray-200"}`
                }
              >
                Props
              </NavLink>
            </li>
            <li>
              <NavLink
                to="examples"
                className={({ isActive }) =>
                  `${NavLinkStyles} ${isActive ? activeNavLinkStyles : "hover:bg-gray-200"}`
                }
              >
                Examples
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
