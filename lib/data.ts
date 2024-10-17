import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import restaurantFinder from "@/public/Restaurant Finder.png"
// import ticketImg from "@/public/ticket.png"
// import sellitImg from "@/public/sellit.png"

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
] as const

export const experiencesData = [
  {
    title: "Relationship Officer",
    location: "Equity Bank Kenya, Migori",
    description:
      "I spent two years at a bank in various roles, where I honed my customer experience skills and learned to effectively communicate user needs—insights that I apply to my web development projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Microverse",
    location: "Remote",
    description:
      "I graduated after 11 months of intensive study and quickly began mentoring junior web developers, offering technical support through code reviews and guidance.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Kenya, Migori",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and Ruby on Rails. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const

export const projectsData = [
  {
    title: "Restaurant Finder",
    description:
      "Restaurant Finder is a dynamic web application developed with JavaScript, Express.js, and PostgreSQL. It allows users to effortlessly discover restaurants, explore their price ranges, and submit reviews based on their service experiences. The application features a user-friendly interface that enhances the overall experience, enabling users to share their feedback and contribute to a vibrant community of food enthusiasts.",
    tags: ["Node", "Express", "React", "Javascript"],
    imageUrl: restaurantFinder,
    link: "https://github.com/zeff96/restaurants_ratings",
  },
] as const

export const skillsData = [
  "HTML5",
  "CSS3",
  "C/C++",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "Rust",
  "React",
  "Next.js",
  "Node.js",
  "Rails",
  "Git",
  "Tailwind",
  "RSpec",
  "MongoDB",
  "Redux",
  "Jest",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "SQL Server",
] as const
