import  { useState } from "react";
import { motion } from "framer-motion";
import {  Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
export interface Mode {
    darkMode: boolean;
    toggleDarkMode?: () => void;
  }


function NavBar({ darkMode, toggleDarkMode }: Mode) {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "about",
    },
    {
      text: "Skills",
      link: "skills",
    },
    {
      text: "Project",
      link: "projects",
    },
    {
      text: "Contact",
      link: "contact",
    },
  ];

  const lightColors = {
    navBg: "bg-linear-to-br from-yellow-500 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-300 to-amber-500",
  };
  const darkColor = {
    navBg: "bg-linear-to-br from-gray-800 to-gray-700",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };
  const color = darkMode ? darkColor : lightColors;
  const handleClick = (itemName: string) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };
  return (
    <div className="flex justify-center w-screen fixed z-50  md:mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${color.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-screen md:w-150 lg:w-full space-x-6 lg:space-x-8">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold ${color.textPrimary}`}>
              portfolio <span className="text-red-500">.</span>
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center space-x-6 ">
            {navLinks.map((item) => (
              <Link
                key={item.text}
                to={item.link}
                onClick={() => handleClick(item.text)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.text.toUpperCase()
                      ? color.textActive
                      : `${color.textSecondary} hover:text-orange-500`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.text}
                </motion.span>
                {activeSection === item.text.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 top-0 right-0 h-0.5 bg-linear-r rounded-full ${color.indicator} `}
                  ></motion.div>
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              } transition-colors `}
              aria-label={
                darkMode ? "switch to light mode " : "switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
            <motion.a
              href="contact"
          
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-medium  hover:shadow-[0_0_40px_#ffa500b3]
              rounded-full bg-linear-to-r ${color.button} text-white shadow-md hover:shadow-lg  capitalize   transition-shadow`}
            >
              hire me
             
            </motion.a>


            {/* mobile menu button */}
            <div className="flex lg:hidden items-center space-x-4 px-2 ">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg  ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {isMenuOpen ? (
                  <X
                    className={`w-5 h-5 ${
                      darkMode ? "text-white " : "text-gray-700"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 ${
                      darkMode ? "text-white " : "text-gray-700"
                    }  `}
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-lg rounded-xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="px-4  py-3 space-y-2">
              {navLinks.map((link) => (
                <Link to={link.link} key={link.text} className="block">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 rounded-lg text-center hover:text-yellow-300 ${
                      activeSection === link.text.toUpperCase()
                        ? darkMode
                          ? "bg-gray-800"
                          : "bg-orange-50"
                        : " "
                    } `}
                  >
                    <span
                      className={`font-medium ${
                        activeSection === link.text.toLowerCase()
                          ? color.textActive
                          : color.textSecondary
                      }`}
                    >
                      {link.text}
                    </span>
                  </motion.div>
                </Link>
              ))}
              <motion.a
                href="contact"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className={`block py-3 px-4 text-center 
                capitalize font-semibold rounded-lg bg-linear-to-r hover:shadow-[0_0_40px_#ffa500b3]
                ${color.button}  text-white shadow-md`}
              >
                {" "}
                hire me
                
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>

     
    </div>
  );
}

export default NavBar;
