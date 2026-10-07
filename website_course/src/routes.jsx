import Home from './home';
import ProgramMandiri from './program-mandiri';
import Bootcamp from './bootcamp';
import Workshop from './workshop';
import BelajarMandiri from './belajar-mandiri';
import AllPrograms from './all-programs';
import Partnership from './partnership';
import HireOurGraduates from './hire-graduates';
import CourseDetail from './courses/CourseDetail';
import PageLayout from './shared/PageLayout';
import CorporateTrainingLayout from './corporate-training/Layout';
import Login from './login';
import Register from './register';
import FullStackWeb from './fullstack-web';
import MobileDev from './mobile-dev';
import AIDev from './ai-dev';

export const routes = [
  { path: '/', element: <PageLayout><Home /></PageLayout> },
  { path: '/program-mandiri', element: <PageLayout><ProgramMandiri /></PageLayout> },
  { path: '/bootcamp', element: <PageLayout><Bootcamp /></PageLayout> },
  { path: '/workshop', element: <PageLayout><Workshop /></PageLayout> },
  { path: '/belajar-mandiri', element: <PageLayout><BelajarMandiri /></PageLayout> },
  { path: '/courses/:slug', element: <PageLayout><CourseDetail /></PageLayout> },
  { path: '/all-programs', element: <PageLayout><AllPrograms /></PageLayout> },
  { path: '/corporate-training', element: <CorporateTrainingLayout /> },
  { path: '/partnership', element: <PageLayout><Partnership /></PageLayout> },
  { path: '/hire-our-graduates', element: <PageLayout><HireOurGraduates /></PageLayout> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/full-stack-web', element: <PageLayout><FullStackWeb /></PageLayout> },
  { path: '/mobile-dev', element: <PageLayout><MobileDev /></PageLayout> },
  { path: '/ai-dev', element: <PageLayout><AIDev /></PageLayout> },
];
