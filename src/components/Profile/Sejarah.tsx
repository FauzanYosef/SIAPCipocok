"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Sejarah = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const batasWilayah = [
    "Utara: Kelurahan Karang Anyar",
    "Timur: Kelurahan Panancangan / Banjaragung",
    "Selatan: Kelurahan Curug",
    "Barat: Kelurahan Tembong",
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-20">

        <div ref={ref} className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-primary">
                Sejarah
              </p>

              <h1 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 font-semibold dark:text-white">
                Perjalanan 
                <br />
                <span className="italic font-serif text-primary">
                  Kelurahan Cipocok Jaya
                </span>
              </h1>

              <p className="text-gray-500 leading-relaxed text-base max-w-xl text-justify">
                Kelurahan Cipocok Jaya merupakan salah satu kelurahan di Kecamatan
                Cipocok Jaya, Kota Serang. Wilayah ini menjadi titik temu antara
                kawasan hunian, pusat pendidikan, dan area komersial serta
                mencerminkan transformasi dari wilayah agraris menuju urban.
              </p>

              <p className="text-gray-500 leading-relaxed text-base max-w-xl text-justify">
                Secara geografis memiliki karakteristik lahan landai hingga
                bergelombang rendah dan lokasi yang strategis dekat dengan pusat
                pemerintahan kota maupun provinsi (KP3B).
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >

            {/* BATAS WILAYAH */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">01</span>
                <h4 className="font-medium text-gray-900">
                  Batas Wilayah
                </h4>
              </div>

              <div className="text-sm text-gray-500 mt-3 space-y-1 text-justify">
                {batasWilayah.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </div>

            {/* AKSESIBILITAS */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">02</span>
                <h4 className="font-medium text-gray-900">
                  Aksesibilitas
                </h4>
              </div>

              <p className="text-sm text-gray-500 mt-3 text-justify">
                Dilalui oleh jalan arteri yang menghubungkan pusat Kota Serang
                dengan arah Pandeglang serta memiliki akses dekat menuju pintu
                Tol Serang Timur.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sejarah;