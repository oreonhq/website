import type { Metadata } from 'next'
import { LOCALE_CODES } from '@/lib/i18n/config'
import { getMessages } from '@/lib/i18n/get-messages'
import { I18nProvider } from '@/contexts/I18nContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SetLocaleAttr } from '@/components/SetLocaleAttr'

export const metadata: Metadata = {
  title: 'Oreon HQ',
  description: 'Software built for what comes next.',
}

export async function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const locale = resolvedParams.locale
  const messages = await getMessages(locale)
  return (
    <I18nProvider locale={locale} messages={messages}>
      <SetLocaleAttr locale={locale} />
      <Header />
      {children}
      <Footer />
    </I18nProvider>
  )
}
