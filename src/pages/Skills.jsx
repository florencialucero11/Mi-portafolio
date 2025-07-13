import { Icon } from '@iconify/react';

export default function Skills({ t, lang }) {
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

  return (
    <section id="skills" className="relative py-16 px-6 bg-gradient-to-t from-bgDarkest via-bgDarker/90 to-bgDarkest max-w-5xl mx-auto">
      <h2 className="text-primaryLight text-4xl font-extrabold mb-10 text-center inline-block pb-3 animate-fadeIn">
        {t.title}
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-70 text-center leading-relaxed animate-fadeIn">
        {t.description}
      </p>
      <div id="skillsContainer" className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-bgDarker scroll-smooth px-2 py-3" aria-label={t.ariaLabel}>
        {skills.map(({ name, iconify }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[110px] max-w-[120px] bg-bgDarker/70 border border-primary rounded-3xl p-5 shadow-neumorph hover:shadow-glow hover:scale-110 transition-transform duration-300 cursor-default select-none animate-fadeInUp"
            title={name}
          >
            <Icon icon={iconify} className="w-12 h-12 mb-3 filter drop-shadow" />
            <span className="text-primaryLight font-semibold text-center text-lg">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
