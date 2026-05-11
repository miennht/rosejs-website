import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.tsx'
import { Header } from '../components/layout/Header.tsx'
import { PageLayout } from '../components/layout/PageLayout.tsx'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <PageLayout>
        <Outlet />
      </PageLayout>
      <Footer />
    </div>
  )
}
