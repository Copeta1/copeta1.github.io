import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: {
          nav_projects: "Projects",
          nav_about: "About",
          nav_home: "Home",
          hero_desc:
            "As a Full-Stack Developer, I use the power of the MERN stack, React.js, and React Native to build modern websites and mobile applications.",
          hero_button: "Learn more",

          about_title:
            "Robert Pecolaj | Frontend & Mobile Developer & Multimedia Expert",
          about_description:
            "I am a Multimedia Engineer from the University North, dedicated to creating modern, functional, and visually appealing digital solutions. I combine formal education in multimedia and design aesthetics with an intense focus on Frontend and Mobile Developer roles, allowing me to combine design and functionality with ease.",
          about_button: "Download My CV",
          tools_skills_title: "Tools & Skills",
          tools_subtitle: "Tools",
          skills_subtitle: "Skills",

          projects_title: "My Projects",
          projects_sub_title: "Note about Demo Version and Server Loading",
          projects_description:
            "The first attempt to log in or interact with the application after a long break may take 15 to 30 seconds while the back-end server restarts. Please be patient. After that, the application will run at normal speed.",
          projects_chat_app_desc:
            "A complete Full-Stack MERN application for real-time messaging. Built with an emphasis on speed, security (JWT authentication) and modern design. Uses Socket.IO for instant message delivery, online status display and user list. The ideal platform for fast and reliable digital interaction.",
          projects_fastfood_desc:
            "A complete Fast Food webshop built as a Full-Stack MERN application. Includes complete e-commerce functionality, menu filtering, shopping cart, checkout process and user role administration system (Admin, Editor, Viewer). The application demonstrates the separation of services with an independent API on Render and a Frontend application on Vercel, ensuring a stable deployment in a production environment.",
          projects_advibe_desc:
            "A full-stack ad platform built to share and interact with ads.",
          projects_fridge_chef_desc:
            "Full-stack MERN application for generating recipes based on ingredients in the fridge. Includes registration, login and JWT authentication.",
          projects_calculator_desc:
            "A simple calculator built in React. Demonstrates basic React concepts and JavaScript logic.",
          projects_button: "Code",
          projects_rentlq_desc:
            "Apartment analytics dashboard for rental property owners. Upload CSV data from Booking.com/Airbnb, track revenue, occupancy rates, and manage reservations in one centralized platform.",
          projects_cvhelper_desc:
            "AI-powered resume builder and optimizer. Enter your career details, let AI analyze your CV, receive concrete improvement suggestions, ATS-optimized keywords, and a polished professional summary — all in one platform.",
          projects_ugradu_desc:
            "UGradu is a mobile app for discovering local events in Croatian cities. Browse events, filter by city, save favourites, and get push notifications. Features an interactive map with event pins and user authentication. Built with React Native, Expo, NativeWind and Firebase.",
          nav_contact: "Contact",
          contact_title: "Get In Touch",
          contact_desc:
            "Open to freelance projects and full-time opportunities. Feel free to reach out!",
          contact_button: "Say Hello",
        },
      },
      hr: {
        translation: {
          nav_projects: "Projekti",
          nav_about: "O meni",
          nav_home: "Naslovna",
          hero_desc:
            "Kao Full-Stack Developer, koristim snagu MERN stacka, React.js i React Native-a za izgradnju modernih web stranica i mobilnih aplikacija.",
          hero_button: "Saznaj više",

          about_title:
            "Robert Pecolaj | Frontend & Mobile Developer & Multimedijski Stručnjak",
          about_description:
            "Diplomirani sam inženjer Multimedije sa Sveučilišta Sjever, posvećen kreiranju modernih, funkcionalnih i vizualno privlačnih digitalnih rješenja. Kombiniram formalno obrazovanje iz multimedije i estetike dizajna s intenzivnim fokusom na Frontend i Mobile Developer ulogu, što mi omogućuje da s lakoćom povezujem dizajn i funkcionalnost.",
          about_button: "Preuzmi Moj CV",
          tools_skills_title: "ALATI I VJEŠTINE",
          tools_subtitle: "Alati",
          skills_subtitle: "Vještine",

          projects_title: "Moji Projekti",
          projects_sub_title: "Napomena o Demo Verziji i Učitavanju Servera",
          projects_description:
            "Prvi pokušaj prijave ili interakcije s aplikacijom nakon dulje pauze može potrajati 15 do 30 sekundi dok se Back-end server ponovno pokrene. Molimo Vas za strpljenje. Nakon tog prvog pokretanja, aplikacija će raditi normalnom brzinom.",
          projects_chat_app_desc:
            "Kompletna Full-Stack MERN aplikacija za razmjenu poruka u stvarnom vremenu. Izgrađena s naglaskom na brzinu, sigurnost (JWT autentifikacija) i moderan dizajn. Koristi Socket.IO za trenutnu isporuku poruka, prikaz online statusa i listu korisnika. Idealna platforma za brzu i pouzdanu digitalnu interakciju.",
          projects_fastfood_desc:
            "Kompletan Fast Food webshop izgrađen kao Full-Stack MERN aplikacija. Uključuje kompletnu e-commerce funkcionalnost, filtriranje menija, košaricu, checkout proces i sistem administracije korisničkih uloga (Admin, Editor, Viewer). Aplikacija demonstrira razdvajanje usluga s neovisnim API-jem na Renderu i Frontend aplikacijom na Vercelu, osiguravajući stabilan deployment u produkcijskom okruženju.",
          projects_advibe_desc:
            "Full-stack oglasna platforma izgrađena za dijeljenje i interakciju s reklamama.",
          projects_fridge_chef_desc:
            "Full-stack MERN aplikacija za generiranje recepata na temelju sastojaka u hladnjaku. Uključuje registraciju, prijavu i JWT autentifikaciju.",
          projects_calculator_desc:
            "Jednostavan kalkulator napravljen u Reactu. Demonstrira osnovne React koncepte i JavaScript logiku.",
          projects_button: "Kod",
          projects_rentlq_desc:
            "Nadzorna ploča za analitiku apartmana za vlasnike nekretnina za najam. Prenesite CSV podatke s Booking.com/Airbnb, pratite prihode, stope popunjenosti i upravljajte rezervacijama na jednoj centraliziranoj platformi.",
          projects_cvhelper_desc:
            "AI alat za izradu i optimizaciju životopisa. Unesite podatke o svom karijernom putu, pustite AI da analizira vaš CV, dobijete konkretne sugestije za poboljšanje, ključne riječi za ATS sustave i optimizirani profesionalni summary - sve na jednoj platformi.",
          projects_ugradu_desc:
            "UGradu je mobilna aplikacija za otkrivanje lokalnih događanja u hrvatskim gradovima. Pregledavajte događanja, filtrirajte po gradu, spremajte favorite i primajte push obavijesti. Sadrži interaktivnu kartu s oznakama događanja i autentifikacijom korisnika. Izrađena s React Native, Expo, NativeWind i Firebase.",
          nav_contact: "Kontakt",
          contact_title: "Kontaktiraj me",
          contact_desc:
            "Otvoren za freelance projekte i stalno zaposlenje. Slobodno se javi!",
          contact_button: "Pošalji poruku",
        },
      },
    },
  });

export default i18n;
