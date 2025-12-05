import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PhoneMockup1 } from "./PhoneMockup1";
import { PhoneMockup2 } from "./PhoneMockup2";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home"); 
  const navItems = [
    "Home",
    "Network",
    "Product",
    "Technology",
    "Our Story",
    "Knowledge Center",
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 z-0">
        <div className="sm:hidden w-full h-full bg-white"></div>
        <div className="hidden sm:flex h-full">
          <div className="w-1/2 bg-white"></div>
          <div className="flex-1 bg-[#7E5CC1]"></div>
        </div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-16 bg-white/95 backdrop-blur-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logo} alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium text-sm lg:text-base">
          {navItems.map((item) => (
            <motion.div
              key={item}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveNav(item)}
              whileHover={{ scale: 1.1 }}
            >
              <span
                className={`${
                  activeNav === item ? "text-[#7b4fd4]" : "text-gray-700"
                } transition-colors`}
              >
                {item}
              </span>
              {activeNav === item && (
                <span className="w-2 h-2 bg-[#4d2c8f] rounded-full mt-1"></span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <motion.button
            className="px-4 py-2 border border-white bg-[#7E5CC1] text-white rounded-lg text-sm lg:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-[#7E5CC1] text-white font-semibold rounded-lg text-sm lg:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Log In
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-white z-30 flex flex-col items-center space-y-4 py-6 md:hidden text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveNav(item)}
              whileHover={{ scale: 1.05 }}
            >
              <span
                className={`${
                  activeNav === item ? "text-[#4a288f]" : "text-gray-800"
                } text-lg font-medium transition-colors`}
              >
                {item}
              </span>
            </motion.div>
          ))}
          <div className="flex flex-col space-y-3 mt-2">
            <motion.button
              className="px-6 py-2 bg-[#7E5CC1] border border-gray-400 rounded-lg font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-[#7E5CC1] rounded-lg font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Log In
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* HERO CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-16 mt-28 sm:mt-32 lg:mt-36 items-center text-center lg:text-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT TEXT */}
        <motion.div variants={fadeInUp} className="max-w-full sm:max-w-xl text-gray-800 sm:text-gray-800">
          <p className="text-red-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            — Welcome to the
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unprecedented <br />
            Era of <span className="text-[#9D2450]">Real Estate</span> <br />
            Investing
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 lg:text-gray-600">
            Lilypads uses sophisticated technologies for data-driven decisions
            in investing, managing and funding commercial real estate assets.
          </p>
          <motion.button
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[#7E5CC1] text-white text-sm sm:text-lg rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Investing Now
          </motion.button>

          {/* Stats */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start text-gray-800"
            variants={staggerContainer}
          >
            {[
              { num: "658+", label: "Properties Registered" },
              { num: "685+", label: "Deals Cracked" },
              { num: "255+", label: "Investors" },
            ].map((stat) => (
              <motion.div key={stat.num} variants={fadeInUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#7E5CC1]">
                  {stat.num}
                </h2>
                <p className="text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT PHONE MOCKUPS */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 sm:gap-6 mt-6 sm:mt-10 relative"
          variants={staggerContainer}
        >
          <motion.div
            className="flex justify-center sm:absolute sm:-left-16 lg:static lg:translate-x-0"
            variants={fadeInUp}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PhoneMockup1 className="w-36 sm:w-44 md:w-52" />
          </motion.div>

          <motion.div
            className="flex justify-center relative z-10 mt-4 sm:mt-0"
            variants={fadeInUp}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PhoneMockup2 className="w-36 sm:w-44 md:w-52" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
