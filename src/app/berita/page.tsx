import React from "react";
import { Metadata } from "next";
import Berita from "@/components/Berita";


export const metadata: Metadata = {
  title: "Berita - Cipocok",
};

export default function BeritaPage() {
  return (
    <main>
      <Berita />
    </main>
  );
}
