import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './RootLayout.tsx'
import { About } from '../pages/About.tsx'
import { BlogArticle } from '../pages/BlogArticle.tsx'
import { CaseStudies } from '../pages/CaseStudies.tsx'
import { CaseStudyDetail } from '../pages/CaseStudyDetail.tsx'
import { Contact } from '../pages/Contact.tsx'
import { Home } from '../pages/Home.tsx'
import { Insights } from '../pages/Insights.tsx'
import { NotFound } from '../pages/NotFound.tsx'
import { Schedule } from '../pages/Schedule.tsx'
import { Services } from '../pages/Services.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'insights', element: <Insights /> },
      { path: 'insights/:slug', element: <BlogArticle /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'case-studies/:slug', element: <CaseStudyDetail /> },
      { path: 'contact', element: <Contact /> },
      { path: 'schedule', element: <Schedule /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
