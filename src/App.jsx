import ReactLenis from "lenis/react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import { SmoothCursor } from "./components/SmoothCursor";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServiceSummary from "./sections/ServiceSummary";
import Tools from "./sections/Tools";
import Works from "./sections/Works";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <BrowserRouter>
      <ReactLenis
        root
        className="relative w-screen min-h-screen overflow-x-auto"
      >
        {!isMobile && <SmoothCursor />}
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Tools />
        <Works />
        <Contact />
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
