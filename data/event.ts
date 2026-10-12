import { EventType } from "@/component/UpcomingEvent/Card"

type Event = {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  type: EventType;
  pictures: string;
};

export const events: Event[] = [
  {
    title: "Cryptita Plays Web3 SUI Workshop",
    subtitle:
      "A hands-on Web3 workshop designed to guide students and builders from theoretical concepts to active onchain development. Sessions focus on integrating web applications with smart contracts, managing wallet interactions, and deploying live applications to equip participants for real-world blockchain building.",
    date: "August 23, 2026",
    location: "",
    type: EventType.WORKSHOP,
    pictures: "/event/SUI Workshop",
  },
  {
    title: "𝗦𝘁𝗮𝗿𝘁 𝗙𝗿𝗼𝗺 𝗭𝗲𝗿𝗼 𝘄𝗶𝘁𝗵 𝗞𝗶𝗿𝗼 – 𝗔𝗻 𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝘁𝗼 𝗞𝗶𝗿𝗼",
    subtitle:
      "An interactive, hands-on workshop designed to introduce developers to Kiro and the shift from standard AI coding to agentic engineering. Participants will learn how to integrate agentic workflows into their development toolkit, streamline problem-solving, and elevate their programming capabilities for modern software builds.",
    date: "August 1, 2026",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.WORKSHOP,
    pictures: "/event/Kiro",
  },
  {
    title: "Ideathon 2026",
    subtitle:
      "A competitive ideation event where students collaborate to solve real-world challenges using AWS solutions and architecture. Participants develop, refine, and pitch innovative ideas, building skills in creativity, teamwork, and problem solving.",
    date: "April 2026",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.COMPETITION,
    pictures: "/event/Ideathon 2026",
  },
  {
    title: "AWS Cloud Club Launch: Introduction to AWS & Cloud Computing",
    subtitle: "A seminar introducing AWS Cloud Club, covering AWS fundamentals, cloud computing concepts, and the club's mission to empower students with cloud skills through workshops, projects, and community engagement.",
    date: "March 18, 2026",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/AWSCloudClubLaunch2026",
  },
  {
    title: "ChainTalk 2026",
    subtitle: "A seminar for tech students highlighting cryptocurrency and blockchain technology, featuring industry professionals.",
    date: "February 5, 2026",
    location: "Performing Arts Theater, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/ChainTalk2026",
  },
  {
    title: "Data Analytics Workshop",
    subtitle: "A 3-week mentored program by a Professional Data Analyst covering data cleaning, visualization with PowerBI, and business insights interpretation.",
    date: "January 28, 2026",
    location: "AWS Discord Server",
    type: EventType.WORKSHOP,
    pictures: "/event/DAW",
  },
  {
    title: "Meet Magento Philippines",
    subtitle:
      "A major ecommerce conference bringing together students, developers, and industry professionals to explore modern online commerce. The event features expert talks, technical sessions, and real-world case studies focused on Magento, Adobe Commerce, and digital business growth.",
    date: "November 2025",
    location: "The Blueleaf, McKinley Hill, Taguig City",
    type: EventType.SEMINAR,
    pictures: "/event/MMPH25",
  },
  {
    title: "YGG Play Summit",
    subtitle:
      "A student-centered summit focused on gaming, Web3, and emerging digital careers. The event includes talks and discussions that introduce participants to blockchain gaming, esports, and opportunities within the global gaming industry.",
    date: "November 2025",
    location: "SM Aura, Bonifacio Global City",
    type: EventType.COMMUNITY,
    pictures: "/event/YPS2025",
  },
  {
    title: "Zero to 10X Developer",
    subtitle:
      "A hands-on developer event designed to help students strengthen their programming skills with Amazon Q. Sessions focus on practical development workflows, problem-solving, and career growth to prepare participants for real-world software projects.",
    date: "October 2025",
    location: "Arthaland Century Pacific Tower, BGC",
    type: EventType.WORKSHOP,
    pictures: "/event/ZeroTo10X",
  },
  {
    title: "CCS Orientation 2025",
    subtitle:
      "An official orientation program welcoming new College of Computer Studies students. The event introduces academic guidelines, student organizations, and available resources to help students start their college journey with confidence.",
    date: "September 2025",
    location: "Performing Arts Theater, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/CCS Orientation 2025",
  },
  {
    title: "TechCon 2025",
    subtitle:
      "A student-led technology conference highlighting current trends in computing and innovation. It features talks and workshops on software, cloud technologies, and emerging tools that encourage learning and collaboration.",
    date: "April 2025",
    location: "Performing Arts Theater, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/TechCon 2025",
  },
  {
    title: "Ideathon 2025",
    subtitle:
      "A competitive ideation event where students collaborate to solve real-world challenges using AWS solutions and architecture. Participants develop, refine, and pitch innovative ideas, building skills in creativity, teamwork, and problem solving.",
    date: "April 2025",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.COMPETITION,
    pictures: "/event/Ideathon 2025",
  },
];
