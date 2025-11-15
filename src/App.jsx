import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import PageNotFound from "./pages/PageNotFound";

// Min BrowserRouter som styr  vilka Routes (sidor) som ska fungera i webbläsaren. 
// Satte navbar och footer utanför Routes gör att de syns på samtliga sidor då de är konstanta.

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header>
          <Navbar />
        </header>

        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
