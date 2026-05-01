import Visi from "@/components/Profile/Visi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visi & Misi - Cipocok",
};

export default function VisiPage() {
  return (
   <main>
      <Visi />
    </main>
  );
}