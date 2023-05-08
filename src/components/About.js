import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
let work = [
  {
    img: "https://ocpl.tech/assets/web-a4d5590f.webp",
    name: "Cloud Computing Services",
  },
  {
    img: "https://ocpl.tech/assets/backend-c5a89967.webp",
    name: "Kubernetes, Docker and Microservices",
  },
  {
    img: "https://ocpl.tech/assets/creator-599c054e.webp",
    name: "AI and Machine Learning",
  },
  {
    img: "https://ocpl.tech/assets/mobile-c544c68d.webp",
    name: "Edge Computing",
  },
  {
    img: "https://ocpl.tech/assets/backend-c5a89967.webp",
    name: "Internet of Things (IoT)",
  },
  {
    img: "https://ocpl.tech/assets/creator-599c054e.webp",
    name: "Blockchain Development",
  },
  {
    img: "https://ocpl.tech/assets/web-a4d5590f.webp",
    name: "Web and Mobile Development",
  },
  {
    img: "https://ocpl.tech/assets/mobile-c544c68d.webp",
    name: "DevSecOps",
  },
];
const About = () => {
  return (
    <div className="mt-20" id="about">
      <div>
        <h1 className="font-sans text-[white] text-5xl font-extrabold">
          Overview.
        </h1>
        <p className="text-[#cfd0d3] text-xl font-sans font-normal py-10 w-9/12  tracking-wide leading-7">
          At Ocpl Tech, we are a leading Blockchain Development Company
          dedicated to driving innovation for businesses in India and worldwide.
          Our talented team of experts skillfully leverages cutting-edge
          technology to create custom blockchain solutions and high-speed web,
          Android, and iOS applications. By partnering with us, you'll
          experience a powerful blend of dedication and advanced technology that
          simplifies processes and accelerates your business growth. Choose Ocpl
          Tech and embark on a journey toward remarkable success.
        </p>
      </div>

      <div className="  grid md:grid-cols-2 gap-4 lg:grid-cols-4 gap-4">
        {work.map((item) => {
          return (
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              gyroscope={true}
            >
              <motion.div
                className="key-con"
                initial={{ x: -20 }}
                animate={{ x: 20 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div
                  key={item}
                  className=" w-64 h-72 bg-[#000] rounded-2xl border-4 border-cyan-200 flex flex-col justify-evenly align items-center"
                >
                  <img src={item.img} className="w-20 h-20" alt="work-logo" />
                  <h1 className="font-medium text-white text-lg text-center">
                    {item.name}
                  </h1>
                </div>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default About;
