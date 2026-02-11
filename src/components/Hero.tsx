import type { Mode } from "./NavBar";
import { Download, Mail } from "lucide-react";
import github from "../assets/github.png";
import instagran from "../assets/Instagram.png";
import youtube from "../assets/YouTube_full-color_icon_(2017).svg.png";
import tiktok from "../assets/tiktok.jpg";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";

interface Theme {
  textPrimary: string;
  textSecondary: string;
  buttonSecondary: string;
  decorativeCircle: string;
}
const Hero = ({ darkMode}: Mode) => {
  const darkTheme: Theme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600 ",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const socialIcon: {
    id: number;
    icon: string;
    name: string;
    link: string;
  }[] = [
    { id: 1, name: "Instagram", icon: instagran, link: "/" },
    {
      id: 2,
      name: "titok",
      icon: tiktok,
      link: "/",
    },
    { id: 3, name: "Github", icon: github, link: "/" },
    {
      id: 4,
      name: "Youtube",
      icon: youtube,
      link: "/",
    },
  ];

  const lightTheme: Theme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800  border-2 border-orange-500 hover:bg-orange-500 hover:text-white ",
    decorativeCircle: "bg-orange-400 opacity-20",
  };
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <div id="hero" className="relative  min-h-screen flex flex-col  ">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delete="250"
        className="body-font z-10"
      >
        <div className="w-70 h-50 hidden md:block absolute z-20 top-0  bg-linear-to-r from-yellow-900/5 to-amber-100 opacity-0 blur-3xl rounded-full  animate-pulse " />
        <div className="container mx-auto  flex px-4 sm:px-8 lg:px-14 py-12 lg:py-12 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">
          <div className="lg:w-1/2 w-full  flex flex-col  items-center  lg:items-start text-center lg:text-left  mb-12 lg:mb-0">
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 sm:mb-7 w-full ">
              {socialIcon.map((icon) => (
                <a
                  href={icon.link}
                  key={icon.id}
                  target="_blank"
                  data-aos-delay={`${400 + icon.id * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300  "
                >
                  <img
                    src={icon.icon}
                    alt={icon.name}
                    className={`w-10 h-10 rounded-xl object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>
            <h1
              className={`title-font text-3xl  md:text-4xl lg:text-5xl my-4  font-bold capitalize ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              hi i'm michael
            </h1>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed md:max-w-md max-w-lg ${theme.textSecondary} `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              A frontend developer with 3 years of experience building
              responsive web applications. I specialize in React, Next.js,
              TypeScript, and Tailwind CSS. I love turning designs into
              seamless, high-performance web experiences. Explore my projects
              below and let’s create something amazing together!
            </p>
            {/* buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col md:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href="/" download className="w-full sm:w-auto  ">
                  <button
                    className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500  hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
 border-0 py-3 px-6 sm:px-8  rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform"
                  >
                    <Download className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download cv
                  </button>
                </a>
                <a href="contact" className="w-full sm:w-auto ">
                  <button
                    className={`w-full cursor-pointer sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center  border-0 py-3 px-6  sm:px-8 
                      hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg   font-semibold transition-all duration-300 transform `}
                  >
                    <Mail className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Contact me
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="" data-aos="fade-left " data-aos-delay="400">
            <div className="relative">
              <div className="relative overflow-hidden mt-8 ">
                <img
                  src={hero}
                  alt="hero image"
                  className=" w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 lg:w-2xl "
                />
              </div>
              <img
                src={hi}
                alt="hi"
                className="absolute md:top-70   lg:top-60 top-30 md:left-52 lg:left-50 left-25 w-14 h-14 sm:w-20 sm:h-20 animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
