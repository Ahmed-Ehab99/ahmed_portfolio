import ReactLenis from "lenis/react";
import { BrowserRouter } from "react-router-dom";
import { SmoothCursor } from "./components/SmoothCursor";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ContactSummary from "./sections/ContactSummary";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServiceSummary from "./sections/ServiceSummary";
import Tools from "./sections/Tools";
import Works from "./sections/Works";

const App = () => {
  return (
    <BrowserRouter>
      <ReactLenis
        root
        className="relative w-screen min-h-screen overflow-x-auto"
      >
        <SmoothCursor />
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Tools />
        <Works />
        <ContactSummary />
        <Contact />
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
