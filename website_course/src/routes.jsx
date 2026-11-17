import { Suspense } from 'react';
import Home from './home';
import PageLayout from './shared/PageLayout';
import PageLoading from './shared/PageLoading';
import NotFound from './shared/NotFound';
import {
  ProgramMandiri,
  Bootcamp,
  Workshop,
  BelajarMandiri,
  AllPrograms,
  Partnership,
  HireOurGraduates,
  CourseDetail,
  Cart,
  CorporateTraining,
  Login,
  Register,
  FullStackWeb,
  MobileDev,
  AIDev,
} from './pages';

// `Home` eager (halaman pertama), sisanya lazy — lihat `pages.js`.
//
// `<Suspense>` untuk route yang memakai PageLayout ada DI DALAM PageLayout,
// jadi Navbar & Footer tidak ikut hilang saat chunk sedang diunduh.
export const routes = [
  { path: '/', element: <PageLayout><Home /></PageLayout> },
  { path: '/program-mandiri', element: <PageLayout><ProgramMandiri /></PageLayout> },
  { path: '/bootcamp', element: <PageLayout><Bootcamp /></PageLayout> },
  { path: '/workshop', element: <PageLayout><Workshop /></PageLayout> },
  { path: '/belajar-mandiri', element: <PageLayout><BelajarMandiri /></PageLayout> },
  { path: '/courses/:slug', element: <PageLayout><CourseDetail /></PageLayout> },
  { path: '/keranjang', element: <PageLayout><Cart /></PageLayout> },
  { path: '/all-programs', element: <PageLayout><AllPrograms /></PageLayout> },
  { path: '/corporate-training', element: <PageLayout><CorporateTraining /></PageLayout> },
  { path: '/partnership', element: <PageLayout><Partnership /></PageLayout> },
  { path: '/hire-our-graduates', element: <PageLayout><HireOurGraduates /></PageLayout> },
  // /login & /register tidak memakai PageLayout, jadi butuh boundary sendiri.
  { path: '/login', element: <Suspense fallback={<PageLoading />}><Login /></Suspense> },
  { path: '/register', element: <Suspense fallback={<PageLoading />}><Register /></Suspense> },
  { path: '/full-stack-web', element: <PageLayout><FullStackWeb /></PageLayout> },
  { path: '/mobile-dev', element: <PageLayout><MobileDev /></PageLayout> },
  { path: '/ai-dev', element: <PageLayout><AIDev /></PageLayout> },
  { path: '*', element: <PageLayout><NotFound /></PageLayout> },
];
