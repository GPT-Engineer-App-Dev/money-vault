import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import World from "./pages/World.jsx";
import Business from "./pages/Business.jsx";
import Markets from "./pages/Markets.jsx";
import Opinion from "./pages/Opinion.jsx";
import Technology from "./pages/Technology.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/markets" element={<Markets />} />
        <Route exact path="/opinion" element={<Opinion />} />
        <Route exact path="/technology" element={<Technology />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;