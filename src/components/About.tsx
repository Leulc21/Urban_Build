"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        setIsVisible(true);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            >
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    About Us
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-dark text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      <span className="text-5xl text-amber-400">Our </span>
                      Construction Legacy
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our journey is defined by our dedication to building
                      strong foundations and creating iconic structures that
                      stand the test of time. With over three decades of
                      experience in the industry, we've shaped skylines and
                      transformed communities with expertise and integrity.
                    </p>
                  </div>
                </div>

                {/* CountUp Cards */}
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    {[
                      {
                        end: 33,
                        text: "Shaping Strong Foundations and Building Communities",
                      },
                      {
                        end: 125,
                        text: "From Residential to Commercial, We Deliver Excellence",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 * i, duration: 0.6 }}
                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex"
                      >
                        <h4 className="text-gray-900 font-bold font-manrope text-3xl sm:text-2xl md:text-4xl lg:text-5xl leading-9 text-center overflow-visible">
                          {isVisible && (
                            <CountUp start={0} end={item.end} duration={2.5} />
                          )}
                          +
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed text-center">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    {[
                      {
                        end: 26,
                        text: "Honoring Our Dedication to Innovation and Quality",
                      },
                      {
                        end: 99,
                        text: "Reflecting Our Focus on Quality and Client Satisfaction",
                        suffix: "%",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + 0.2 * i, duration: 0.6 }}
                        className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-2.5 inline-flex"
                      >
                        <h4 className="text-gray-900 font-bold font-manrope text-3xl sm:text-2xl md:text-4xl lg:text-5xl leading-9 text-center overflow-visible">
                          {isVisible && (
                            <CountUp start={0} end={item.end} duration={2.5} />
                          )}{" "}
                          {item.suffix ?? "+"}
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed text-center">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image section with animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:justify-start justify-center items-start flex"
            >
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/assets/img/about/img.jpg"
                  alt="About Us image"
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
