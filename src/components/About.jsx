export default function About({ t }) {
  return (
    <section 
      id="about" 
      className="relative w-full px-6 py-16 md:py-24 bg-gradient-to-b from-bgDarkest/80 to-bgDarker/60"
    >
      <h2 
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-primary to-primaryLight mb-8 animate-fadeIn"
      >
        {t.aboutTitle}
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 text-Light leading-relaxed text-lg md:text-xl">
        {t.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="hover:text-primaryLight/90 transition-colors duration-300 animate-fadeIn">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
