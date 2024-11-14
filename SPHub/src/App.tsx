import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './hooks/useTheme';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Work from './pages/Work';
import Services from './pages/Services';
import Leadership from './pages/Leadership';
import Forum from './pages/Forum';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}