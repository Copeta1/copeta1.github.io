import FastFoodImage from "../../public/FastFoodAmerican.png"
import AdVibeImage from "../../public/AdVibe.png"
import FridgeChefImage from "../../public/fridge-chef.png"
import CalculatorImage from "../../public/calculator.png"
import ChatAppImage from "../../public/ChatApp.png"
import RentlQImage from "../../public/RentlQImage.png"

export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
}

export const projects: Project[] = [
   {
    id: 6,
    title: "RentlQ",
    image: RentlQImage,
    description: "projects_rentlq_desc",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Recharts",
      "Shadcn/ui",
      "Papaparse",
    ],
    liveUrl: "https://rentl-q.vercel.app",
    githubUrl: "https://github.com/Copeta1/RentlQ",
  },
  {
    id: 5,
    title: "Chat-App",
    image: ChatAppImage,
    description: "projects_chat_app_desc",
    technologies: ["React", "JavaScript", "Tailwind CSS ", "Context API", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT",],
    liveUrl: "https://chat-app-eight-omega-51.vercel.app",
    githubUrl: "https://github.com/Copeta1/Chat_App",
  },
{
    id: 4,
    title: "FastFood American",
    image: FastFoodImage,
    description: "projects_fastfood_desc",
    technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Redux/Context"
    ],
    liveUrl: "https://fast-food-web-omega.vercel.app/",
    githubUrl: "https://github.com/Copeta1/Fast_Food_web",
},
  {
    id: 3,
    title: "AdVibe",
    image: AdVibeImage, 
    description: "projects_advibe_desc",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveUrl: "https://ad-vibe-tau.vercel.app/",
    githubUrl: "https://github.com/Copeta1/AdVibe",
},
  {
    id: 1,
    title: "Fridge Chef",
    image: FridgeChefImage,
    description: "projects_fridge_chef_desc",
    technologies: ["React", "JavaScript", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://fridge-chef-sable.vercel.app/",
    githubUrl: "https://github.com/Copeta1/Fridge_Chef",
  },
  {
    id: 2,
    title: "Calculator",
    image: CalculatorImage,
    description: "projects_calculator_desc",
    technologies: ["React", "JavaScript",],
    liveUrl: "https://calculator-delta-peach-54.vercel.app",
    githubUrl: "https://github.com/Copeta1/Calculator",
  },
]