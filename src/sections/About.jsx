import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I’m a passionate Frontend Developer with strong experience in React.js and Next.js technologies.
   I build modern web applications using Next.js, TanStack Query, Tailwind CSS, ShadCN UI and Framer Motion on the frontend.
    I’m also always open to learning and using new tools that enhance user experience and developer productivity.
    Every day i try to improve myself and stay up-to-date with everything new
    i have the ability to collaborate with UI/UX designers and Backend developers to build full and perfect websites`;

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.8,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 10%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/assets/images/me.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
