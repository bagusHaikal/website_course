import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './home';
import ProgramMandiri from './program-mandiri';
import Bootcamp from './bootcamp';
import PageLayout from './shared/PageLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/program-mandiri" element={<PageLayout><ProgramMandiri /></PageLayout>} />
        <Route path="/bootcamp" element={<PageLayout><Bootcamp /></PageLayout>} />
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
