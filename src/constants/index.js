import { bhb, giroscoutellier, ouidou, refactor, portfolio, todolist, dashboard, meteo, ouidou_img, artsakh, woodflip } from "../assets/images";
import {
    nationsunis,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    wordpress,
    threads,
    typescript,
    angular,
    primeng,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: primeng,
        name: "PrimeNG",
        type: "Frontend",
    },
    {
        imageUrl: wordpress,
        name: "WordPress",
        type: "CMS",
    },
];

export const experiences = [
    {
        id: 1,
        title: "Alternant Développeur Fullstack",
        company_name: "Ouidou, Paris, France",
        icon: ouidou,
        iconBg: "#fbb667",
        date: "Juil 2024 - Maintenant",
        points: [
            "Collaboration frontend et backend sur différents sites en développement utilisant Angular, Java & React.",
            "Intervention sur la partie backend avec Java et Spring.",
            "Création de composants réutilisables avec PrimeNG.",
            "Création de la partie frontend d'une application de gestion de pubs ansi que de ses fonctionnalités clés.",
        ],
    },
    {
        id: 2,
        title: "Alternant Développeur Frontend & Intégrateur",
        company_name: "Ouidou, Paris, France",
        icon: ouidou,
        iconBg: "#2962ff",
        date: "Juil 2023 - Juil 2024",
        points: [
            "Collaboration frontend sur différents sites en développement utilisant Angular & React.",
            "Refonte du site Ouidou avec Wordpress et code personnalisé.",
            "Partie inscription avec appels API.",
            "Refontes rapides et esthétiqsues de sites clients.",
        ],
    },
    {
        id: 3,
        title: "Stagiaire Développeur React.JS",
        company_name: "Refactor, Bengaluru, India",
        icon: refactor,
        iconBg: "#fbcaaa",
        date: "Avril 2023",
        points: [
            "Création d'une application web ToDoList en React.js pour la formation.",
            "Prise en main complète de Git, avec dépôt sur github et mise en ligne de l'application web ToDoList.",
            "Création d'une page de connexion/inscription en React dans localStorage.",
            "Création d'une application web de t-shirt personnalisé en React.js pour la formation.",
        ],
    },
    {
        id: 4,
        title: "Stagiaire Développeur Web",
        company_name: "Ouidou, Paris, France",
        icon: ouidou,
        iconBg: "#2962ff",
        date: "Juin 2022 - Oct 2022",
        points: [
            "Refonte du site Ouidou avec Wordpress et code personnalisé.",
            "Collaboration pour la version responsive du jeu YesOuiJump avec React.js.",
            "Aide sur la version numérique de leur newsletter interne mensuelle.",
        ],
    },
    {
        id: 5,
        title: "Service Civique",
        company_name: "Bourges Handball 18, Bourges, France",
        icon: bhb,
        iconBg: "#b7e4c9",
        date: "Sept 2021 - Juin 2022",
        points: [
            "Coach d'une équipe de -15 ans évoluant en Départementale.",
            "Coach -9 ans et BabyHand (3-8 ans) avec entraînement basé sur l'imagination de l'enfant.",
            "Participation à la vie du club et aux événements. Maintenance du site internet Bourges handball 18.",
        ],
    },
    {
        id: 6,
        title: "Stagiaire architecte",
        company_name: "Giros & Coutellier, Paris, France",
        icon: giroscoutellier,
        iconBg: "#fbcaaa",
        date: "Mars 2018",
        points: [
            "Immersion dans l'activité de l'agence.",
            "Application logicielle : conception d'un modèle de lampe moderne.",
            "Aide sur un logiciel 3D pour un projet d'hôtel à rénover.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mathieu-Lalande',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mathieulalande18/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        imageUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Mon Portfolio Personnel',
        description: 'Ceci est mon site Web de portfolio personnel. J\'ai utilisé React.js, Three.js, Tailwind CSS et Figma pour ce projet. Vous y retrouverez mes projets et mon parcours.',
        //Gitlink: 'https://github.com/Mathieu-Lalande/Portfolio',
        SeeLink: "https://mathieulalande.netlify.app/",
        },
        {
        iconUrl: estate,
        imageUrl: woodflip,
        theme: 'btn-back-green',
        name: 'WoodFlip',
        description: 'WoodFlip est une plateforme de vente et de collection d\'objets uniques : des bâtons ornés de designs cartoon originaux. Grâce à une visualisation 3D entièrement interactive. Le site allie une interface intuitive et une expérience immersive pour les amateurs d’objets de collection originaux.',
        //Gitlink: 'https://github.com/Mathieu-Lalande/ToDo-List',
        SeeLink: "#",
    },
    {
        iconUrl: summiz,
        imageUrl: dashboard,
        theme: 'btn-back-pink',
        name: 'Tableau De Bord',
        description: 'Un tableau de bord pour une entreprise avec des outils puissants à utiliser. Il y a Kanban, un calendrier, un sélecteur de couleurs et bien d\'autres fonctionnalités. Il existe également un mode sombre.',
        //Gitlink: 'https://github.com/Mathieu-Lalande/dashboard',
        SeeLink: "https://mathieu-dashboard.netlify.app/",
    },
    {
        iconUrl: threads,
        imageUrl: meteo,
        theme: 'btn-back-black',
        name: 'Application Météo',
        description: 'Découvrez notre application météo contenant toutes les informations en temps réel. Gardez une longueur d\'avance sur la météo grâce à notre interface complète et conviviale. Choisissez une ville et obtenez les informations météorologiques.',
        //Gitlink: 'https://github.com/Mathieu-Lalande/App-meteo',
        SeeLink: "https://app-meteo-math.netlify.app/",
    },
    {
        iconUrl: snapgram,
        imageUrl: ouidou_img,
        theme: 'btn-back-yellow',
        name: 'Ouidou',
        description: 'Refonte du site Internet de Ouidou, cette société de conseil en informatique (ESN) est basée à Paris avec 5 agences en France. Ouidou Consulting offre des services de développement logiciel, conseil IT, et transformation digitale.',
        //Gitlink: 'https://github.com/adrianhajdin/project_ai_summarizer',
        SeeLink: "https://ouidou.fr/",
    },
    {
        iconUrl: artsakh,
        imageUrl: artsakh,
        theme: 'btn-back-blue',
        name: 'Artsakh',
        description: 'Création du site pour cette organisation non gouvernementale (ONG) qui a pour but de regrouper les acteurs pour une aide humanitaire en Arménie pour les réfugiés Karagaghiote. Ce site à été présenté au Sénat.',
        //Gitlink: '',
        SeeLink: "https://artsakhconnect.vercel.app/",
    },
];