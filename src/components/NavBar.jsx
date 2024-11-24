

const NavBar = () => {
  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center py-4">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-4">
          {/* <img
            src="logo.png" // Replace with your logo file path
            alt="School Logo"
            className="w-12 h-12"
          /> */}
          <div>
            <h1 className="text-xl font-bold">Vishal Bharti School</h1>
            <p className="text-sm text-gray-300">Morals • Excellence • Resilience • Power</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center text-lg">
          <a href="#about" className="hover:text-gray-300 transition">About Us</a>
          <a href="#academics" className="hover:text-gray-300 transition">Academics</a>
          <a href="#student-life" className="hover:text-gray-300 transition">Student Life</a>
          <a href="#community" className="hover:text-gray-300 transition">Community</a>
          <a href="#admissions" className="hover:text-gray-300 transition">Admissions</a>
          <a
            href="#apply"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
