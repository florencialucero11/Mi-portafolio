import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';

const techIcons = {
  react: 'logos:react',
  nextjs: 'logos:nextjs-icon',
  fastapi: 'simple-icons:fastapi',
  postgresql: 'logos:postgresql',
  python: 'logos:python',
  nodejs: 'logos:nodejs-icon',
  css: 'logos:css-3',
  sql: 'logos:mysql',
  tailwind: 'logos:tailwindcss-icon',
  git: 'logos:git-icon',
  javascript: 'logos:javascript'
};

import 'swiper/css'; // solo el core, nada más

export default function Projects({ t, projectList }) {
  return (
    <section 
      id="projects" 
      className="relative py-16 px-6 bg-gradient-to-b from-bgDarker/90 to-bgDarkest/80 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryLight mb-10 text-center">
        {t.title}
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 }
        }}
        className="!pb-6"
      >
        {projectList.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col justify-between bg-bgDarker/70 border border-primary rounded-3xl 
                            p-6 shadow-neumorph hover:shadow-glow hover:scale-105 transition-transform duration-300">
              <div>
                <h3 className="text-primaryLight font-bold text-xl mb-3">{proj.title}</h3>
                <p className="text-textLight mb-4">{proj.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((tech, i) => (
                  <Icon
                    key={i}
                    icon={techIcons[tech] || 'mdi:code-tags'}
                    className="text-primaryLight text-2xl"
                    title={tech}
                  />
                ))}
              </div>
              <a 
                href={proj.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block text-primaryLight border border-primaryLight rounded-lg 
                           px-3 py-1 text-sm font-medium hover:bg-primaryLight hover:text-bgDarkest transition-colors"
              >
                {t.viewRepo || "Ver repositorio"}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 -z-10 bg-primary/5 blur-2xl"></div>
    </section>
  );
}
