import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ t, contactInfo }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_172a1mq',      
      'template_0x46txj', 
      form.current,
      'NEhYKyxOhXNjY2eDB'       
    )
    .then((result) => {
      console.log(result.text);
      alert('Mensaje enviado ✔️');
      form.current.reset();   
    }, (error) => {
      console.log(error.text);
      alert('Error al enviar ❌');
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-1 flex flex-col gap-6 animate-fadeInRight"
      aria-label="Formulario de contacto"
    >
      <input
        type="text"
        name="name"
        placeholder={t.form.name}
        required
        aria-required="true"
        className="p-4 rounded-xl border border-primary bg-bgDarker text-textLight placeholder:text-textLight/60 focus:outline-none focus:ring-4 focus:ring-primary transition"
      />
      <input
        type="email"
        name="email"
        placeholder={t.form.email}
        required
        aria-required="true"
        className="p-4 rounded-xl border border-primary bg-bgDarker text-textLight placeholder:text-textLight/60 focus:outline-none focus:ring-4 focus:ring-primary transition"
      />
      <textarea
        name="message"
        placeholder={t.form.message}
        rows="6"
        required
        aria-required="true"
        className="p-4 rounded-xl border border-primary bg-bgDarker text-textLight placeholder:text-textLight/60 focus:outline-none focus:ring-4 focus:ring-primary transition resize-none"
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-primary text-bgDarker rounded-full py-4 font-bold text-lg hover:bg-primaryLight shadow-lg hover:shadow-xl transition"
      >
        {t.form.send}
      </button>
    </form>
  );
}
