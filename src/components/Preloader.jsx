import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const Preloader = () => {
  const comp = useRef(null);
  const [, setProgress] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      let progressObj = { value: 0 };

      t1.to(".preloader-background", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          progressObj,
          {
            value: 100,
            duration: 3,
            ease: "power2.inOut",
            onUpdate: () => {
              setProgress(Math.round(progressObj.value));
            },
          },
          "-=0.7"
        )
        .from(
          "#preloader-title",
          {
            opacity: 0,
            yPercent: -200,
            letterSpacing: "0.1em",
            duration: 0.8,
            ease: "power1.out",
          },
          "-=2.2"
        )
        .from(
          "#preloader-subtitle",
          { opacity: 0, yPercent: 200, duration: 0.8, ease: "power1.out" },
          "-=0.5"
        )
        .to(comp.current, {
          yPercent: -100,
          duration: 1,
          ease: "power2.in",
          delay: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="preloader-container fixed inset-0 z-50 flex items-center justify-center"
      ref={comp}
      style={{ pointerEvents: "none" }}
    >
      <div className="preloader-background absolute inset-0 opacity-100 bg-black transition-opacity duration-700" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1
          id="preloader-title"
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-primary text-center drop-shadow-lg"
        >
          Frontend Developer
        </h1>

        <h2
          id="preloader-subtitle"
          className="text-5xl font-semibold text-gold text-center mt-2"
        >
          Are you ready?!
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
