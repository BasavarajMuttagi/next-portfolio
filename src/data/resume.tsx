import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Basavaraj S Muttagi",
  initials: "B",
  url: "https://polyfills.in",
  location: "Bijapur, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineer",
  summary: `I am a experienced software engineer with expertise in React, Angular, TailwindCSS, Node.js and more. During my tenure at Monocept, I contributed to projects in the health and vehicle insurance sectors, focusing on improving agent productivity and client satisfaction through intuitive design and streamlined workflows. I successfully integrated payment gateways, implemented secure authentication mechanisms, and optimized application performance—achieving sub-1-second page load times and reducing build sizes by 42.86%. My work has been recognized for significantly enhancing user experience and productivity. I am passionate about delivering high-quality solutions that drive business transformation.`,
  avatarUrl: "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Zustand",
    "Redux",
    "Typescript",
    "TanStack Query",
    "Python",
    "Postgres",
    "Node.js",
    "Express.js",
    "RabbitMQ",
    "Redis",
    "Socket.io",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BasavarajMuttagi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/basavarajmuttagi",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/basavaraj9600",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Monocept",
      href: "https://monocept.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/monocept.png",
      start: "Oct 2022",
      end: "Nov 2023",
      description:
        "I worked on health and vehicle insurance projects utilizing React, Angular, TypeScript, Node.js and more. I collaborated with diverse teams to design sophisticated interfaces and integrate solutions with backend systems, ensuring robust data flow. Key achievements included implementing payment gateways, user authentication, and KYC processes, as well as optimizing the vehicle insurance application to achieve sub-1 second page load times and reduce its build size by 42.86%. These efforts significantly enhanced agent productivity and client satisfaction, earning recognition for intuitive design and workflow optimization.",
    },
    {
      company: "Monocept",
      href: "https://monocept.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl:
        "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/monocept.png",
      start: "July 2022",
      end: "Sept 2022",
      description:
        "I immersed myself in an intensive program where I rigorously applied core JavaScript fundamentals, object-oriented programming, clean code practices, design patterns, and design principles. I also honed my skills in Git version control. During this period, I dedicated myself to mastering frontend development with ReactJs and TypeScript, while building robust backends using Node, Express, PostgreSQL, and MongoDB. My hard work culminated in the completion of multiple mini projects and a comprehensive final capstone project, showcasing my ability to integrate theoretical knowledge with practical application.",
    },
  ],
  education: [
    {
      school:
        "BLDEA's V. P. Dr. P. G. Halakatti College of Engineering and Technology",
      href: "https://www.bldeacet.ac.in",
      degree: "Bachelor of Engineering in Computer Science And Engineering",
      logoUrl: "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/bldea.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Incident Management Platform",
      href: "https://incident-ui.vercel.app",
      dates: "Feb 2025",
      active: true,
      description: `Introducing our cutting-edge incident management system, designed to empower DevOps teams with real-time tracking and status updates. Built with React and Node.js, this robust platform integrates WebSocket technology for seamless monitoring and maintenance scheduling. Customizable dashboards and automated notifications ensure stakeholders stay informed. Enhance your team's efficiency and transparency with our innovative solution.`,
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TanStack Query",
        "TailwindCSS",
        "Socket.io",
        "Clerk",
        "React Hook Form",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://incident-ui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/incident.webm",
    },
    {
      title: "Globetrotter : The Ultimate Destination Guessing Game ✨",
      href: "https://headout-ui.vercel.app",
      dates: "Mar 2025",
      active: true,
      description: `Get ready for Globetrotter, the ultimate destination guessing game! 🌏✨ Dive into cryptic clue-based gameplay with real-time feedback and engaging animations. Discover fun facts about exciting destinations and challenge friends in a competitive mode. Built with React and Node.js, this immersive experience combines entertainment with learning. Join the adventure and test your travel IQ! 🌟`,
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TanStack Query",
        "TailwindCSS",
        "Socket.io",
        "Clerk",
        "React Hook Form",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://headout-ui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-4ce10aaa03354f37a800cef958f066d9.r2.dev/headout.webm",
    },
  ],
  hackathons: [],
} as const;
