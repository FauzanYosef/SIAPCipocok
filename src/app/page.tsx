import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Statistik from "@/components/Home/Statistik";
import Introduction  from "@/components/Home/Sambutan";
import Spend from "@/components/Home/Spend";
import Method from "@/components/Home/Method";
import Layanan from "@/components/Home/Layanan";
import Search from "@/components/Home/Search";
import Berita from "@/components/Home/Berita";
import Solution from "@/components/Home/Solution";

export const metadata: Metadata = {
  title: "Cipocok",
};

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Introduction />
      <Statistik />
      {/* <Spend /> */}
      {/* <Method /> */}
      <Layanan />
      {/* <Search /> */}
      <Berita />
      {/* <Solution /> */}
      
    </main>
  );
}
