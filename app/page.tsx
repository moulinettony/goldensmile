"use client";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { useState } from "react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

// Helper components
function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
      {children}
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <SectionIcon>{icon}</SectionIcon>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  text,
  title,
  rating,
}: {
  name: string;
  text: string;
  title?: string;
  rating?: number;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex mb-6 justify-center">
          {[...Array(rating || 5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl mx-0.5">
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic leading-relaxed text-center text-lg font-medium">
          "{text}"
        </p>
      </div>
      <div className="text-center border-t border-gray-100 pt-6">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>
        <p className="font-bold text-gray-800 text-lg">{name}</p>
        {title && (
          <p className="text-sm text-amber-600 font-medium mt-1">{title}</p>
        )}
      </div>
    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-green-600">
          {t("contact.form.success.description")}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
        >
          {t("contact.form.success.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-6 text-black">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.form.fullName")}
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 h-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder={t("contact.form.fullNamePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 h-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.form.phone")}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 h-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder={t("contact.form.phonePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.form.service")}
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">{t("contact.form.servicePlaceholder")}</option>
            <option value="general">
              {t("contact.form.services.general")}
            </option>
            <option value="cleaning">
              {t("contact.form.services.cleaning")}
            </option>
            <option value="implants">
              {t("contact.form.services.implants")}
            </option>
            <option value="cosmetic">
              {t("contact.form.services.cosmetic")}
            </option>
            <option value="emergency">
              {t("contact.form.services.emergency")}
            </option>
            <option value="other">{t("contact.form.services.other")}</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.form.message")}
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder={t("contact.form.messagePlaceholder")}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
      </button>
    </form>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-black py-20 overflow-hidden h-[80vh] max-lg:h-[calc(100vh-64px)] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abdelhamid.png"
            alt="Dr. Abdelhamid - Golden Smile Dental"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Overlay for better text readability */}

        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl font-bold text-gray-100 mb-6">
            {t("hero.title")}{" "}
            <span className="text-amber-500">Golden Smile</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg">
            {t("hero.cta")}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("services.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<span className="text-2xl">🦷</span>}
              title={t("services.general_checkups.title")}
              description={t("services.general_checkups.description")}
            />
            <ServiceCard
              icon={<span className="text-2xl">✨</span>}
              title={t("services.dental_implants.title")}
              description={t("services.dental_implants.description")}
            />
            <ServiceCard
              icon={<span className="text-2xl">🚨</span>}
              title={t("services.emergency.title")}
              description={t("services.emergency.description")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t("about.title")}
              </h2>
              <p className="text-gray-600 mb-6">{t("about.description1")}</p>
              <p className="text-gray-600 mb-6">{t("about.description2")}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-500 mr-2">✓</span>
                  Expert dental professionals
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-500 mr-2">✓</span>
                  Latest dental technology
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-500 mr-2">✓</span>
                  Personalized patient care
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/abdelhamid.png"
                alt="Dr. Abdelhamid"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("testimonials.title")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </div>

        {/* Testimonials Carousel Component */}
        <TestimonialsCarousel />

        {/* Decorative elements */}
        <div className="absolute max-lg:hidden top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("contact.form.title")}
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("contact.info.title")}
              </h3>

              {/* Contact Info Cards */}
              <div className="grid gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("contact.info.phone.label")}
                    </h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">
                      {t("contact.info.phone.hours")}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("contact.info.email.label")}
                    </h4>
                    <p className="text-gray-600">info@goldensmile.com</p>
                    <p className="text-sm text-gray-500">
                      {t("contact.info.email.response")}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("contact.info.address.label")}
                    </h4>
                    <p className="text-gray-600">
                      {t("contact.info.address.street")}
                    </p>
                    <p className="text-gray-600">
                      {t("contact.info.address.city")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-500 font-medium">
                      {t("contact.info.map.title")}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t("contact.info.map.clinic")}
                    </p>
                  </div>
                  {/* You can replace this with Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-75"
                  ></iframe>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("contact.info.map.clinic")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("contact.info.address.street")},{" "}
                        {t("contact.info.address.city")}
                      </p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=123+Dental+Street+City+State"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
                    >
                      {t("contact.info.map.directions")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
