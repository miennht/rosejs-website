import { Outlet } from 'react-router-dom'
import { PlausibleLoader } from '../components/analytics/PlausibleLoader.tsx'
import { Footer } from '../components/layout/Footer.tsx'
import { Header } from '../components/layout/Header.tsx'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { JsonLd } from '../components/seo/StructuredData.tsx'
import { organizationGraphSchema } from '../components/seo/siteSchemas.ts'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <JsonLd data={organizationGraphSchema()} />
      <PlausibleLoader />
      <Header />
      <PageLayout>
        <Outlet />
      </PageLayout>
      <Footer />
    </div>
  )
}
