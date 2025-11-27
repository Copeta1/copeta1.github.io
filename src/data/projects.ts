import FastFoodImage from "../../public/FastFoodAmerican.png"
import AdVibeImage from "../../public/AdVibe.png"
import FridgeChefImage from "../../public/fridge-chef.png"
import CalculatorImage from "../../public/calculator.png"
import ChatAppImage from "../../public/ChatApp.png"

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
    id: 5,
    title: "Chat-App",
    image: ChatAppImage,
    description: "Kompletna Full-Stack MERN aplikacija za razmjenu poruka u stvarnom vremenu. Izgrađena s naglaskom na brzinu, sigurnost (JWT autentifikacija) i moderan dizajn. Koristi Socket.IO za trenutnu isporuku poruka, prikaz online statusa i listu korisnika. Idealna platforma za brzu i pouzdanu digitalnu interakciju.",
    technologies: ["React", "JavaScript", "Tailwind CSS ", "Context API", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT",],
    liveUrl: "https://chat-app-eight-omega-51.vercel.app",
    githubUrl: "https://github.com/Copeta1/Chat_App",
  },
{
    id: 4,
    title: "FastFood American",
    image: FastFoodImage,
    description: "Kompletan Fast Food webshop izgrađen kao Full-Stack MERN aplikacija. Uključuje kompletnu e-commerce funkcionalnost, filtriranje menija, košaricu, checkout proces i sistem administracije korisničkih uloga (Admin, Editor, Viewer). Aplikacija demonstrira razdvajanje usluga s neovisnim API-jem na Renderu i Frontend aplikacijom na Vercelu, osiguravajući stabilan deployment u produkcijskom okruženju.",
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
    description: "Full-stack oglasna platforma izgrađena za dijeljenje i interakciju s reklamama.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveUrl: "https://ad-vibe-tau.vercel.app/",
    githubUrl: "https://github.com/Copeta1/AdVibe",
},
  {
    id: 1,
    title: "Fridge Chef",
    image: FridgeChefImage,
    description: "Full-stack MERN aplikacija za generiranje recepata na temelju sastojaka u hladnjaku. Uključuje registraciju, prijavu i JWT autentifikaciju.",
    technologies: ["React", "JavaScript", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://fridge-chef-sable.vercel.app/",
    githubUrl: "https://github.com/Copeta1/Fridge_Chef",
  },
  {
    id: 2,
    title: "Kalkulator",
    image: CalculatorImage,
    description: "Jednostavan kalkulator napravljen u Reactu. Demonstrira osnovne React koncepte i JavaScript logiku.",
    technologies: ["React", "JavaScript",],
    liveUrl: "https://calculator-delta-peach-54.vercel.app",
    githubUrl: "https://github.com/Copeta1/Calculator",
  },
]