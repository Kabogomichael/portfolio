import { Link } from "react-router-dom";
import { Projects } from "../data/Projects";
import { motion } from "framer-motion";
import type { Mode } from "./NavBar";
function Project({ darkMode }: Mode) {
  return (
    <div className="flex  flex-col  justify-center items-center h-screen ">
        <h2>My projects</h2>
    <div className="grid lg:grid-cols-4 grid-cols-1  md:grid-cols-2   ">
      {Projects.map((project) => (
        <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
          key={project.id}
          className={`${
            darkMode
              ? "bg-linear-to-br from-gray-500/10  via-slate-700/10 to-gray-500/20 border-2 border-gray-600/15  "
              : "text-gray-800 bg-gray-500/10  shadow-xl "
          }   w-80 m-4 rounded-lg overflow-hidden  hover:border-2 hover:border-blue-300/70  `}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-50 object-cover"
          />
          <div className="flex flex-col  gap-3 px-2 py-2">
            <h2 className="text-xl font-bold capitalize ">{project.name}</h2>
            <p
              className={`text-sm leading-relaxed  ${
                darkMode ? " text-gray-100/70" : "text-gray-800"
              } `}
            >
              {project.description}
            </p>
            <div className="flex gap-2 my-2">
              {project.technology.map((tech) => (
                <h2
                  key={tech.id}
                  className="bg-gray-500/40 py-1 px-3 rounded-lg text-sm"
                >
                  {tech.name}
                </h2>
              ))}
            </div>

            <div className="flex justify-between gap-4">
              {project.category.map((cate) => (
                <a
                  href={cate.link}
                  key={cate.id}
                  className={`flex justify-center items-center gap-2 w-1/2 py-1 rounded-md ${cate.color}`}
                >
                  <img
                    src={cate.logo}
                    alt={cate.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <h2>{cate.name}</h2>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
}

export default Project;
