"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Features() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const images = {
    "item-1": {
      image: "/assets/img/services/ser1.jpg",
      alt: "Construction project data visualization",
    },
    "item-2": {
      image: "/assets/img/services/ser5.jpg",
      alt: "Secure contractor authentication",
    },
    "item-3": {
      image: "/assets/img/services/ser6.jpg",
      alt: "Contractor ID and profile management",
    },
    "item-4": {
      image: "/assets/img/services/ser7.jpg",
      alt: "Construction analytics and reports",
    },
  };

  return (
    <motion.section
      id="services"
      className="py-6 md:py-6 lg:py-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20">
        <motion.div
          className="relative z-10 mx-auto max-w-2xl space-y-6 text-center"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-balance text-dark text-4xl font-semibold lg:text-6xl"
            variants={fadeInUp}
          >
            <motion.span
              className="text-amber-500"
              variants={fadeInUp}
              custom={0}
            >
              Building{" "}
            </motion.span>
            <motion.span variants={fadeInUp} custom={1}>
              smarter across Ethiopia
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2}>
            Empowering local construction firms, engineers, and contractors with
            digital tools to manage projects more efficiently and transparently.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0"
          variants={fadeInUp}
          custom={3}
        >
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            {/* Accordion Items */}
            {[
              {
                value: "item-1",
                icon: <Database className="size-4" />,
                label: "Construction Project Dashboard",
                content:
                  "Visualize site progress, materials, and financial data in one platform — ideal for large-scale projects across Addis Ababa, Bahir Dar, and beyond.",
              },
              {
                value: "item-2",
                icon: <Fingerprint className="size-4" />,
                label: "Secure Contractor Access",
                content:
                  "Authenticate project stakeholders and subcontractors using role-based access — ensure only certified individuals access sensitive data.",
              },
              {
                value: "item-3",
                icon: <IdCard className="size-4" />,
                label: "Contractor & Laborer Profiles",
                content:
                  "Keep detailed records of all workers, foremen, and contractors — including ID, skill level, and previous projects — essential for labor oversight.",
              },
              {
                value: "item-4",
                icon: <ChartBarIncreasingIcon className="size-4" />,
                label: "Real-time Analytics & Reporting",
                content:
                  "Generate reports on cost estimates, material usage, and project timelines — useful for reporting to investors, government offices, or clients.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                variants={fadeInUp}
                custom={index + 4}
              >
                <AccordionItem value={item.value}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AccordionTrigger>
                      <div className="flex items-center gap-2 text-base">
                        <motion.span
                          animate={
                            activeItem === item.value
                              ? { rotate: 360 }
                              : { rotate: 0 }
                          }
                          transition={{ duration: 0.6 }}
                        >
                          {item.icon}
                        </motion.span>
                        {item.label}
                      </div>
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.content}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            className="bg-background relative flex overflow-hidden rounded-3xl border p-2"
            variants={fadeInUp}
            custom={8}
          >
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-img`}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: "backOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    alt={images[activeItem].alt}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
