"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const data = {
  lurah: {
    name: "Fika Andriana Hidayat, A,Md. AK",
  },
  sekertaris: {
    name: "Eslina, S.Tr. Keb",
    staff: ["Muhamad Nuh", "Kandi Lansriharilbi"],
  },
  seksi: [
    {
      title: "Kepala Seksi Pemerintahan Umum dan Pelayanan Publik",
      name: "Fadilah, S.Pd",
      staff: ["Ghozi Al Giffary", "Nur Latifah"],
    },
    {
      title: "Kepala Seksi Keamanan dan Ketertiban",
      name: "Faiz Solehudin, S.Pd",
      staff: ["Nuryadi", "Kendi"],
    },
    {
      title: "Kepala Seksi Pemberdayaan Kemasyarakatan",
      name: "Indina Farah, S.Psi., MM",
      staff: ["Febri Ratna"],
    },
  ],
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-indigo-200 via-white to-indigo-200">
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {children}
    </div>
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold tracking-wide">
    {children}
  </span>
);

const Connector = () => (
  <div className="flex justify-center">
    <div className="w-[2px] h-10 bg-gradient-to-b from-indigo-300 to-transparent" />
  </div>
);

export default function Organisasi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 py-15 space-y-5" ref={ref}>

        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            <span className="text-primary">Struktur </span>
            Organisasi
          </h1>
          <p className="text-gray-500 mt-2">
            Pemerintahan Kelurahan Cipocok Jaya
          </p>
        </motion.div>

        {/* LURAH */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <Card>
            <div className="text-center space-y-3 flex flex-col items-center">

              {/* FOTO LURAH */}
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/sambutan/lurah.png"
                  alt="Foto Lurah"
                  fill
                  className="rounded-full object-cover border-4 border-indigo-100 shadow-md"
                />
              </div>

              <Badge>Lurah</Badge>

              <h2 className="text-xl font-bold text-gray-900">
                {data.lurah.name}
              </h2>
            </div>
          </Card>
        </motion.div>

        <Connector />

        {/* SEKRETARIS */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card>
            <div className="text-center space-y-2">
              <Badge>Sekretaris</Badge>
              <h2 className="text-lg font-semibold text-gray-900">
                {data.sekertaris.name}
              </h2>

              <div className="text-sm text-gray-600 mt-3">
                {data.sekertaris.staff.map((s, i) => (
                  <p key={i}>• {s}</p>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <Connector />

        {/* SECTIONS */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.seksi.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <Card>
                <div className="space-y-3">
                  <Badge>Seksi</Badge>

                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-indigo-600 font-medium">
                    {item.name}
                  </p>

                  <div className="text-sm text-gray-600 border-t pt-3">
                    {item.staff.map((s, idx) => (
                      <p key={idx}>• {s}</p>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}