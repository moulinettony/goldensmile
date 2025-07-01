'use client';
import { useLanguage } from './LanguageProvider';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  text: string;
  title?: string;
  rating: number;
  profileImage: string;
}

function TestimonialCard({ name, text, title, rating, profileImage }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={profileImage}
            alt={`${name} profile picture`}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {title && <p className="text-sm text-gray-500">{title}</p>}
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed italic">{text}</p>
    </div>
  );
}

interface TestimonialsCarouselProps {
  animationClass?: string;
}

export default function TestimonialsCarousel({ animationClass = 'animate-slide-left' }: TestimonialsCarouselProps) {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      text: t('testimonials.testimonial1.quote'),
      title: t('testimonials.testimonial1.title'),
      rating: 5,
      profileImage: '/Sarah.png'
    },
    {
      name: t('testimonials.testimonial2.name'),
      text: t('testimonials.testimonial2.quote'),
      title: t('testimonials.testimonial2.title'),
      rating: 5,
      profileImage: '/Chen.png'
    },
    {
      name: t('testimonials.testimonial3.name'),
      text: t('testimonials.testimonial3.quote'),
      title: t('testimonials.testimonial3.title'),
      rating: 5,
      profileImage: '/Emily.png'
    },
    {
      name: t('testimonials.testimonial4.name'),
      text: t('testimonials.testimonial4.quote'),
      title: t('testimonials.testimonial4.title'),
      rating: 5,
      profileImage: '/David.png'
    }
  ];

  return (
    <div className="w-screen pt-2 pb-8 overflow-hidden relative left-1/2 right-1/2 -mx-[50vw]">
      <div className={`flex ${animationClass}`}>
        {/* First set of testimonials */}
        {testimonials.map((testimonial, index) => (
          <div key={`first-${index}`} className="flex-shrink-0 px-2">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial, index) => (
          <div key={`second-${index}`} className="flex-shrink-0 px-2">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}