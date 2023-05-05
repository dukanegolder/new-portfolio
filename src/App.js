import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";

export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}