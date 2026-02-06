import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ExpandableText from './ExpandableText';

import 'swiper/css';
import 'swiper/css/navigation';

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

export default function Projects({ t, projectList }) {
  return (
    <section
      id="projects"
      className="relative py-16 px-10 bg-gradient-to-b from-bgDarker/90 to-bgDarkest/80 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryLight mb-10 text-center">
        {t.title}
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
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
          <SwiperSlide key={idx} className="h-auto">
            
            {/* CARD BASE */}
            <div className="flex flex-col bg-bgDarker/70 border border-primary rounded-3xl 
                            overflow-hidden shadow-neumorph hover:shadow-glow 
                            hover:-translate-y-2 transition-all duration-300 h-full">

              {/* IMAGE */}
              {proj.image && (
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="h-40 w-full object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="flex flex-col p-6 flex-grow">

                {/* TEXT BLOCK */}
                <div>
                  <h3 className="text-primaryLight font-bold text-xl mb-3">
                    {proj.title}
                  </h3>

                  <ExpandableText text={proj.description} />
                </div>

                {/* TECH ICONS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((tech, i) => (
                    <Icon
                      key={i}
                      icon={techIcons[tech] || 'mdi:code-tags'}
                      className="text-primaryLight text-2xl"
                      title={tech}
                    />
                  ))}
                </div>

                {/* BUTTONS — SIEMPRE ABAJO */}
                <div className="flex gap-3 mt-auto pt-6">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-primary text-bgDarkest rounded-lg 
                                 px-3 py-2 text-sm font-semibold hover:bg-primaryLight transition-colors"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-primaryLight text-primaryLight 
                               rounded-lg px-3 py-2 text-sm font-medium hover:bg-primaryLight 
                               hover:text-bgDarkest transition-colors"
                  >
                    {t.viewRepo || "Ver repositorio"}
                  </a>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 -z-10 bg-primary/5 blur-2xl"></div>
    </section>
  );
}
