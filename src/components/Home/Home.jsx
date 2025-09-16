import React from "react";
import { FaDownload, FaGithub, FaAngleDown } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start px-6 sm:px-[5vw] md:px-[8vw] lg:px-[10vw] text-white bg-transparent pt-24"
    >
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">ABOUT</h2>
          <div className="w-20 sm:w-32 h-1 bg-[#8B0000] mx-auto mt-3"></div>
        </div>

        {/* Content Row */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-start">
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-normal mb-5">
              I'm a recent BE graduate in Computer Science and Engineering from North Maharashtra University, Jalgaon. I’ve completed a Java Full Stack Developer course at Kiran Academy (JavaByKiran), where I gained hands-on experience with Java, Spring Boot, JDBC, JSP, and MySQL. I'm passionate about full stack web development and software engineering, with a strong interest in building scalable, user-friendly applications. I actively solve coding problems on LeetCode, HackerRank, and CodeChef to strengthen my problem-solving skills. I enjoy working on real-world projects, exploring frontend development, and contributing to open-source.
            </p>

            <a
              href="https://drive.google.com/file/d/1h-yqmGu4YiuyWGT3mSHzy5TcftoE5BdX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#800020] text-sm text-white hover:bg-[#800020] hover:border-[#800020] rounded-full transition duration-500"
            >
              <FaDownload className="text-base" />
              View Resume
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#800020] mb-6">
              My Profiles
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <SiCodechef className="text-[#5B4638] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  CodeChef
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-[#4078c0] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://github.com/akashpatil2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SiLeetcode className="text-[#FFA116] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://leetcode.com/u/Akashpatil20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  LeetCode
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SiHackerrank className="text-[#2EC866] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://www.hackerrank.com/profile/Akashpatil20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  HackerRank
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-20 sm:mt-28 w-full flex justify-center">
          <a href="#experience" aria-label="Scroll to Experience">
            <FaAngleDown className="text-white text-2xl sm:text-3xl animate-bounce cursor-pointer hover:text-[#800020] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
