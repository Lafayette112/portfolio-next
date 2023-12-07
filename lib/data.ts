import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aisaas from "@/public/ai-saas.png";
import cryptohunter from "@/public/crypto-hunter.png";
import shareme from "@/public/shareme.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer and Hardware Consultant",
    location: "Uccle",
    description:
      "Front-End development, UI / UX Design and PC building for clients.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Computer Operator",
    location: "Brussels",
    description:
      "I worked as a computer operator for 3 years in LFT Blue Store. Coordinating team activities, writing technical documentations, managing the inventory and building PCs was my daily life.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Hotel and Restaurant Manager",
    location: "Woluwe-Saint-Pierre",
    description:
      "My first full time job in the hotel industry. The supervision of operations between services was quite challenging but motivating.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Genius AI",
    description:
      "Genius is an all in one platform which allows you to generate AI content 10x faster. It includes a conversation, image, video, music and code generation. Mobile responsive. Free trial available.",
    tags: ["Next.js", "Tailwind", "Prisma", "Shadcn", "Stripe"],
    imageUrl: aisaas,
    url: "https://genius-monark-ai.vercel.app",
  },
  {
    title: "Crypto Hunter",
    description:
      "Web application that allows you to get all the info regarding crypto currency. It integrates ranking, current price, market cap and a graph adjustable between 24h and a year.",
    tags: ["React", "Material UI", "ChartJS"],
    imageUrl: cryptohunter,
    url: "https://crypto-hunter-mk.netlify.app/ ",
  },
  {
    title: "ShareMe",
    description:
      "ShareMe is a full stack social media web application with the possibility to add, edit, comment and save your favorite pictures. Share your past, present and future with the community.",
    tags: ["React", "Tailwind", "Sanity", "Google Authentication"],
    imageUrl: shareme,
    url: "https://shareme-monark.netlify.app ",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Git",
  "Webflow",
  "Strapi",
  "MongoDB",
  "Supabase",
  "Sanity",
  "Figma",
] as const;
