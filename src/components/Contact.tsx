import type { Mode } from "./NavBar";
import contact from "../assets/contact.jpg"

function Contact({ darkMode }: Mode) {
  return (
    <div
      id="contact"
     className="lg:relative"
    >
           
        <div >
            <img src={contact} alt="contact image "  className="object-cover hidden lg:block"/>
        </div>
      <div className={`lg:absolute z-10  top-32   p-4 rounded-2xl  flex flex-col lg:flex-row items-center mt-6 `} >
        
        <div className="w-150  h-40   flex flex-col justify-center lg:text-gray-200  ">
          <h1 className="capitalized text-center text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-2">
            Get in <span className="text-orange-500">touch</span>
          </h1>
          <p className="capitalized text-center text-sm lg:text-lg animate-pulse">
            let discuss your project
          </p>
        </div>

        <form
          className={`flex flex-col    justify-center gap-4 lg:gap-8  ${
            darkMode ? "lg:bg-gray-900/70 bg-gray-800/20" : "ring-1 ring-gray-200/70 lg:bg-white/20"
          }  px-4 md:px-10 rounded-2xl   w-screen md:w-170 lg:h-auto md:h-100  py-10   shadow-md`}
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              required
              style={{
                backgroundColor: darkMode ? "#374152" : "#fae7d8",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:text-sm text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              style={{
                backgroundColor: darkMode ? "#374152" : "#fae7d8",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:text-sm text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address "
            required
            style={{
              backgroundColor: darkMode ? "#374152" : "#fae7d8",
              borderColor: darkMode ? "#4b5563" : "#d1d5db",
              color: darkMode ? "white" : "#1f2937",
            }}
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:text-sm text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
          <input
            type="rel"
            placeholder="phone number"
            required
            style={{
              backgroundColor: darkMode ? "#374152" : "#fae7d8",
              borderColor: darkMode ? "#4b5563" : "#d1d5db",
              color: darkMode ? "white" : "#1f2937",
            }}
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:text-sm text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
          <textarea style={{
              backgroundColor: darkMode ? "#374152" : "#fae7d8",
              borderColor: darkMode ? "#4b5563" : "#d1d5db",
              color: darkMode ? "white" : "#1f2937",
            }} className="lg:w-120 w-full h-30  px-3 md:px-4 py-2 md:py-3 rounded-lg md:text-sm text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            placeholder="Write Message"  required></textarea>
          <button
            type="submit"
            className={`bg-linear-to-r  text-white font-bold  from-orange-500 to-yellow-500 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-lg w-full px-2 md:px-3 py-2 cursor-pointer md:py-2  capitalize `}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
