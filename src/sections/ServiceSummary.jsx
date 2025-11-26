import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    // First title: comes from right
    gsap.fromTo(
      "#title-service-1",
      { xPercent: 100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#title-service-1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        ease: "power2.out",
      }
    );

    // Second title: comes from left
    gsap.fromTo(
      "#title-service-2",
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#title-service-2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        ease: "power2.out",
      }
    );

    // Third title: comes from right
    gsap.fromTo(
      "#title-service-3",
      { xPercent: 100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#title-service-3",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        ease: "power2.out",
      }
    );

    // Fourth title: comes from left
    gsap.fromTo(
      "#title-service-4",
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#title-service-4",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        ease: "power2.out",
      }
    );
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Architucture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center md:gap-3 gap-1"
      >
        <p>APIs</p>
        <div className="w-6 h-1 md:w-16 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-6 h-1 md:w-16 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4">
        <p>Performance</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
