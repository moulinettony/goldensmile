'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/lib/i18n-config'

export default function LanguageSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((locale) => {
        const isCurrent = pathName.startsWith(`/${locale}`);
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={`
              font-semibold uppercase text-sm px-3 py-1 rounded-md transition-colors
              ${isCurrent
                ? 'bg-amber-500 text-white cursor-default'
                : 'text-gray-500 hover:bg-gray-200'
              }
            `}
          >
            {locale}
          </Link>
        )
      })}
    </div>
  )
}