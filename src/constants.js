// Skills Section Logo's
import angular from './assets/company_logo/angular.png';
import cssLogo from './assets/tech_logo/css.png';
import htmlLogo from './assets/tech_logo/html.png';
import javascriptLogo from './assets/tech_logo/javascript.png';

import cpp from './assets/company_logo/c++.png';
import eclipse from './assets/company_logo/eclipse.png';
import hibernate from './assets/company_logo/hibernate.png';
import mysql from './assets/company_logo/mysql.png';
import php from './assets/company_logo/php.png';
import reactimg from './assets/tech_logo/reactjs.png'
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import figmaLogo from './assets/tech_logo/figma.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import javaLogo from './assets/tech_logo/java.png';
import mcLogo from './assets/tech_logo/mc.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import internpeLogo from './assets/company_logo/codeclause.png';
import celebalLogo from './assets/company_logo/jbk.png';

// Education Section Logo's
import diploma from './assets/education_logo/diplogo.png';
import Logo from './assets/education_logo/logo.png';
import neriLogo from './assets/education_logo/twelth.png';

// Project Section Logo's
import imagesearchLogo from './assets/company_logo/Admin.png';
import npmLogo from './assets/company_logo/login.png';
import githubdetLogo from './assets/company_logo/satten.png';
import scm from './assets/company_logo/smartconnect.png';
import taskremLogo from './assets/company_logo/slogin.png';
import webverLogo from './assets/company_logo/tsd.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactimg },
      { name: 'Angular JS', logo: angular },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Hibernate', logo: hibernate },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'PHP', logo: php },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cpp },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Eclipse', logo: eclipse },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'MySQL', logo: mysql },
      { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: celebalLogo,
    role: "Java Developer Intern",
    company: "Kiran Academy JavaByKiran",
    date: "Jan-July 2025 - Present",
    project: "Project: SmartConnect – Smart Contact System",
    desc: "Internship Duration: 7 Months (Remote), Organization: KiranAcademy (JavaByKiran), Role: Java Full Stack Intern, Technologies: Core Java, JDBC, Hibernate, Spring, Spring Boot, RESTful APIs, MySQL, HTML, CSS, JavaScript, Bootstrap, SmartConnect is a full-stack Smart Contact Management System built to streamline the process of managing personal and professional contacts. It enables users to register, securely log in, and perform complete CRUD operations on their contact list. The system integrates robust backend functionality with a responsive and intuitive frontend.",
    skills: [
      "Core Java",
      "Advanced Java",
      "JDBC",
      "HTM CSS JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Hibernate ORM",
      "Spring Core",
      "Spring Boot",
      "Spring Security",
      "RESTful APIs",
      "MySQL",
      "Thymeleaf",
      "JPA (Java Persistence API)",
      "Maven",
      "GitHub",
      "VS Code",
    ]
  },
  {
    id: 1,
    img: internpeLogo,
    role: "INTERNSHIP At CodeClause",
    company: "CodeClause",
    date: "May 2023 - July 2023",
    project: "🔐 Project Title: FolderLocker – Folder Locking System (Java Desktop App)",
    desc: "FolderLocker is a Java Swing-based desktop application developed during my internship at CodeClause. It allows users to securely lock/unlock folders with a password by hiding them using Windows attributes and storing the password in a hidden file. The project demonstrates skills in GUI design, file handling, and system command execution in Java.",
    skills: [
      "Java SE (JDK) – Core programming",
      "OOP (Object-Oriented Programming)",
      "Data Structures",
      "Swing (javax.swing) – GUI components (JFrame, JPanel, JButton, JTextField, JLabel, etc.)",
      "AWT (java.awt) – Event handling and UI customization",
      "File I/O (java.io) – Reading/writing password files",
      "Runtime/Process Execution – Folder hiding and unhiding using attrib command",
      "JFileChooser – Folder selection UI component",
      "Git",
      "Basic Debugging"
    ],
  },
  // {
  //   id: 2,
  //   img: AccentureLogo,
  //   role: "Project Management Job Simulation",
  //   company: "Accenture",
  //   date: "May 2024",
  //   desc: "Completed a project management job simulation where I learned to prepare proposals for optimal project management approaches. Gained insights into key attributes of successful project managers and the importance of communication in project management.",
  //   skills: [
  //     "Project Management",
  //     "Communication",
  //     "Leadership",
  //     "Team Collaboration",
  //     "Proposal Writing",
  //     "Problem Solving"
  //   ],
  // },

  // {
  //   id: 3,
  //   img: datapolarisLogo,
  //   role: "Developer | Management Member",
  //   company: "Data polaris",
  //   date: "September 2024 - Present",
  //   desc: "Contributed to multiple projects and managed technical and non technical tasks during club-led events and workshops.",
  //   skills: [
  //      "Problem Solving",
  //      "Project Planning",
  //      "Project Coordination",
  //      "Event Management",
  //      "Leadership",
  //      "Team Collaboration",
  //      "Communication",

  //      ],
  // },
];

export const education = [

  {
    id: 0,
    img: Logo,
    school: "Shri Jaykumar Raval Institute of Technology, Dondaicha Dist Dhule",
    date: "Jun 2025 Passout",
    grade: "7.87 CGPA",
    desc: "Gained a solid foundation in core computer science subjects including Data Structures & Algorithms, Web Development, Database Management Systems, and Object-Oriented Programming. Developed hands-on experience through multiple academic and personal projects, applying theoretical knowledge to real-world software solutions. Focused on building scalable applications, improving problem-solving abilities, and understanding full-stack development practices.",
    degree: "Bachelor Computer Science & Enginnering (BE)",
  },
  {
    id: 1,
    img: diploma,
    school: "Ahinsa Institute of Technology, Dondaicha Dist Dhule",
    date: "Jun 2022 - present",
    grade: "7.76 CGPA",
    desc: "I completed my Diploma in Computer Technlogy from Ahinsa College Dondaicha. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Ahinsa College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Diploma in Computer Science & Technology",
  },
  {
    id: 2,
    img: neriLogo,
    school: "M.H.S.S. Junior College Shindkheda",
    date: "Apr 2018 - March 2020",
    desc: "I completed my class 12 education from M.H.S.S High School , Shindkheda, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "Nashik(XII) - PCM with Plane Science",
  },
  {
    id: 3,
    img: neriLogo,
    school: "Kisan Vidyalay Shindkheda",
    date: "Apr 2017 - March 2018",
    desc: " I completed my class 10 education from Kisan Vidyalay, Shindkheda under the Nashik board.",
    degree: "Nashik(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Industrial Visit Management System",
    description:
    "Industrial Visit Management System is a web-based platform that simplifies the planning and management of educational industrial visits. It enables smooth coordination among students, faculty, and industries by managing visit requests, approvals, schedules, participant lists, and reports. With secure role-based access for Admins, Faculty, and Students, the system ensures efficient communication, document handling, and real-time notifications.",
      // "The Industrial Visit Management System is a web-based application designed to streamline and manage educational industrial visits for students. It facilitates coordination between students, faculty, and industries by handling visit requests, approvals, scheduling, participant lists, and reporting. The system includes role-based access for Admins, Faculty, and Students, ensuring secure and efficient handling of visit details, permissions, notifications, and documentation.",
    image: imagesearchLogo,
    tags: ["HTML", "CSS", "JavaScript", "React js", "Node js", "Mongo db", "Node Package Manager (npm)"],
    github: "https://github.com/Akashpatil2002/Industrial-visit-management-system.git",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "SmartConnect",
    description:
      "Developed a full-featured Smart Contact Manager System using Spring Boot, Spring MVC, Hibernate (JPA), and MySQL, aimed at organizing and managing personal or professional contacts efficiently. The application supports user authentication, role-based access, contact CRUD operations, and a clean user interface styled with Bootstrap and Thymeleaf.",
    image: scm,
    tags: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript", "Maven", "Git", "VSCode", "Eclipse", "Postman"],
    github: "https://github.com/Akashpatil2002/SmartConnect.git",
    // webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "SmartTendance-System",
    description:
      "The Student Attendance System is a full-stack web application developed to efficiently manage and monitor students' attendance in educational institutions. It digitizes the manual attendance process, allowing administrators and teachers to mark, update, and view attendance records in real time.",
    image: githubdetLogo,
    tags: ["HTML5/CSS3", "CSS", "TypeScript", "Bootstrap", "Angular(v14+ recommended)", "Spring Boot (RESTful API)", "Spring Security (for authentication & authorization)", "Hibernate (ORM)", "MySQL", "Postman (API Testing)", "Maven or Gradle", "Git/GitHub (Version Control)"],
    github: "https://github.com/Akashpatil2002/SmartTendance-System.git",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 3,
    title: "School Management System Using JSP, Servlet",
    description:
      "The School Management System is a role-based web app using JSP, Servlets, JDBC, and MySQL. It allows Admins to manage users, Teachers to mark attendance and grades, and Students to view their report card, timetable, and notices. The UI is styled with Bootstrap and supports features like PDF export, profile editing, and secure login.",
    image: npmLogo,
    tags: ["Html", "CSS", "JavaScript", "JSP", "JDBC", "Servlet"],
    github: "https://github.com/Akashpatil2002/School-Management-System.git",
    // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Student Management System",
    description:
        "Student Registration System is a Java Swing-based desktop application that manages student records through a user-friendly GUI. It allows users to add, view, update, and delete student details such as name, ID, DOB, email, gender, address, and profile image. The system uses radio buttons for gender selection and supports image uploading. Data is displayed in a table for easy management and is stored securely using JDBC and MySQL. The application streamlines the registration process with an intuitive and interactive interface.",
      // "The Student Registration System is a Java Swing-based desktop application designed to manage and maintain student information in an organized and user-friendly manner. This application provides a graphical user interface that allows users to input and store student details such as ID, name, date of birth, user ID, password, email, phone number, gender, address, and profile image. Once the user logs in, they are directed to this registration interface, where they can perform various operations including saving new student records, viewing existing data, updating details, deleting records, and clearing the form fields. The application uses radio buttons to select the gender and supports image browsing and uploading for profile pictures. All submitted data is displayed in a tabular format, making it easy to manage and review entries. This system is typically backed by a database using JDBC and MySQL, ensuring data persistence and efficient record management. The overall goal of this project is to simplify the student registration process through an intuitive and interactive user interface built using Java Swing.",
    image: taskremLogo,
    tags: ["Java", "Java Swing", "JDBC", "AWT", "MySql", "Java IO / File API"],
    github: "https://github.com/Akashpatil2002/Student-Registration---Java.git",
    // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Trafic Sign Detection",
    description:
      "Created a visually appealing, interactive website that showcases various travel destinations around the world.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/Akashpatil2002/Traffic-Sign-Classifier.git",
    // webapp: "https://webversedigital.com/",
  },

];
