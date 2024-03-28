import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-End Web react.js
        </motion.h1>

        <p className="sub-title">
          I’m Ziad Mostafa, a
Web Developer

Expert in HTML, CSS, JavaScript, React.js, and Bootstrap.
Worked as a web developer for a short period of time.
Designed and developed high-quality and distinctive websites using HTML, CSS, JavaScript, and Bootstrap.
Extensive experience in improving and optimizing website performance and user experience.
Designed and developed responsive websites for smartphones and tablets.
Skills:

HTML
CSS
JavaScript
React.js
Bootstrap
Website performance optimization
Responsive website design and development
        </p>

        <div className="all-icons flex">
          <a href="https://github.com/ziadmustafa1"><div className="icon icon-github"></div></a>
          <a href="https://www.linkedin.com/in/ziad-mostafa-2a4315179"><div className="icon icon-linkedin"></div></a>
          <a href="https://wa.link/njzv63"><div className="icon"> <i className="fa-brands fa-square-whatsapp"></i> </div></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
