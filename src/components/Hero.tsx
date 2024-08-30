import { motion } from "framer-motion";
import Button from "./Button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        initial={{ translateX: -300, scale: 0.7 }}
        animate={{ translateX: 0, scale: 1 }}
        transition={{ duration: 0.75 }}
        className="pt-36 padding-x flex-1 max-h-[920px]"
      >
        <h1 className="hero__title">
          <span className="inline-block">
            Discover the
            <Typewriter
              options={{
                strings: [
                  "Freedom,",
                  "Premium,",
                  "Luxury,",
                  "Performance,",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <span className="inline-block">Start the Journey</span>
        </h1>

        <p className="mt-12 text-xl">
          Are you prepared for an unparalleled journey marked by
          Premium service? Enhance your car rental experience
          with our Premium Options, ensuring every moment is
          exceptional.
        </p>
        <Button text="Explore Cars" designs="mt-12" />
      </motion.div>

      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 300, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
          src="/hero.png"
          alt="bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
