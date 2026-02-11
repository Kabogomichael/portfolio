import type { Mode } from "./NavBar";
function About({ darkMode }: Mode) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-yellow-500 text-2xl font-bold">
        About me
      </h1>
      <div className="flex justify-center">
        <p
          className={`leading-relaxed mx-4 md:mx-0 md:max-w-2xl text-center  max-w-lg md:mb-6 mb-8 flex   ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ornare, nunc in vehicula ultrices, magna lacus viverra diam, sit amet
          sodales mauris justo at elit. Cras quis massa euismod, malesuada sem
          ut, vestibulum sem. Nunc ut cursus turpis, ac iaculis mi. Phasellus
          aliquam venenatis lorem sed commodo.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className=" flex  justify-center gap-4 md:gap-20 my-4">
          <div className="text-center">
            <h1 className="text-yellow-500 font-bold text-2xl">5+ </h1>
            <p className={`text-sm md:text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Eduction
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-yellow-500 font-bold text-2xl">10+ </h1>
            <p
              className={`text-sm md:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600 "
              } `}
            >
              years experience
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-yellow-500 font-bold text-2xl">50+ </h1>
            <p className={`text-sm md:text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Projects completed
            </p>
          </div>
          
        </div>
        <button className={`w-80 cursor-pointer inline-flex items-center border-2 border-amber-500 justify-center   py-2 px-4 sm:px-8   hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full md:text-base text-lg   font-semibold transition-all duration-300 transform ${darkMode? 'text-gray-300 bg-orange-500/10 ' :'text-gray-600 bg-white/90'} `} >
        learn more
      </button>
      </div>
       
    </div>
  );
}

export default About;
