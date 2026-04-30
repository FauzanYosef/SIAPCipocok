import React from "react";
import { Metadata } from "next";
import Dashboard from "@/components/Dashboard";


export const metadata: Metadata = {
  title: "Dashboard - Cipocok",
};

export default function DashboardPage() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
