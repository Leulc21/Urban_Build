"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-transparent" : "bg-white shadow"
      }`}
    >
      <div className="relative w-full">
        {!scrolled && (
          <motion.div
            className="flex items-center justify-between px-6 py-3 bg-dark text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/img/hero/logo.svg"
                alt="Logo"
                width={100}
                height={60}
                className="object-contain"
              />
            </motion.div>

            <motion.ul
              className="flex space-x-6 text-sm md:text-base font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.li whileHover={{ scale: 1.05 }}>
                <NavLink to="home">Home</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <NavLink to="about">About</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <NavLink to="services">Services</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <NavLink to="testimonial">Testimonial</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <NavLink to="contact">Contact</NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}

        {scrolled && (
          <motion.ul
            className="fixed top-2 left-1/2 -translate-x-1/2 flex w-fit rounded-full border border-black bg-white p-1 shadow-xl z-50"
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Tab setPosition={setPosition}>
              <Link to="home" smooth duration={500}>
                <motion.span whileHover={{ color: "#f59e0b" }}>
                  Home
                </motion.span>
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link to="about" smooth duration={500}>
                <motion.span whileHover={{ color: "#f59e0b" }}>
                  About
                </motion.span>
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link to="services" smooth duration={500}>
                <motion.span whileHover={{ color: "#f59e0b" }}>
                  Services
                </motion.span>
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link to="testimonial" smooth duration={500}>
                <motion.span whileHover={{ color: "#f59e0b" }}>
                  Testimonial
                </motion.span>
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link to="contact" smooth duration={500}>
                <motion.span whileHover={{ color: "#f59e0b" }}>
                  Contact
                </motion.span>
              </Link>
            </Tab>

            <Cursor position={position} />
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    smooth
    duration={500}
    className="cursor-pointer hover:text-amber-500"
  >
    {children}
  </Link>
);

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.li>
  );
};

const Cursor = ({ position }: { position: CursorPosition }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-amber-200 md:h-12"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default NavHeader;
