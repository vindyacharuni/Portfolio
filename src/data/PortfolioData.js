
export const profileData = {
  name: "Vindya Wickramathilaka",
  role: "Software Engineering Undergraduate",
  tagline: "I build scalable web applications, robust systems, and elegant administrative dashboards.",
  about: "Hello! I’m Vindya Wickramathilaka, a 3rd-year Software Engineering undergraduate at the University of Kelaniya. I am deeply passionate about software engineering, thriving on the challenge of transforming complex problems into clean, scalable, and user-centric solutions.I enjoy the entire lifecycle of software development, from architecting robust systems to designing intuitive user experiences.Beyond writing code, I believe the best products are built collaboratively.I actively participate in hackathons to push my technical boundaries under pressure, and I love working in teams to bring innovative ideas to life.Community is also a core part of my journey.I proudly volunteer with the IEEE Student Branch and the WIE Affinity Group, where I enjoy fostering growth, learning, and tech awareness within the university ecosystem.",
  profilePic: "/newprofile.jpg",
  cvFile: "/Vindya_CV.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/vindya-charuni-199877312",
    github: "https://github.com/vindyacharuni",
    blog: "https://medium.com/@vindyacharuni13",
    email: "vindyacharuni13@gmail.com"
  }
};

export const education = [
  {
    id: 1,
    institution: "University of Kelaniya",
    degree: "BSc (Hons) in Software Engineering",
    duration: "2024 - Present",
    details: "Currently pursuing my undergraduate degree, focusing on full-stack development, low-level systems, and software architecture.",
    type: "university"
  },
  {
    id: 2,
    institution: "Pushpadana Girls' College, Kandy",
    degree: "GCE Advanced Level",
    duration: "2019 - 2022",
    details: "Results: A -Combined Maths,A-Chemistry,C-Physics,Z score:1.5289",
    type: "al"
  },
  
];

export const projects = [

  {
    id: 2,
    title: "ReserveX",
    description: "ReserveX is a modern stall reservation platform developed for the Colombo International Book Fair. Built with a Spring Boot backend and React frontend, the system features a dual-portal architecture that allows vendors to book stalls via an interactive live map while providing administrators with a real-time analytics dashboard. The project emphasizes secure, role-based access control and automated workflows, including JWT authentication and QR-coded email confirmations.",
    tech: ["Java 17", "Spring Boot", "MySQL", "React", "JWT"],
    image: "./ReserveX.png"
  },
  {
    id: 3,
    title: "Blush-d",
    description: "Blush'd is a full-featured e-commerce web application dedicated to beauty and cosmetic products. Built using PHP and MySQL, it features a mobile-first responsive design with a modern aesthetic. The platform supports a complete shopping lifecycle—from product discovery and cart management to order placement—complemented by a robust administrative backend for inventory control, sales reporting, and user management.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    image: "./Blush-d.png"
  },

];

export const blogs = [
  {
    id: 1,
    title: "A beginner guide to software licencing",
    description: "In this post, I'll walk through the key aspects of software licensing that every developer or technically inclined individual should be aware of.",
    image: "./softwarelicensing.jpg",
    link: "https://medium.com/@vindyacharuni13/a-beginners-guide-to-software-licensing-77ebc97c1733"
  },
  {
    id: 2,
    title: "What Is DevOps, Really? A Simple Guide That Actually Makes Sense",
    description: "DevOps is more than just a buzzword; it is a fundamental shift in how software is built, delivered, and maintained. In this post, I’ll break down the core concepts of DevOps—including CI/CD, automation, and collaboration—explaining how they work together to help teams ship better software faster.",
    image: "./devops.png",
    link: "https://medium.com/@vindyacharuni13/what-is-devops-really-a-simple-guide-that-actually-makes-sense-4a1295e609ff"
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    details: "Demonstrates proficiency in developing, deploying, and debugging cloud-based applications using AWS."
  },
  {
    id: 2,
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    details: "Comprehensive training in React, Node.js, Express, and MongoDB."
  }
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "PHP", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Spring Boot", "Node.js"]
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "Git", "Postman", "JWT"]
  }
];