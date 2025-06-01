"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
} from "lucide-react";
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

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="relative border-t bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div className="relative" variants={fadeInUp} custom={0}>
            <motion.h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay <span className="text-amber-400">Connected</span>
            </motion.h2>
            <motion.p
              className="mb-6 text-muted-foreground"
              variants={fadeInUp}
            >
              Join our newsletter for the latest updates and exclusive offers.
            </motion.p>
            <motion.form className="relative" variants={fadeInUp}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </motion.div>
            </motion.form>
            <motion.div
              className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            />
          </motion.div>

          <motion.div variants={fadeInUp} custom={1}>
            <motion.h3
              className="mb-4 text-lg font-semibold"
              variants={fadeInUp}
            >
              Quick Links
            </motion.h3>
            <motion.nav
              className="space-y-2 text-sm"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {["Home", "About Us", "Services", "Products", "Contact"].map(
                (link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block transition-all hover:text-amber-500 hover:drop-shadow-[0_0_6px_#f59e0b]"
                    variants={fadeInUp}
                    custom={i}
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </motion.nav>
          </motion.div>

          <motion.div variants={fadeInUp} custom={2}>
            <motion.h3
              className="mb-4 text-lg font-semibold"
              variants={fadeInUp}
            >
              Contact Us
            </motion.h3>
            <motion.address
              className="space-y-2 text-sm not-italic"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.p variants={fadeInUp}>123 Innovation Street</motion.p>
              <motion.p variants={fadeInUp}>
                Addis Ababa, Ethiopia, TC 12345
              </motion.p>
              <motion.p variants={fadeInUp}>
                Phone:{" "}
                <a
                  href="tel:+251921524559"
                  className="text-dark hover:underline hover:text-amber-600"
                >
                  (+251) 921-524-559
                </a>
              </motion.p>
              <motion.p variants={fadeInUp}>
                Email:{" "}
                <a
                  href="mailto:leulchanie576@gmail.com"
                  className="text-dark hover:underline hover:text-amber-600"
                >
                  leulchanie576@gmail.com
                </a>
              </motion.p>
            </motion.address>
          </motion.div>

          <motion.div className="relative" variants={fadeInUp} custom={3}>
            <motion.h3
              className="mb-4 text-lg font-semibold"
              variants={fadeInUp}
            >
              Follow Us
            </motion.h3>
            <motion.div
              className="mb-6 flex space-x-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, i) => (
                <TooltipProvider key={social.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        variants={fadeInUp}
                        custom={i}
                        whileHover={{
                          scale: 1.1,
                          rotate: 3,
                          backgroundColor: "rgb(245, 158, 11)",
                          color: "white",
                          boxShadow: "0 0 10px rgba(245, 158, 11, 1)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-full border border-input bg-background p-2 text-foreground shadow-sm"
                      >
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.label}</span>
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on {social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center space-x-2"
              variants={fadeInUp}
            >
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row"
          variants={fadeInUp}
          custom={4}
        >
          <motion.p
            className="text-sm text-muted-foreground"
            variants={fadeInUp}
          >
            © {new Date().getFullYear()} Urban Build Construction PLC. All
            rights reserved.
          </motion.p>
          <motion.nav
            className="flex gap-4 text-sm"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-primary"
                  variants={fadeInUp}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.nav>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export { Footerdemo };
