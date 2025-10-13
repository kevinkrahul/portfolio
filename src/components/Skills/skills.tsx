"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, FC } from "react";
// import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";
import { LuCircleSlash } from "react-icons/lu";
// ---------------- Types ----------------
interface SkillCategory {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  languages: string[];
  tools: string[];
}

type SkillCategoryKey = "web" | "api" | "ai";

// ---------------- Data ----------------
const skillCategories: Record<SkillCategoryKey, SkillCategory> = {
  web: {
    title: "Web Development",
    icon: LuCircleSlash,
    description: "Building modern, responsive web applications",
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Flask",
      "SQL",
      "Drizzle",
      "Prisma",
      "Python",
      "Django",
      "Supabase",
    ],
    tools: [
      "Visual Studio Code",
      "Git",
      "Github",
      "Figma",
      "Docker",
      "Cloudflare",
      "Vercel",
      "Railway"
    ],
  },
  api: {
    title: "REST API",
    icon: LuCircleSlash,
    description: "Creating robust and scalable backend services",
    languages: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "ORM"
    ],
    tools: [
      "Postman",
      "Docker",
      "Git",
      "Github",
      "Cloudflare",
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    icon: LuCircleSlash,
    description: "Developing intelligent solutions with ML/AI",
    languages: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
      "OpenAI API",
      "Gemini API",
      "Retrieval-Augmented Generation"
    ],
    tools: [
      "Jupyter Notebook",
      "Visual Studio Code",
      "Git",
      "Github",
      "Google Colab",
      "Google Cloud AI"
    ],
  }};

// ---------------- Components ----------------
interface SkillCardProps {
  skill: SkillCategory;
  isSelected: boolean;
  onClick: () => void;
}

const SkillCard: FC<SkillCardProps> = ({ skill, isSelected, onClick }) => {
  const Icon = skill.icon;
  return (
  <Link href="/#skillbar"  >
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer flex items-center justify-center group p-6 rounded-2xl backdrop-blur-lg border bg-gradient-to-r from-gray-200/60 to-white/40 dark:bg-none  transition-all duration-300 ${
        isSelected
          ? "bg-white/20 border-black border-2 shadow-lg"
          : "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
      }`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {!isSelected && (
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
      )}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl transition-all duration-300 ${
            isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
          }`}
        >
          <Icon className="w-8 h-8 text-black" />
        </div>
        <div>
          <h3 className="font-semibold text-black dark:text-gray-200 text-lg mb-2">
            {skill.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

interface SkillDetailsProps {
  selectedSkill: SkillCategory | null;
}

const SkillDetails: FC<SkillDetailsProps> = ({ selectedSkill }) => {
  if (!selectedSkill) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      {/* Languages & Frameworks */}
      <motion.div
      id="skillbar"
        className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black dark:text-gray-200 mb-6 text-center">
          Languages & Frameworks
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {selectedSkill.languages.map((lang, index) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 
                border border-gray-400/40 rounded-full text-black font-medium
                backdrop-blur-sm hover:scale-105 transition-transform cursor-default
                hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-black dark:text-gray-200 mb-6 text-center">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {selectedSkill.tools.map((tool, index) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-4 py-2 bg-gradient-to-r from-gray-300/60 to-gray-100/40 
                border border-gray-500/40 rounded-full text-black font-medium
                backdrop-blur-sm hover:scale-105 transition-transform cursor-default
                hover:bg-gradient-to-r hover:from-gray-400/60 hover:to-gray-200/50"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ---------------- Main Component ----------------
const Skills: FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryKey>("web");

  return (
    <div className="h-auto ">
      <div className="mx-auto container px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-gray-200 ">
            Skills & Expertise
          </h2>
          <p className="dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my technical skills across different domains. Click on any
            category to see the specific technologies and tools I work with.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(skillCategories).map(([key, skill], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                skill={skill}
                isSelected={selectedCategory === key}
                onClick={() => setSelectedCategory(key as SkillCategoryKey)}
              />
            </motion.div>
          ))}
        </div>

        {/* Skill Details */}
        <AnimatePresence mode="wait">
          <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
