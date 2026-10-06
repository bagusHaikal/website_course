import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './home';
import ProgramMandiri from './program-mandiri';
import Bootcamp from './bootcamp';
import Workshop from './workshop';
import PageLayout from './shared/PageLayout';
import CorporateTraining from './corporate-training';
import BelajarMandiri from './belajar-mandiri';
import AllPrograms from './all-programs';
import Partnership from './partnership';
import HireOurGraduates from './hire-graduates';
import Login from './login';
import Register from './register';
import FullStackWeb from './fullstack-web';
import ScrollToTop from './shared/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/program-mandiri" element={<PageLayout><ProgramMandiri /></PageLayout>} />
        <Route path="/bootcamp" element={<PageLayout><Bootcamp /></PageLayout>} />
        <Route path="/workshop" element={<PageLayout><Workshop /></PageLayout>} />
        <Route path="/belajar-mandiri" element={<PageLayout><BelajarMandiri /></PageLayout>} />
        <Route path="/all-programs" element={<PageLayout><AllPrograms /></PageLayout>} />
        <Route path="/corporate-training" element={<PageLayout><CorporateTraining /></PageLayout>} />
        <Route path="/partnership" element={<PageLayout><Partnership /></PageLayout>} />
        <Route path="/hire-our-graduates" element={<PageLayout><HireOurGraduates /></PageLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/full-stack-website-development" element={<PageLayout><FullStackWeb /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
