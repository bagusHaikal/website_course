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
];
