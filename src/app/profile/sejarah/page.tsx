import Sejarah from "@/components/Profile/Sejarah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sejarah - Cipocok",
};

export default function SejarahPage() {
  return (
   <main>
      <Sejarah />
    </main>
  );
}