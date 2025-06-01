"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 }); // Trigger when 20% of section is visible

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cards = [
    {
      logo: "/assets/img/logoani/lg3.png",
      alt: "Zemen Bank",
      text: `Working with Leul and his team on the construction of our new Zemen Bank headquarters has been an exceptional experience...`,
      name: "Dereje Zenebe",
      title: "CEO of Zemen Bank S.C., Ethiopia",
      avatar: "/assets/img/avator/ab4.jfif",
      fallback: "EC",
      className: "sm:col-span-2 sm:p-6 lg:row-span-2",
    },
    {
      logo: "/assets/img/logoani/lg1.png",
      alt: "Ethio Telecom",
      text: `The construction of our new Ethio Telecom facility has been a smooth and successful endeavor...`,
      name: "Frehiwot Tamru",
      title: "CEO of Ethio Telecom, Ethiopia",
      avatar: "/assets/img/avator/ab2.webp",
      fallback: "FT",
      className: "md:col-span-2",
    },
    {
      logo: "/assets/img/logoani/lg5.png",
      alt: "CBE",
      text: `Our collaboration with Leul and his team for the construction of our new facilities has been an absolute success.`,
      name: "Abie Sano",
      title: "President of Commercial Bank of Ethiopia",
      avatar: "/assets/img/avator/ab1.jpg",
      fallback: "AS",
      className: "",
    },
    {
      logo: "/assets/img/logoani/lg10.svg",
      alt: "Skanska Logo",
      text: `We are thrilled with the outcome and look forward to future collaborations...`,
      name: "Mesfin Tasew Bekele",
      title: "Group CEO of Ethiopian Airlines",
      avatar: "/assets/img/avator/ab3.jpg",
      fallback: "MT",
      className: "card variant-mixed",
    },
  ];

  return (
    <section id="testimonial" className="py-8 md:py-8" ref={ref}>
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
        >
          <h2 className="text-4xl font-medium lg:text-5xl">
            <motion.span
              className="text-amber-500"
              initial={{ opacity: 0 }}
              animate={controls}
              custom={0}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              Built with{" "}
            </motion.span>
            <motion.span
              className="text-shadow-dark"
              initial={{ opacity: 0 }}
              animate={controls}
              custom={1}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.6 },
                },
              }}
            >
              precision, trusted by professionals
            </motion.span>
          </h2>
          <motion.p
            variants={fadeIn}
            custom={2}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.8 }}
          >
            Our construction solutions have helped architects, engineers, and
            contractors deliver high-quality projects on time and on budget.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              custom={i}
              className={`${card.className}`}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="grid grid-rows-[auto_1fr] h-full">
                <CardHeader>
                  <motion.img
                    className="h-6 w-fit"
                    src={card.logo}
                    alt={card.alt}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { delay: 0.4 + i * 0.1 },
                      },
                    }}
                  />
                </CardHeader>
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <motion.p
                      className="text-xl font-medium"
                      initial={{ opacity: 0 }}
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { delay: 0.6 + i * 0.1 },
                        },
                      }}
                    >
                      "{card.text}"
                    </motion.p>
                    <motion.div
                      className="grid grid-cols-[auto_1fr] items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { delay: 0.8 + i * 0.1 },
                        },
                      }}
                    >
                      <Avatar className="size-12">
                        <AvatarImage src={card.avatar} alt={card.name} />
                        <AvatarFallback>{card.fallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="text-sm font-medium">{card.name}</cite>
                        <span className="text-muted-foreground block text-sm">
                          {card.title}
                        </span>
                      </div>
                    </motion.div>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
