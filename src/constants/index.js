import {
  abprime,
  admin,
  taste,
  gym,
  booking,
  node,
  redux1,
  react1,
  javascript1,
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  jrnd,
  carrent,
  jobit,
  tripguide,
  threejs,
  mphasis
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer",
    icon: javascript1,
  },
  {
    title: "React Developer",
    icon: react1,
  },
  {
    title: "Learning Backend",
    icon: node,
  },
  {
    title: "Redux Toolkit",
    icon: redux1,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Delv Software Engineer",
    company_name: "Mphasis",
    icon: mphasis,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Playing a key role in code reviews, offering constructive feedback to maintain codebase integrity and elevate overall development standards",
      "Providing mentorship to junior developers, fostering a collaborative learning environment and ensuring the team's proficiency in frontend technologies.",
      "Demonstrating expertise in problem-solving and debugging, ensuring the stability and performance of web applications.",
      "Implementing state management with Redux, optimizing data flow and maintaining a scalable and efficient codebase for complex applications",
      "Contributing to the evolution of the user interface through the integration of Material-UI, ensuring a cohesive and visually appealing design language.",
      "Led the migration of legacy codebases to modern React.js standards, improving maintainability and paving the way for future enhancements.",

    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Java R&D Pvt Ltd",
    icon: jrnd,
    iconBg: "#383E56",
    date: "October 2020 - October 2023",
    points: [
      "I actively contributed to the development and enhancement of two notable client projects—MGM Resort and Florida Blue. Within these engagements, I had the opportunity to showcase my technical prowess by leveraging a diverse set of skills. This included proficiency in  JavaScript, frameworks like React JS, and tools like Git and Jira, as well as the application of best practices in software development. My role involved hands-on work on critical aspects of the projects, where I applied my expertise in areas such as front-end and back-end development, ensuring the delivery of high-quality and performant solutions. Through these experiences, I demonstrated the ability to address complex technical challenges and deliver impactful results within the context of client-specific requirements and industry standards.",
      "Successfully implemented responsive designs and cross-browser compatibility, enhancing user interfaces for optimal user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Actively participated in daily stand-ups and sprint planning to deliver features and enhancements on time",
      "Additionally, I collaborated closely with the QA team to identify and address any reported bugs or issues, ensuring high-quality deliverables",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Exceptional React developer with strong expertise in building scalable and responsive web applications.",
    name: "Himanshi Satpute",
    designation: "Junior Software Engineer",
    company: "CloudEQ",
    image: "https://media.licdn.com/dms/image/C4E03AQG9YNjvyEI8yg/profile-displayphoto-shrink_800_800/0/1631693586363?e=1706140800&v=beta&t=9cacn_j4cLVd8BaYjDv3bbWPcu6H1qAuPdtPuw86a68",
  },
  {
    testimonial:
      "He possesses impressive learning abilities. He delivered high-quality work on time.",
    name: "Harshit Bhadoria",
    designation: "Associate Consultant",
    company: "KPMG",
    image: "https://media.licdn.com/dms/image/D5603AQETYQIkouaMIA/profile-displayphoto-shrink_800_800/0/1686848022529?e=1706140800&v=beta&t=90sniJf_ylIJQVVPVK6LmqDvrtc_JxFkNZXsNc8O2j0",
  },
  {
    testimonial:
      "He is a highly dedicated and passionate individual when it comes to his work",
    name: "Manas Srivastava",
    designation: "Analyst",
    company: "KPMG",
    image: "https://media.licdn.com/dms/image/D5603AQEuqF-3csNHNQ/profile-displayphoto-shrink_800_800/0/1694452355518?e=1706140800&v=beta&t=BgxNAAnf2b516YR7QoFkEM73bYirgqmyt6HMmVNbYxw",
  },
];

const projects = [
  {
    name: "Taste",
    description:
      "The Taste app is a web application that enables users to browse a variety of food options, select their desired items, and place food orders. The app utilizes React and Redux to provide an intuitive and efficient user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: taste,
    source_code_link: "https://tasteapp.onrender.com/",
  },
  {
    name: "Abprime",
    description:
      "AbPrime utilizes a powerful API from Rapid API to curate video recommendations based on user preferences, search history, and interactions, ensuring a customized video feed for each user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "rapid api",
        color: "pink-text-gradient",
      },
    ],
    image: abprime,
    source_code_link: "https://abprime.onrender.com/",
  },
  {
    name: "Admin Panel",
    description:
      "I have created an admin panel using React.js that allows users to track details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://aadminpanel.onrender.com/",
  },
  {
    name: "Gym",
    description:
      "This gym app include features like exercise library, where users can browse and search for specific exercises, view instructional gif, and access related workout exercises and also can search exercise by body parts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/dubey748/gymfrontend",
  },
  {
    name: "Booking App",
    description:
      "The hotel booking app is a web application that allows users to search for hotels based on their location and book accommodations for their desired duration. The app utilizes React to provide a seamless and user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/dubey748/BetaPro.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
