"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roll, setRoll] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (roll.trim() === "") {
      alert("Please enter a Roll Number");
      return;
    }

    router.push(`/result?roll=${roll}`);
  };

  return (
    <main className="min-h-screen bg-gray-100">

     <Navbar />

      <Hero />
      <Statistics />
      <WhyChooseUs />
      <About />
      <Features />

      <Footer />

    </main>
  );
}