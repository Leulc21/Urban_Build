"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[70vh] bg-no-repeat bg-cover bg-center relative text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/img/hero/bg.jpg')" }}
    >
      {/* Logo Section with Entrance Animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
      >
        <img
          src="/assets/img/hero/logo.svg"
          alt="Leul Construction PLC Logo"
          className="h-48 w-64 object-contain"
        />
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="p-6 text-center mt-8 max-w-3xl"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mt-6 mb-6 leading-tight"
        >
          <span className="text-amber-500">Building</span>{" "}
          <span className="">the Future, Restoring the Past</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl font-medium mb-8"
        >
          We deliver high-quality construction solutions—on time, on budget, and
          with unmatched craftsmanship.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, x: 4 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 300,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-full shadow-lg group"
        >
          See Our Work
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-5 h-5"
          >
            <ArrowRight className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
