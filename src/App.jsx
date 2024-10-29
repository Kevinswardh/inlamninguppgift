import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/styles.scss";
import Header from "./sections/00-Universal/top-header";
import Home from "./views/01-Home";
import Features from "./views/02-Features";
import Contact from "./views/03-Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
