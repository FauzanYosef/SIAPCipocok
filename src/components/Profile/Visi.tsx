"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const VisiMisi = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const misi = [
    "Mewujudkan pelayanan masyarakat yang berkualitas, transparan dan akuntabel",
    "Meningkatkan kualitas SDM aparatur Kelurahan",
    "Menciptakan lingkungan yang aman, kondusif dan damai",
    "Meningkatkan pemberdayaan masyarakat dalam pembangunan",
    "Mengoptimalkan Sistem Informasi dan Pelayanan Administrasi Publik",
    "Mempercepat penguatan ekonomi melalui pemberdayaan UMKM berkelanjutan",
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-20">

        <div ref={ref} className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >

            {/* HERO */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-primary">
                Visi & Misi
              </p>

              <h1 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 font-semibold dark:text-white">
                Visi Anda Menjadi Arah 
                <br />
                <span className="italic font-serif text-primary">Misi </span>Kami
              </h1>

              <p className="text-gray-500 leading-relaxed text-base max-w-lg">
                Kelurahan Cipocok Jaya berkomitmen membangun pelayanan publik
                yang modern, humanis, dan berbasis teknologi untuk menciptakan
                pengalaman masyarakat yang lebih baik.
              </p>
            </div>

            {/* VISI */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Visi</h3>
              
              <p className="text-gray-500 leading-relaxed">
                Terwujudnya Pelayanan Prima menuju Masyarakat Kelurahan yang Mandiri,
                Sejahtera dan Bahagia Warganya
              </p>
            </div>

          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >

            {misi.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-medium text-gray-900 text-right">
                    Misi {index + 1}
                  </h4>
                </div>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisiMisi;