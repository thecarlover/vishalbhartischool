

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b pb-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <img
              src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656"
              alt="Vishal Bharti Public School Logo"
              className="mb-4 w-full h-auto"
            />
            <p className="text-gray-800 text-sm font-semibold">
              Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India
            </p>
            <p className="text-gray-600 text-sm">9354937851/54</p>
            {/* <p className="text-gray-600 text-sm">vbpspv@gmail.com</p> */}
            <div className="flex space-x-4 mt-4">
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">ABOUT US</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-800">Introduction</a></li>
              <li><a href="#" className="hover:text-purple-800">Management</a></li>
              <li><a href="#" className="hover:text-purple-800">Faculty</a></li>
              <li><a href="#" className="hover:text-purple-800">Infrastructure</a></li>
              <li><a href="#" className="hover:text-purple-800">Awards</a></li>
              <li><a href="#" className="hover:text-purple-800">Mandatory Documents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">ACADEMICS</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-800">Curriculum</a></li>
              <li><a href="#" className="hover:text-purple-800">Pedagogy</a></li>
              <li><a href="#" className="hover:text-purple-800">Performing Arts</a></li>
              <li><a href="#" className="hover:text-purple-800">Sports</a></li>
              <li><a href="#" className="hover:text-purple-800">Library</a></li>
              <li><a href="#" className="hover:text-purple-800">Design & Tech</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">ADMISSIONS</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-800">Apply Now</a></li>
              <li><a href="#" className="hover:text-purple-800">Procedure</a></li>
              <li><a href="#" className="hover:text-purple-800">FAQs</a></li>
              <li><a href="#" className="hover:text-purple-800">E-Brochure</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vishal Bharti Senior Secondary School. All rights reserved.
          </p>
          <p>Designed with ❤️ by Ojasvi Mittal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
