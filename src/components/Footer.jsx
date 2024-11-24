const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-8">
          {/* School Info */}
          <div className="md:col-span-2 space-y-4">
            <img
              src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656"
              alt="Vishal Bharti Public School Logo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="text-gray-800 text-base font-semibold leading-relaxed">
              Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India
            </p>
            <p className="text-gray-600 text-sm">Contact: 9354937851/54</p>
            <div className="flex space-x-6 mt-4">
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.svg"
                  alt="YouTube"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "ABOUT US",
              links: [
                "Introduction",
                "Management",
                "Faculty",
                "Infrastructure",
                "Awards",
                "Mandatory Documents",
              ],
            },
            {
              title: "ACADEMICS",
              links: [
                "Curriculum",
                "Pedagogy",
                "Performing Arts",
                "Sports",
                "Library",
                "Design & Tech",
              ],
            },
            {
              title: "ADMISSIONS",
              links: ["Apply Now", "Procedure", "FAQs", "E-Brochure"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h4>
              <ul className="text-gray-600 space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-purple-700 hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vishal Bharti Senior Secondary School. All
            rights reserved.
          </p>
          <p>
            Designed with <span className="text-red-500">&hearts;</span> by{" "}
            <span className="font-semibold text-gray-800">Ojasvi Mittal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
