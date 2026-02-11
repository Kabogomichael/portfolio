import { Skills } from "../data/Projects";
import type { Mode } from "./NavBar";
function Skill({ darkMode }: Mode) {
  return (
    <div className="flex justify-center items-center md:h-screen flex-col pb-4 md:pb-0  ">
        <h2 className="text-3xl font-bold mb-10 ">My skills</h2>
      <div
        className={`grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2  lg:gap-10 gap-4 `}
      >
        {Skills.map((skill) => (
          <div
            key={skill.id}
            className={`${
              darkMode
                ? "bg-linear-to-br from-gray-500/10  via-slate-700/10 to-gray-500/20 border-2 border-gray-600/15  "
                : "text-gray-800 bg-gray-500/10  shadow-xl "
            }   w-80 p-4  rounded-lg overflow-hidden  hover:border-2 hover:border-blue-300/70 space-y-3 `}
          >
            <div className="flex gap-4 items-center">
                <div className="bg-gray-300/40 w-20 h-20 flex justify-center items-center rounded">
                    <img src={skill.log} alt={skill.name} className="w-10 h-10 object-cover rounded  " />
                    </div>
                  
                  <h1 className="capitalize font-bold"> {skill.name}</h1>
            </div>
          
            <div>
              <div className="flex justify-between">
                <h2 className="">proficiency</h2>
                <p className={`font-bold ${skill.color}`}>
                  {skill.proficiency}
                </p>
              </div>

              <div className="bg-gray-400 w-full h-3 my-3 rounded-full ">
                <div className={`${skill.bgColor}  h-3   rounded-full`}></div>
              </div>

              <div className={ ` ${darkMode ? "bg-gray-500" :"bg-gray-800/30"} h-0.5 rounded-full `} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
