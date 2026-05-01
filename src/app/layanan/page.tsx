import React from "react";
import { Metadata } from "next";
import Layanan from "@/components/Layanan";


export const metadata: Metadata = {
  title: "Layanan - Cipocok",
};

export default function LayananPage() {
  return (
    <main>
      <Layanan />
    </main>
  );
}
