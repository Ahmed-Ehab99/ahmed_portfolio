import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Particles from "../components/reactBits/Particles";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const subTitle = "404 No Bugs Found";
  const title = isMobile ? "Ahmed" : "Ahmed Ehab";
  const text = `I craft scalable and efficient solutions
   that empower businesses to thrive
    in the digital landscape.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={subTitle}
        title={title}
        text={text}
        textColor={"text-black"}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        <Particles
          particleColors={["#cfa355", "#cfa355"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </section>
  );
};

export default Hero;
