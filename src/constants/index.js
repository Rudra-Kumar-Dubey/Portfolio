import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  java,
  cpp,
  python,
  sql,
  dav,
  vit,
  guesstnum,
  portfolio,
  eduweb,
  foodord,
  threejs,
  google,
  board,
  leaps,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Andriod Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Class X",
    company_name: "J.P.V. D.A.V. Public School, Katni (M.P.)",
    icon: dav,
    iconBg: "#383E56",
    date: "July 2017 - May 2018",
    points: [
      "Scored 89% in 10th Boards Examination.",
      "Participated in DAV Regional Sports Tournament (MHRT) in Table Tennis",
      "Played at District level in Chess and Table Tennis.",
      "Learnt Developing websites and cyber ethics with knowledge of HTML and IT.",
    ],
  },
  {
    title: "Class XII",
    company_name: "J.P.V. D.A.V. Public School, Katni (M.P.)",
    icon: dav,
    iconBg: "#E6DEDD",
    date: "July 2019 - July 2020",
    points: [
      "Scored 94.2% in 12th Boards Examination.",
      "Participated in DAV National Sports as a Volleyball player and won silver medal at Regional Level.",
      "Appointed as the SPORTS COORDINATOR of my school managed and conducted several sports event.",
      "Learnt about Software development using Python and SQL.",
    ],
  },
  {
    title: "B. Tech(CSE)",
    company_name: "Vellore Institute of Technology, Bhopal",
    icon: vit,
    iconBg: "#383E56",
    date: "Oct 2020 - Ongoing",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Learnt about using datasets, finding mathematical insight by using variance, mean, average and use of numpy with other python libraries to study of data to extract meaningful insights for business.",
    name: "Data Science",
    url: "https://drive.google.com/file/d/1nur3lonzMGgFSLhvoNMuB6NShfRYMnYU/view?usp=sharing",
    designation: "Issued on Jan 2023",
    company: "Board Infinity",
    image: board,
  },
  {
    testimonial:
      "Learnt about examining data sets, finding treads and drawing conclusion from the information they contain.",
    name: "Fundamentals of Data Analytics",
    url: "https://drive.google.com/file/d/1A8BJfy4M3N21KDpwsokcY1s6YJ_JxUHj/view?usp=sharing",
    designation: "Issued on Dec 2022",
    company: "LEAPS by Analyttica",
    image: leaps
  },
  {
    testimonial:
      "Learnt about Domain Name System (DNS), Ipv4, Network Model and Troubleshooting.",
    name: "The Bits and Bytes of Computer Networking",
    url: "https://www.coursera.org/account/accomplishments/certificate/XXQBRU9SEDKK",
    designation: "Issued on Dec 2021",
    company: "Google",
    image: google,
  },
];

const projects = [
  {
    name: "Coding Cult",
    description:
      "Web-based platform to provide academic guidance and content at one place. Convoform is used to check the needs of the student and show content according to the choices.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Convoform",
        color: "pink-text-gradient",
      },
    ],
    image: eduweb,
    source_code_link: "https://github.com/Rudra-Kumar-Dubey/Educational-Website",
  },
  {
    name: "Portfoilio",
    description:
      "A modern UI/UX and responsive design protfolio website. Which is designed using React, Three js, Tailwind CSS, Framer Motion etc. It is my personal portfolio and you can contact me using this. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three js",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Rudra-Kumar-Dubey/Portfolio",
  },
  {
    name: "Guess The Number",
    description:
      "Web Game with Retro themed design and easy to play interface. A decent game you can play in your free time.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: guesstnum,
    source_code_link: "https://github.com/Rudra-Kumar-Dubey/Guess-The-Number",
  },
  {
    name: "Food Ordering",
    description:
      "Online food delivery with modern user interface and with multiple sections for users with order templates.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: foodord,
    source_code_link: "https://github.com/Rudra-Kumar-Dubey/Food-Ordering-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
