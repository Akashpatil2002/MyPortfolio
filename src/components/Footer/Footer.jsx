import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${sectionId}" not found.`);
    }
  };

  return (
    <footer className="text-white py-10 px-6 sm:px-[10vw] md:px-[7vw] lg:px-[20vw] border-t border-[#800020] bg-black">
      <div className="max-w-screen-xl mx-auto text-center">

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-4">
          {[
            { id: "about", name: "Home" },
            { id: "home", name: "About" },
            { id: "skills", name: "Skills" },
            { id: "experience", name: "Experience" },
            { id: "work", name: "Projects" },
            { id: "education", name: "Education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#800020] text-sm sm:text-base transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-6 relative">
          {/* Phone Toggle */}
          <div className="relative z-50">
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="text-xl sm:text-2xl hover:text-[#800020] transition-transform hover:scale-110"
              aria-label="Phone"
            >
              <FaPhoneAlt />
            </button>
            {showPhone && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-[#800020] text-white text-xs sm:text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap z-50">
                +91 9579970763
              </div>
            )}
          </div>

          {/* Other Social Icons */}
          {[
            {
              icon: <FaLinkedin />,
              link: "https://in.linkedin.com/in/akash-sonawane-3b944022b",
              label: "LinkedIn",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/aakashpatil_20",
              label: "Instagram",
            },
            {
              icon: <FaYoutube />,
              link: "#",
              label: "YouTube",
            },
            {
              icon: <FaEnvelope />,
              link: "akashpatil9394@gmail.com",
              label: "Email",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/akashpatil2002",
              label: "GitHub",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-xl sm:text-2xl hover:text-[#800020] transition-transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
