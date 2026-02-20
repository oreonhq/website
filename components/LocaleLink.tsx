'use client'

import NextLink from 'next/link'
import { useTranslations } from '@/contexts/I18nContext'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: React.ReactNode
}

export default function LocaleLink({ href, ...rest }: Props) {
  const { locale } = useTranslations()
  const isInternal = href.startsWith('/') && !href.startsWith('//')
  const localizedHref = isInternal ? `/${locale}${href === '/' ? '' : href}` : href
  return <NextLink href={localizedHref} {...rest} />
}
