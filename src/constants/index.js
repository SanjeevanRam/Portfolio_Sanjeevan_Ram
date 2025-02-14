import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-4.webp";
import logo from "../assets/projects/logo (1).webp"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCE = [
  {
    companyLogo: logo,
    company: "exposys data labs",
    title: "Web Development",
    description: "Developed and deployed a productivity tool designed to monitor and manage screen time across multiple devices, enhancing user well-being through effective time management strategies.",
    dates: "Nov 2024 - Dec 2024",
    skills: ["Tailwind CSS", "MongoDB", "Node.js", "React", "Express.js"],
  },
  // Add more experiences here
];


export const PROJECTS = [
  {
    title: "Chat-App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like A Chat App is a platform where users can send and receive messages instantly. It is designed to make communication easy and can be used for personal chats or work-related conversations.",
    technologies: ["CSS", "Bootstrap", "EJS", "Node.js", "Express", "MongoDB"],
    link: "https://chat-app-pmdp.onrender.com/" 
  },
  {
    title: "Airbnb",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, Editing, add Review with rating, and user authentication. Discover a seamless and immersive travel experience with our Airbnb Clone website. Designed to connect travelers with unique accommodations worldwide, it offers a wide range of stays—from cozy apartments to luxurious villas. Hosts can effortlessly list their properties, while guests can explore, book, and manage their trips with ease.",
    technologies: ["CSS", "Bootstrap", "EJS", "Node.js", "Express", "MongoDB"],
    // link: "https://your-airbnb-clone-link.com" 
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "Stay informed and plan your day with ease using our Weather App. Get real-time weather updates, accurate forecasts, and detailed information for any location worldwide. Whether you're checking for rain before heading out or planning a weekend getaway, our app provides everything you need — from current temperature and humidity to wind speed.",
    technologies: ["ReactJs", "Weather API"],
    link: "https://weather-app-by-react-js.netlify.app/"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://sanjeevanram.github.io/Portfolio/",
  },
  {
    title: "Rock-Paper-Scissors-game",
    image: project5,
    description:
      "Rock-Paper-Scissors Game is a simple yet engaging web-based game where players compete against the computer in the timeless battle of strategy and luck. Choose your move—Rock, Paper, or Scissors—and see if you can outsmart your opponent.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://sanjeevanram.github.io/Rock_Paper_Scissors_Game/",
  },
];

export const CONTACT = {
  address: "National Institute of Technology Agartala ",
  phoneNo: "+91 8882540325, +91 81999021445",
  email: "sanjeevanking012@gmail.com",
};