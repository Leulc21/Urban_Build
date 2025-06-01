"use client";
import { Logos3 } from "@/components/logos3";

const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "/assets/img/logoani/lg1.png",
      className: "h-8 w-auto mx-6",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "/assets/img/logoani/lg2.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "/assets/img/logoani/lg3.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "/assets/img/logoani/lg4.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "/assets/img/logoani/lg5.png",
      className: "h-10 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "/assets/img/logoani/lg6.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "/assets/img/logoani/lg7.svg",
      className: "h-10 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "/assets/img/logoani/lg8.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-9",
      description: "Vercel",
      image: "/assets/img/logoani/lg9.png",
      className: "h-16 w-auto mx-4",
    },
    {
      id: "logo-10",
      description: "Vercel",
      image: "/assets/img/logoani/lg10.svg",
      className: "h-10 w-auto mx-4",
    },
  ],
};

function Mycarsouel() {
  return <Logos3 {...demoData} />;
}

export default Mycarsouel;
