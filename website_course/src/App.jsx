import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { routes } from './routes';
import ScrollToTop from './shared/ScrollToTop';
import PageMeta from './shared/PageMeta';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMeta />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
