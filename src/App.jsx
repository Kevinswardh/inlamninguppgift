// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

//#1# Views
import Home from "./1-Views/01-Home";
import Features from "./1-Views/02-Features";
import Contact from "./1-Views/03-Contact";

//#2# Sections
import Header from "./2-Sections/00-Universal/top-header";
import Footer from "./2-Sections/01-Home/99-Footer";

//#3# Assets
import "./3-Assets/styles/styles.scss";

//#5# Contexts
import { LocationProvider } from "./5-Contexts/LocationContext";

// Import CityDisplay component
import CityDisplay from "./4-Components/CityDisplay"; // Adjust the path accordingly

// Google Maps
import { LoadScript } from "@react-google-maps/api";

// API Key
const API_KEY = "AIzaSyBbN22s97A2DvD44ufNrIdGyf_Fv2N52Rs";

/////////////////////////////////////////////////////////////////////////////////
// App start

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <LoadScript googleMapsApiKey={API_KEY}>
          {" "}
          {/* LoadScript moved here */}
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <CityDisplay /> {/* Add the CityDisplay component here */}
          <Footer />
        </LoadScript>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
