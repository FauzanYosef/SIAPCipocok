import Organisasi from "@/components/Profile/Organisasi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi - Cipocok",
};

export default function OrganisasiPage() {
  return (
   <main>
      <Organisasi />
    </main>
  );
}