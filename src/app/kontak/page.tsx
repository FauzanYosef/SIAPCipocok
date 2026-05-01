import React from "react";
import { Metadata } from "next";
import Kontak from "@/components/Kontak";


export const metadata: Metadata = {
  title: "Kontak - Cipocok",
};

export default function KontakPage() {
  return (
    <main>
      <Kontak />
    </main>
  );
}
