import { useProgress } from "@react-three/drei";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloader";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ContactSummary from "./sections/ContactSummary";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServiceSummary from "./sections/ServiceSummary";
import Tools from "./sections/Tools";
import Works from "./sections/Works";
import { SmoothCursor } from "./components/SmoothCursor";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsReady(true);
      }, 5000);
    }
  }, [progress]);

  return (
    <BrowserRouter>
      <ReactLenis
        root
        className="relative w-screen min-h-screen overflow-x-auto"
      >
        {!isReady && <Preloader />}
        <SmoothCursor />
        <div
          className={`${
            isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Tools />
          <Works />
          <ContactSummary />
          <Contact />
        </div>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
