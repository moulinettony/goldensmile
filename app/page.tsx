// app/page.tsx

import Image from "next/image";
import React from "react";

// --- HELPER COMPONENTS ---
const SectionIcon = ({ children }: { children: React.ReactNode }) => ( <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">{children}</div> );
const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => ( <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"><div className="text-amber-500 mb-4">{icon}</div><h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3><p className="text-gray-600 text-sm/6">{description}</p></div> );
const TestimonialCard = ({ quote, name, title }: { quote: string, name: string, title: string }) => ( <div className="bg-amber-50 p-6 rounded-lg shadow-sm"><p className="text-gray-600 italic">"{quote}"</p><div className="mt-4 font-semibold text-gray-800">- {name}</div><div className="text-sm text-amber-600">{title}</div></div> );


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-68px)] flex items-center justify-center text-white">
        <Image src="/abdelhamid.png" alt="Portrait du dentiste principal dans une clinique moderne" fill className="absolute z-0 object-cover object-[55%]" priority />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="z-20 text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Façonner Votre Parfait <span className="text-amber-400">Golde Smile</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Découvrez une dentisterie de pointe dans un environnement confortable et convivial. Votre sourire est notre passion.
          </p>
          <a href="#contact" className="bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-amber-600 transition-transform transform hover:scale-105">
            Prendre un rendez-vous
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></SectionIcon>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Soins Dentaires Complets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Nous offrons une gamme complète de services dentaires pour répondre à tous les besoins de votre famille.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Contrôles Généraux" description="Nettoyages et examens de routine pour maintenir une santé bucco-dentaire optimale et prévenir les problèmes futurs." />
            <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Contrôles Généraux" description="Nettoyages et examens de routine pour maintenir une santé bucco-dentaire optimale et prévenir les problèmes futurs." />
            <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Implants Dentaires" description="Une solution permanente et d'apparence naturelle pour remplacer les dents manquantes et restaurer votre sourire." />
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/abdelhamid.png" alt="Le dentiste principal souriant" width={500} height={500} className="rounded-lg shadow-xl object-cover w-full h-full" />
            </div>
            <div className="text-center md:text-left">
              <SectionIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></SectionIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Rencontrez Notre Équipe d'Experts</h2>
              <p className="text-gray-600 mb-4">Chez Golden Smile, notre force réside dans notre équipe dévouée et compatissante. Dirigés par nos dentistes experts, nous nous engageons à fournir des soins personnalisés en utilisant les dernières technologies dentaires.</p>
              <p className="text-gray-600">Nous croyons en l'établissement de relations durables avec nos patients, basées sur la confiance et la communication ouverte. Votre confort et votre santé sont nos priorités absolues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></SectionIcon>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Ce Que Disent Nos Patients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Nous sommes fiers d'avoir créé des milliers de sourires heureux et sains.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah J." title="Contrôle de routine" quote="L'expérience dentaire la plus confortable et professionnelle que j'aie jamais eue. Le personnel de Golden Smile est incroyablement amical et attentionné." />
            <TestimonialCard name="Michael B." title="Implants dentaires" quote="L'équipe a complètement transformé mon sourire avec des implants dentaires. Le processus a été sans faille et les résultats sont meilleurs que je n'aurais jamais pu l'imaginer. Je recommande vivement !" />
            <TestimonialCard name="Émilie T." title="Blanchiment cosmétique" quote="J'étais nerveuse à l'idée du blanchiment des dents, mais l'équipe m'a mise à l'aise. Mon sourire n'a jamais été aussi éclatant. Merci, Golden Smile !" />
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <SectionIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></SectionIcon>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Nous Contacter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Vous avez une question ou souhaitez prendre rendez-vous ? Remplissez le formulaire ci-dessous ou appelez-nous.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form action="#" method="POST" className="space-y-4">
                <div><input type="text" name="name" placeholder="Votre Nom" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" required /></div>
                <div><input type="email" name="email" placeholder="Votre E-mail" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" required /></div>
                <div><input type="tel" name="phone" placeholder="Votre Téléphone (Optionnel)" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" /></div>
                <div><textarea name="message" rows={5} placeholder="Votre Message" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" required></textarea></div>
                <button type="submit" className="w-full bg-amber-500 text-white font-bold text-lg p-3 rounded-md hover:bg-amber-600 transition-colors">Envoyer le Message</button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31872.2554606472!2d34.748156006685576!3d32.05750914715988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b99fd36aded%3A0xef7d47503f4a8eda!2sEasy%20Smile%20Dental%20Clinic%20-%20Dr.%20Luke!5e1!3m2!1sen!2sma!4v1750862089894!5m2!1sen!2sma" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="font-bold text-lg text-gray-800">Nous Rendre Visite</h4>
                <p className="text-gray-600">123 Avenue Dentaire, Cité du Sourire, ST 12345</p>
                <h4 className="font-bold text-lg text-gray-800 mt-4">Nous Appeler</h4>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}