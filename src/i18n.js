import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "hr",
    debug: false,
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        translation: {
          nav_projects: "Projects",
          nav_about: "About",
          nav_home: "Home",
          hero_greeting: "Hey, I am  ",
          hero_word_role1: "A Full-Stack Developer",
          hero_word_role2: "A Mobile Developer",
          hero_desc:
            "Full-stack developer based in Zagreb. WordPress and Elementor, Next.js and React. Taking on subcontract work for agencies — available now.",
          hero_button: "Learn more",
          hero_email_label: "Email me",

          about_title: "Robert Pecolaj | Full-Stack Developer for Agencies",
          about_description_1:
            "Full-stack developer with a degree in multimedia engineering. Over the past four years I've run web and digital marketing for business websites — from WordPress redesigns to GA4, SEO, and campaigns.",
          about_description_2:
            "I also work with a modern stack: Next.js, TypeScript, React Native, .NET. That combination means I can take over maintenance of an existing WordPress site as well as build something new from scratch.",
          about_description_3:
            "I'm useful to agencies when they're short on hands, or when a project needs someone who covers both.",
          about_button: "Download My CV",
          tools_skills_title: "Tools & Skills",
          tools_subtitle: "Tools",
          skills_subtitle: "Skills",

          experience_title: "Experience",
          experience_intro:
            "I ran web and digital marketing for four business websites — from redesign to day-to-day maintenance.",
          experience_bullet_1:
            "Redesign and maintenance of four WordPress sites (OceanWP, Elementor, WooCommerce)",
          experience_bullet_2:
            "Set up GA4, Search Console, and Site Kit across all sites, with centralized reporting",
          experience_bullet_3:
            "Technical SEO — robots.txt, 301 redirects, Yoast, structure and indexing fixes",
          experience_bullet_4:
            "Custom widgets and theme customizations beyond the builder's capabilities",
          experience_bullet_5: "Campaigns: Google Ads, Meta Ads, Mailchimp",
          experience_footer: "References and examples available on request.",

          projects_title: "My Projects",
          projects_intro:
            "Personal projects — Next.js, TypeScript, .NET, React Native.",
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

          availability_title: "Availability",
          availability_bullet_1: "Available immediately, full-time",
          availability_bullet_2: "Hourly or per-project work, by agreement",
          availability_bullet_3: "I respond within 24 hours",
          availability_bullet_4:
            "Remote work, available for meetings in Zagreb",

          nav_contact: "Contact",
          contact_title: "Get In Touch",
          contact_desc:
            "Open to freelance projects and full-time opportunities. Feel free to reach out!",
          contact_button: "Say Hello",
          projects_bookeasy_desc:
            "Full-stack SaaS booking platform for small service businesses. Businesses manage appointments, clients and services through a clean dashboard, while clients book online via a public booking page. Built with Next.js, TypeScript and ASP.NET Core Web API with PostgreSQL.",
        },
      },
      hr: {
        translation: {
          nav_projects: "Projekti",
          nav_about: "O meni",
          nav_home: "Naslovna",
          hero_greeting: "Bok, ja sam  ",
          hero_word_role1: "Full-Stack Developer",
          hero_word_role2: "Mobilni Developer",
          hero_desc:
            "Full-stack developer iz Zagreba. WordPress i Elementor, Next.js i React. Primam podizvođački posao za agencije — trenutno slobodan.",
          hero_button: "Saznaj više",
          hero_email_label: "Pošalji mi mail",

          about_title: "Robert Pecolaj | Full-Stack Developer za agencije",
          about_description_1:
            "Full-stack developer s diplomom inženjera multimedije. Zadnje četiri godine vodio sam web i digitalni marketing za poslovne stranice — od WordPress redizajna do GA4, SEO-a i kampanja.",
          about_description_2:
            "Radim i moderni stack: Next.js, TypeScript, React Native, .NET. Ta kombinacija znači da mogu preuzeti i održavanje postojećeg WordPress sitea i izradu nečeg novog od nule.",
          about_description_3:
            "Agencijama sam koristan kad im zafali ruku ili kad projekt traži nekoga tko pokriva i jedno i drugo.",
          about_button: "Preuzmi Moj CV",
          tools_skills_title: "ALATI I VJEŠTINE",
          tools_subtitle: "Alati",
          skills_subtitle: "Vještine",

          experience_title: "Iskustvo",
          experience_intro:
            "Vodio sam web i digitalni marketing za četiri poslovne stranice — od redizajna do svakodnevnog održavanja.",
          experience_bullet_1:
            "Redizajn i održavanje četiri WordPress sitea (OceanWP, Elementor, WooCommerce)",
          experience_bullet_2:
            "Postavljanje GA4, Search Consolea i Site Kita na svim stranicama, uz centralizirano izvještavanje",
          experience_bullet_3:
            "Tehnički SEO — robots.txt, 301 redirekcije, Yoast, ispravci strukture i indeksiranja",
          experience_bullet_4:
            "Custom widgeti i prilagodbe teme izvan mogućnosti buildera",
          experience_bullet_5: "Kampanje: Google Ads, Meta Ads, Mailchimp",
          experience_footer: "Reference i primjeri dostupni na upit.",

          projects_title: "Moji Projekti",
          projects_intro:
            "Osobni projekti — Next.js, TypeScript, .NET, React Native.",
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

          availability_title: "Dostupnost",
          availability_bullet_1: "Dostupan odmah, puno radno vrijeme",
          availability_bullet_2: "Rad po satu ili po projektu, prema dogovoru",
          availability_bullet_3: "Odgovaram unutar 24 sata",
          availability_bullet_4: "Radim remote, dostupan za sastanke u Zagrebu",

          nav_contact: "Kontakt",
          contact_title: "Kontaktiraj me",
          contact_desc:
            "Otvoren za freelance projekte i stalno zaposlenje. Slobodno se javi!",
          contact_button: "Pošalji poruku",
          projects_bookeasy_desc:
            "Full-stack SaaS platforma za rezervacije namijenjena malim uslužnim poduzećima. Biznisi upravljaju terminima, klijentima i uslugama kroz nadzornu ploču, dok klijenti rezerviraju online putem javne booking stranice. Izrađena s Next.js, TypeScript i ASP.NET Core Web API s PostgreSQL.",
        },
      },
    },
  });

export default i18n;
