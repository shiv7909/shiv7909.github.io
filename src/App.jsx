import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import DeleteAccount from './pages/DeleteAccount';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/contact" element={<Contact />} />

        {/* Redirects from old policy URLs */}
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/privacypolicy" element={<Navigate to="/privacy" replace />} />
        <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/refund-policy" element={<Navigate to="/refund" replace />} />

        {/* Fallback for unknown routes (note: /t/* and /q/* are reserved) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
