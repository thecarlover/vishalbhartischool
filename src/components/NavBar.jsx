import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Animation Variants
  const navItemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center py-4">
        {/* Logo and Tagline */}
        <motion.div
          className="flex items-center space-x-4"
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          custom="left"
        >
          <div>
            <h1 className="text-xl font-bold">Vishal Bharti School</h1>
            <p className="text-sm text-gray-300">
              Morals • Excellence • Resilience • Power
            </p>
          </div>
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <motion.div
          className="md:hidden"
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          custom="right"
        >
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden md:flex space-x-8 items-center text-lg"
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          custom="right"
        >
          {["About Us", "Academics", "Student Life", "Community", "Admissions"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-300 transition"
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                custom="left"
              >
                {item}
              </motion.a>
            )
          )}
          <a
            href="#apply"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition"
          >
            Apply Now
          </a>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-black text-white ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={navItemVariants}
        custom="right"
      >
        <div className="px-6 py-4 space-y-4 text-center">
          {["About Us", "Academics", "Student Life", "Community", "Admissions"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block hover:text-gray-300 transition"
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                custom={index % 2 === 0 ? "left" : "right"} // Alternate animation direction
              >
                {item}
              </motion.a>
            )
          )}
          <motion.a
            href="#apply"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition block"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            custom="right"
          >
            Apply Now
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
