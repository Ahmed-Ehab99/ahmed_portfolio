import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import LogoLoop from "../components/reactBits/LogoLoop/LogoLoop";
import { techLogos } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tools = () => {
    const loopRef = useRef(null);

    useGSAP(() => {
      gsap.from(loopRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: loopRef.current,
          start: "top 80%",
        },
      });
    }, []);
  return (
    <section id="tools" className="flex flex-col">
      <AnimatedHeaderSection
        subTitle={"Tools Used"}
        title={"Tools"}
        text={"A collection of tools i use to build websites"}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div ref={loopRef} className="h-48">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#cfa355"
          ariaLabel="Technology tools"
        />
      </div>
    </section>
  );
};

export default Tools;
