import { d } from "maath/dist/index-43782085.esm";
import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  blog,
  dashboard,
  docker,
  galdieriRent,
  done,
  history,
  refresh,
  Angular,
  linkedIn,
  githubLogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Front-End Web Development",
    icon: web
  },
  {
    title: "Back-End Web Development",
    icon: backend
  }
];

const contactMethods = [
  {
    title: "LinkedIn",
    icon: linkedIn,
    URL: "https://www.linkedin.com/in/ali-omarr"
  },
  {
    title: "Github",
    icon: githubLogo,
    URL: "https://github.com/Ali-0mar"
  }
];
const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "Angular",
    icon: Angular
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "Searching for the Next Adventure!",
    icon: refresh,
    extras: "animate-spin",
    iconBg: "#E6DEDD"
  },
  {
    title: "Full-Stack Developer",
    company_name: "StorexWeb",
    icon: done,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing full-stack web applications such as Galdieri Rent intranet, which serves as a website used as a communications channel, knowledge management tool, and collaboration platform using Angular, NodeJS, MongoDB, and GraphQL.",
      "Gradual updating the applications legacy code and updated libs as required.",
      "Collaborating on stages of the systems development lifecycle from requirement gathering to production releases.",
      "Teaming on user-centric design strategy in the translation of business requirements into high-quality, scalable, and reusable coded solutions.",
      "Making recommendations for new technology integration based on suitability and alignment with business goals.",
      "Implementing e2e testing using Jest."
    ]
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelancer",
    icon: done,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Present",
    points: ["Developing Responsive websites.", "Implementing features and Designs based on mockups and prototypes.", "Developing flexible and interactive SPA using best practice recommendations."]
  },
  {
    title: "Frontend Developer",
    company_name: "Alboraq-Telecom",
    icon: history,
    iconBg: "#383E56",
    date: "Feb 2020 - Nov 2020",
    points: [
      "Developed the front end for an internal dashboard that was used as management system for the entire company in a microservice environment.",
      "Updated the legacy code for multiple services.",
      "Testing and debugging code."
    ]
  }
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Galdieri Rent",
    description: " Web-based platform intranet, which serves as a website used as a communications channel, knowledge management tool, and collaboration platform that allows employees help users to search, book, and manage car rentals from various providers.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient"
      },
      {
        name: "GraphQL",
        color: "blue-text-gradient"
      }
    ],
    image: galdieriRent,
  },
  {
    name: "Blog Landing Page",
    description: "Web application for puplishing blogs and articles",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "bootstrap",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: blog,
    source_code_link: "https://github.com/Ali-0mar/Blogr-Landing-Page"
  },
  {
    name: "Project Management",
    description: "A project management platform used to manage tasks and projects for small teams with the backend constructed using firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "contextAPI",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "green-text-gradient"
      },
      {
        name: "firebase",
        color: "pink-text-gradient"
      }
    ],
    image: dashboard,
    source_code_link: "https://github.com/Ali-0mar/Project-Mangment"
  }
];

export { services, contactMethods, technologies, experiences, testimonials, projects };
