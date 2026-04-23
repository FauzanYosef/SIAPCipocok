"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Layanan = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Animasi lebih smooth
  const leftAnimation = {
    initial: { x: -60, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const rightAnimation = {
    initial: { x: 60, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const layanan = [
    "Pelayanan Surat Pengantar (Domisili, SKTM, dll)",
    "Pengajuan Kartu Keluarga dan KTP",
    "Pelayanan Administrasi Kependudukan",
    "Informasi Kegiatan dan Program Kelurahan",
    "Pengaduan dan Aspirasi Masyarakat",
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="grid md:grid-cols-12 items-center lg:gap-12 gap-8"
        >
          {/* LEFT */}
          <motion.div
            {...leftAnimation}
            className="lg:col-span-6 col-span-12"
          >
            <h2 className="lg:text-4xl text-2xl text-midnight_text font-semibold dark:text-white">
              Layanan Unggulan
              <br />
              <span className="text-primary">
                Kelurahan Cipocok Jaya
              </span>
            </h2>

            <p className="mt-6 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Kami menyediakan berbagai layanan untuk mempermudah masyarakat
              dalam mengurus administrasi dan mendapatkan informasi secara cepat,
              transparan, dan efisien.
            </p>

            {/* LIST LAYANAN */}
            <div className="flex flex-col gap-5 mt-10">
              {layanan.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Icon
                      icon="solar:check-circle-linear"
                      width="18"
                      height="18"
                      className="text-white"
                    />
                  </div>

                  <p className="text-base text-muted dark:text-white dark:text-opacity-80">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex items-center justify-start">
              <Link
                href="/layanan"
                className="lg:text-lg flex gap-3 items-center bg-primary text-white py-3 px-6 rounded-lg mt-12 border border-primary hover:text-primary hover:bg-transparent transition"
              >
                Lihat Semua Layanan
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12"
          >
            <div className="mx-auto max-w-md lg:max-w-full">
              <Image
                src="/images/mobile/mobile.png" // ganti kalau ada ilustrasi pelayanan
                alt="Layanan Kelurahan"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;