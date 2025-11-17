"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-8">
                <h6 className="text-gray-400 text-base">About Us</h6>

                <h2 className="text-dark text-4xl font-bold leading-normal">
                  <span className="text-5xl text-amber-400">Our </span>
                  Construction Legacy
                </h2>

                <p className="text-gray-500 text-base leading-relaxed">
                  Our journey is defined by our dedication to building strong
                  foundations and creating iconic structures that stand the test
                  of time. With over three decades of experience, we&apos;ve
                  shaped skylines and transformed communities with expertise and
                  integrity.
                </p>
              </div>

              {/* STATS */}
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { end: 33, text: "Shaping Strong Foundations" },
                  { end: 125, text: "Delivering Excellence" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 * i, duration: 0.6 }}
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 flex flex-col items-center gap-2.5"
                  >
                    <h4 className="text-dark font-bold text-4xl">
                      {isVisible && (
                        <CountUp start={0} end={item.end} duration={2.5} />
                      )}
                      +
                    </h4>
                    <p className="text-gray-500 text-center">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative sm:w-[564px] sm:h-[646px] w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/assets/img/about/img.jpg"
                  alt="About Us image"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
