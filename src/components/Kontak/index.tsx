"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Kontak = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const TopAnimation = {
    initial: { y: -40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.6 },
  };

  const leftAnimation = {
    initial: { x: -50, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7 },
  };

  const rightAnimation = {
    initial: { x: 50, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, delay: 0.2 },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div ref={ref} className="max-w-7xl mx-auto px-4 py-15">
        {/* TITLE */}
        {/* <motion.div {...TopAnimation} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Hubungi <span className="text-primary">Kami</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-white/70">
            Informasi layanan dan kontak Kelurahan Cipocok Jaya
          </p>
        </motion.div> */}

        {/* CONTACT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div {...leftAnimation}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Kontak Kami
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Hubungi <br /> Layanan Kami.
            </h2>

            <p className="mt-6 text-gray-600 dark:text-white/70 leading-8">
              Kelurahan Cipocok Jaya siap membantu kebutuhan administrasi dan
              pelayanan masyarakat. Hubungi kami melalui kontak yang tersedia
              untuk informasi lebih lanjut.
            </p>

            <div className="mt-10 space-y-5">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon icon="solar:map-point-bold" width="22" height="22" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Alamat
                  </h4>

                  <p className="text-gray-600 dark:text-white/70">
                    Jl. Bhayangkara No 67 Kelurahan Cipocok Jaya Kecamatan
                    Cipocok Jaya
                  </p>
                </div>
              </div>

              {/* Jam layanan */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon icon="solar:clock-circle-bold" width="22" height="22" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Jam Layanan
                  </h4>

                  <p className="text-gray-600 dark:text-white/70">
                    Senin - Kamis
                    <br />
                    08:00 - 12:00 / 13:00 - 16:00
                  </p>

                  <p className="text-gray-600 dark:text-white/70 mt-2">
                    Jumat
                    <br />
                    08:00 - 11:30 / 13:30 - 16:00
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            {...rightAnimation}
            className="bg-white dark:bg-midnight_text rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-4 border-b border-gray-100 dark:border-white/10 pb-5">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>

                  <a
                    href="https://wa.me/6282122265518"
                    target="_blank"
                    className="font-semibold text-gray-800 dark:text-white hover:text-primary"
                  >
                    082122265518
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 border-b border-gray-100 dark:border-white/10 pb-5">
                <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Icon icon="mdi:instagram" width="24" height="24" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Instagram</p>

                  <a
                    href="https://instagram.com/kelurahan.cipocokjaya"
                    target="_blank"
                    className="font-semibold text-gray-800 dark:text-white hover:text-primary"
                  >
                    @kelurahan.cipocokjaya
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-center gap-4 border-b border-gray-100 dark:border-white/10 pb-5">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center">
                  <Icon icon="ic:baseline-tiktok" width="24" height="24" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">TikTok</p>

                  <a
                    href="https://tiktok.com/@kelcipocokjaya"
                    target="_blank"
                    className="font-semibold text-gray-800 dark:text-white hover:text-primary"
                  >
                    @kelcipocokjaya
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon icon="material-symbols:mail" width="24" height="24" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <a
                    href="mailto:cipocokjaya2023@gmail.com"
                    className="font-semibold text-gray-800 dark:text-white hover:text-primary"
                  >
                    cipocokjaya2023@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <Link
                href="https://wa.me/6282122265518"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-xl hover:bg-transparent hover:text-primary border border-primary transition duration-300"
              >
                Hubungi Sekarang
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="18"
                  height="18"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <div className="pt-2">
            <h4 className="text-sm text-gray-500 mb-4">Lokasi Kantor</h4>

            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
                <iframe
                src="https://www.google.com/maps?q=-6.109896,106.177559&hl=id&z=16&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;