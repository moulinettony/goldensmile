import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

// Helper for Social Icons
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
    {children}
  </a>
);

export default async function Footer({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold">Golden <span className="text-amber-500">Smile</span></h3>
            <p className="text-gray-400 mt-2 text-sm">{dictionary.footer.tagline}</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{dictionary.footer.quickLinks}</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">{dictionary.header.services}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{dictionary.header.about}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{dictionary.header.contact}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{dictionary.footer.contactInfo}</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mt-1 mr-2"></span> 
                <span>{dictionary.footer.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">☎</span> 
                <a href={`tel:${dictionary.footer.phone}`} className="hover:text-white transition-colors">{dictionary.footer.phone}</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{dictionary.footer.social}</h4>
            <div className="flex mt-4 space-x-4">
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.65-1.002.274-2.112.223-2.76.026.613 2.023 2.384 3.325 4.492 3.362-1.763 1.39-3.921 2.162-6.182 2.162-.423 0-.837-.025-1.244-.073 2.261 1.453 4.953 2.302 7.876 2.302 9.256 0 14.075-7.547 13.684-14.476.982-.701 1.833-1.576 2.512-2.6z"/></svg></SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Golden Smile. {dictionary.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}