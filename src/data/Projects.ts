import { ExternalLink } from "lucide-react";
// import { Github } from "lucide-react";
import github from "../assets/github.png";
import movieapp from "../assets/movieapp.jpeg";
import edit from "../assets/edit.jpg"
import react from "../assets/reactjs.jpeg"
import javascript from "../assets/javascript.jpg"
import nextjs from "../assets/nextjs.png"
import devByt from "../assets/devbite.jpg"
import shop from "../assets/shop.webp"
import carhub from "../assets/carhub.png"
// projects data >>>>>

export const Projects = [
  {
    id: 1,
    image: movieapp,
    name: "Movie streaming app",
    description:
      "A fast, modern movie streaming app built with React and Next.js, featuring real-time movie data and a sleek user experience.",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    category: [
      { id: 1, name: "code", logo: github, link: "/", color: "bg-gray-500/60" },
      {
        id: 2,
        name: "demo",
        logo: edit,
        link: "https://movie-stream-2-lxnh-jwddm60ph-kabogomichaels-projects.vercel.app/",
        color: "bg-yellow-500/90",
      },
    ],
  },
  {
    id: 2,
    image: devByt,
    name: "devByt community",
    description:
      "We are a global tech Community Where Developers, Designers, and innovators come together to learn, collaborate, and grow.",
    technology: [
      { id: 1, name: "React-js" },
      { id: 2, name: "tailwind-css" },
      { id: 3, name: "RestAPI" },
    ],
    category: [
      { id: 1, name: "code", logo: github, link: "https://github.com/Kabogomichael/Community-Website-Frontend.git", color: "bg-gray-500/60" },
      {
        id: 2,
        name: "demo",
        logo: edit,
        link: "https://community-website-frontend-five.vercel.app/",
        color: "bg-yellow-500/90",
      },
    ],
  },
  {
    id: 3,
    image: shop,
    name: "next-shop",
    description:
      "we are changing the way people shop",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    category: [
      { id: 1, name: "code", logo: github, link: "https://github.com/Kabogomichael/next_shop.git", color: "bg-gray-500/60" },
      {
        id: 2,
        name: "demo",
        logo: edit,
        link: "https://next-shop-g6z5-ocm6pzw3f-kabogomichaels-projects.vercel.app/",
        color: "bg-yellow-500/90",
      },
    ],
  },
  {
    id: 4,
    image:carhub ,
    name: "cars_showcase",
    description:
      "Find,book or rent a car - quickly and easily",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    category: [
      { id: 1, name: "code", logo: github, link: "https://github.com/Kabogomichael/cars_showcase.git", color: "bg-gray-500/60" },
      {
        id: 2,
        name: "demo",
        logo: edit,
        link: "https://cars-showcase-lod2-fhfir9nqk-kabogomichaels-projects.vercel.app/",
        color: "bg-yellow-500/90",
      },
    ],
  },
];

export const Skills = [
  {
    id: 1,
    name: "React-js",
    log: react,
    bgColor: "bg-linear-to-r from-blue-800 to-blue-400 w-62 ",
    color: "text-blue-500",
    proficiency:"85%"
  },
  {
    id: 2,
    name: "javascript",
    log: javascript,
    bgColor: "bg-linear-to-r from-orange-800 to-yellow-400 w-68 ",
    color: "text-yellow-500",
    proficiency:"90%"
  },
  {
    id: 3,
    name: "Git hub",
    log: github,
    bgColor: "bg-linear-to-r from-blue-800 to-blue-400 w-55 ",
    color: "text-blue-500",
    proficiency:"76%"
  },
  {
    id: 4,
    name: "next-js",
    log: nextjs,
    bgColor: "bg-linear-to-r from-orange-800 to-yellow-400 w-68 ",
    color: "text-yellow-500",
    proficiency:"78%"
  },
  
 
];
