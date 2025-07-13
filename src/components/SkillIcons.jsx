import React from 'react';
import { Icon } from '@iconify/react';

const skills = [
  { name: "JavaScript", iconify: "logos:javascript" },
  { name: "React", iconify: "logos:react" },
  { name: "Node.js", iconify: "logos:nodejs-icon" },
  { name: "Python", iconify: "logos:python" },
  { name: "Tailwind CSS", iconify: "logos:tailwindcss-icon" },
  { name: "SQL", iconify: "logos:mysql" },
  { name: "Git", iconify: "logos:git-icon" },
  { name: "Next.js", iconify: "logos:nextjs-icon" },
  { name: "FastAPI", iconify: "simple-icons:fastapi" },
  { name: "PostgreSQL", iconify: "logos:postgresql" }
];

export default function SkillIcons() {
  return (
    <div className="flex gap-6 overflow-x-auto px-2 py-3">
      {skills.map(({ name, iconify }) => (
        <div
          key={name}
          title={name}
          className="flex flex-col items-center min-w-[110px] max-w-[120px] bg-bgDarker/70 border border-primary rounded-3xl p-5 shadow-neumorph hover:shadow-glow hover:scale-110 transition-transform duration-300 cursor-default select-none"
        >
          <Icon icon={iconify} className="text-primaryLight w-12 h-12 mb-3" />
          <span className="text-primaryLight font-semibold text-center text-lg">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
