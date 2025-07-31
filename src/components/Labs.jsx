import { Icon } from '@iconify/react';

const techIcons = {
  react: 'logos:react',
  d3js: 'logos:d3',
  python: 'logos:python',
  openai: 'logos:openai-icon'
};

export default function Labs({ t, labList }) {
  return (
    <section id="labs" className="py-16 px-10 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryLight mb-6 text-center">
        {t.title}
      </h2>
      <p className="text-textLight text-center mb-12 max-w-3xl mx-auto">{t.description}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {labList.map((proj, idx) => (
          <div key={idx} className="bg-bgDarker/70 border border-primary rounded-3xl p-6 shadow-neumorph hover:shadow-glow transition-transform duration-300">
            <h3 className="text-primaryLight font-bold text-xl mb-3">{proj.title}</h3>
            <p className="text-textLight mb-4">{proj.description}</p>
            <div className="flex gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <Icon key={i} icon={techIcons[tech] || 'mdi:code-tags'} className="text-primaryLight text-2xl" />
              ))}
            </div>
            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primaryLight border border-primaryLight rounded-lg px-3 py-1 text-sm font-medium hover:bg-primaryLight hover:text-bgDarkest transition-colors"
            >
              Ver repositorio
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
