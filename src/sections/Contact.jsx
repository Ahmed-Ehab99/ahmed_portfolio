import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socialItems } from "../constants";

const Contact = () => {
  const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2 className="lg:text-3xl md:text-2xl">E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-lg tracking-wider lowercase md:text-xl lg:text-2xl">
                ahmedehab1677@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2 className="lg:text-3xl md:text-2xl">Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-lg lowercase md:text-xl lg:text-2xl">
                +201012159396
              </p>
            </div>
            <div className="social-link">
              <h2 className="lg:text-3xl md:text-2xl">Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socialItems.map((social, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <a
                      href={social.link}
                      className="lg:text-2xl md:text-xl text-lg leading-loose tracking-widest uppercase hover:text-white/80 transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                    {index !== socialItems.length - 1 && (
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
